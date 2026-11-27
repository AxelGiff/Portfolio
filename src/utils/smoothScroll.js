let controller = null;

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

function getMaxScroll() {
  const doc = document.documentElement;
  return Math.max(0, doc.scrollHeight - window.innerHeight);
}

function canNestedElementScroll(target, deltaY) {
  let node = target instanceof Element ? target : null;
  while (node && node !== document.body && node !== document.documentElement) {
    const style = window.getComputedStyle(node);
    const overflowY = style.overflowY;
    if ((overflowY === 'auto' || overflowY === 'scroll') && node.scrollHeight > node.clientHeight + 1) {
      if (deltaY < 0 && node.scrollTop > 0) return true;
      if (deltaY > 0 && node.scrollTop + node.clientHeight < node.scrollHeight - 1) return true;
    }
    node = node.parentElement;
  }
  return false;
}

function normalizeWheelDelta(event) {
  let delta = event.deltaY;
  if (event.deltaMode === 1) {
    delta *= 32;
  } else if (event.deltaMode === 2) {
    delta *= window.innerHeight;
  }
  return delta;
}

/**
 * Initializes zero-dependency inertial wheel smoothing when reduced motion is off.
 */
export function initSmoothScroll() {
  if (typeof window === 'undefined' || prefersReducedMotion() || controller) {
    return () => {};
  }

  let currentY = window.scrollY;
  let targetY = currentY;
  let rafId = null;
  let lastTime = 0;

  const stop = () => {
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    lastTime = 0;
  };

  const syncFromWindow = () => {
    stop();
    currentY = window.scrollY;
    targetY = currentY;
  };

  const step = (now) => {
    if (!lastTime) lastTime = now;
    const dt = Math.min(0.05, Math.max(0.001, (now - lastTime) / 1000));
    lastTime = now;

    const maxScroll = getMaxScroll();
    targetY = Math.min(maxScroll, Math.max(0, targetY));

    const diff = targetY - currentY;
    if (Math.abs(diff) < 0.5) {
      currentY = targetY;
      window.scrollTo(0, Math.round(currentY));
      rafId = null;
      lastTime = 0;
      return;
    }

    const alpha = 1 - Math.exp(-10 * dt);
    currentY += diff * alpha;
    window.scrollTo(0, currentY);
    rafId = requestAnimationFrame(step);
  };

  const start = () => {
    if (rafId === null) {
      currentY = window.scrollY;
      lastTime = 0;
      rafId = requestAnimationFrame(step);
    }
  };

  const onWheel = (event) => {
    if (event.defaultPrevented || event.ctrlKey || event.metaKey) return;
    if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;

    const delta = normalizeWheelDelta(event);
    if (!delta || canNestedElementScroll(event.target, delta)) return;

    event.preventDefault();

    if (rafId === null) {
      currentY = window.scrollY;
      targetY = currentY;
    }

    const maxScroll = getMaxScroll();
    targetY = Math.min(maxScroll, Math.max(0, targetY + delta));
    start();
  };

  const onKeyDown = (event) => {
    if (
      event.key === 'ArrowUp' ||
      event.key === 'ArrowDown' ||
      event.key === 'PageUp' ||
      event.key === 'PageDown' ||
      event.key === 'Home' ||
      event.key === 'End' ||
      event.key === ' '
    ) {
      syncFromWindow();
    }
  };

  const onScroll = () => {
    if (rafId === null) {
      currentY = window.scrollY;
      targetY = currentY;
    }
  };

  window.addEventListener('wheel', onWheel, { passive: false });
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('keydown', onKeyDown, { passive: true });
  window.addEventListener('touchstart', syncFromWindow, { passive: true });
  window.addEventListener('pointerdown', syncFromWindow, { passive: true });

  controller = {
    scrollTo(y, immediate) {
      const maxScroll = getMaxScroll();
      const clamped = Math.min(maxScroll, Math.max(0, y));
      if (immediate) {
        stop();
        currentY = clamped;
        targetY = clamped;
        window.scrollTo(0, clamped);
        return;
      }
      if (rafId === null) {
        currentY = window.scrollY;
      }
      targetY = clamped;
      start();
    },
    destroy() {
      stop();
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('touchstart', syncFromWindow);
      window.removeEventListener('pointerdown', syncFromWindow);
      controller = null;
    },
  };

  return () => {
    if (controller) controller.destroy();
  };
}

/**
 * Scrolls smoothly to a numeric offset, CSS selector, or DOM element.
 */
export function smoothScrollTo(target, options = {}) {
  if (typeof window === 'undefined') return;

  const immediate = Boolean(options.immediate) || prefersReducedMotion();
  let targetY = null;

  if (typeof target === 'number') {
    targetY = target;
  } else {
    const el = typeof target === 'string' ? document.querySelector(target) : target;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    targetY = rect.top + window.scrollY;
  }

  if (controller) {
    controller.scrollTo(targetY, immediate);
    return;
  }

  window.scrollTo({
    top: Math.max(0, targetY),
    behavior: immediate ? 'auto' : 'smooth',
  });
}
