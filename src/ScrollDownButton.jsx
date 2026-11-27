
import { smoothScrollTo } from './utils/smoothScroll.js';

const ScrollDownButton = () => {
  const handleScrollDown = () => {
    const aboutEl = document.getElementById('about-container');
    if (aboutEl) {
      smoothScrollTo(aboutEl);
    } else {
      smoothScrollTo(window.innerHeight);
    }
  };

  return (
    <button
      type="button"
      onClick={handleScrollDown}
      aria-label="Scroll down to About section"
      className="absolute bottom-10 lg:bottom-2 p-3 rounded-full text-white/80 hover:text-white hover:translate-y-1 transition duration-300 hidden sm:block"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 500 500" fill="currentColor" aria-hidden="true">
        <path d="M25.5508 159.678L63.0508 123.549L250.532 304.174L438.051 123.549L475.551 159.678L250.551 376.449L192.769 320.78L25.5508 159.678Z" />
      </svg>
    </button>
  );
};

export default ScrollDownButton;