import React, { useEffect, useState, useCallback, memo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NavLink = memo(({ to, onClick, isActive, children }) => (
  <li className="nav-li">
    <Link
      to={to}
      className={`a-list ${isActive ? 'active' : ''}`}
      aria-current={isActive ? 'page' : undefined}
      onClick={onClick}
    >
      {children}
    </Link>
  </li>
));

const MobileDockIcon = ({ name }) => {
  switch (name) {
    case 'Home':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5 9.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5" />
        </svg>
      );
    case 'Projects':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
        </svg>
      );
    case 'About':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c1.6-3.8 5-6 8-6s6.4 2.2 8 6" />
        </svg>
      );
    case 'Contact':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
    default:
      return null;
  }
};

const Header = memo(() => {
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const isFr = i18n.language?.startsWith('fr');

  const [isBlurred, setIsBlurred] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    if (location.pathname === '/') {
      if (location.hash === '#about-container') {
        setActiveLink('About');
      } else if (location.hash === '#project-container') {
        setActiveLink('Projects');
      } else if (location.hash === '#contact-container') {
        setActiveLink('Contact');
      } else {
        setActiveLink('Home');
      }
    } else if (location.pathname.startsWith('/projects')) {
      setActiveLink('Projects');
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsBlurred(scrollTop > 50);

      if (location.pathname !== '/') return;
      const sections = [
        { id: 'contact-container', name: 'Contact' },
        { id: 'about-container', name: 'About' },
        { id: 'project-container', name: 'Projects' },
      ];
      const offset = window.innerHeight * 0.35;
      let matched = 'Home';
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el && el.getBoundingClientRect().top <= offset) {
          matched = sec.name;
          break;
        }
      }
      setActiveLink(matched);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleLinkClick = useCallback((e, link, target) => {
    e.preventDefault();
    setActiveLink(link);

    if (location.pathname !== '/') {
      const targetId = target === 'body' ? null : target.replace('#', '');
      navigate(targetId ? `/#${targetId}` : '/', {
        state: targetId ? { scrollTo: targetId } : undefined,
      });
      if (!targetId) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (target === 'body') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.replaceState(null, '', '/');
    } else {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState(null, '', `/${target}`);
      }
    }
  }, [location.pathname, navigate]);

  const mobileItems = [
    { id: 'Home', to: '/', target: 'body', label: isFr ? 'Accueil' : 'Home' },
    { id: 'Projects', to: '/#project-container', target: '#project-container', label: isFr ? 'Projets' : 'Projects' },
    { id: 'About', to: '/#about-container', target: '#about-container', label: isFr ? 'À propos' : 'About' },
    { id: 'Contact', to: '/#contact-container', target: '#contact-container', label: 'Contact' },
  ];

  return (
    <header>
      {/* Desktop top pill navbar */}
      <nav className="nav hidden md:flex" aria-label="Navigation principale">
        <ul className={`ul-nav ${isBlurred ? 'blur_class' : ''}`}>
          <NavLink
            to="/"
            isActive={activeLink === 'Home'}
            onClick={(e) => handleLinkClick(e, 'Home', 'body')}
          >
            Home <span className="slash">/</span>
          </NavLink>

          <NavLink
            to="/#project-container"
            isActive={activeLink === 'Projects'}
            onClick={(e) => handleLinkClick(e, 'Projects', '#project-container')}
          >
            Projects
          </NavLink>

          <NavLink
            to="/#about-container"
            isActive={activeLink === 'About'}
            onClick={(e) => handleLinkClick(e, 'About', '#about-container')}
          >
            About
          </NavLink>

          <NavLink
            to="/#contact-container"
            isActive={activeLink === 'Contact'}
            onClick={(e) => handleLinkClick(e, 'Contact', '#contact-container')}
          >
            Contact
          </NavLink>
        </ul>
      </nav>

      {/* Mobile thumb-reachable floating bottom dock */}
      <nav
        className="mobile-dock md:hidden fixed bottom-3 inset-x-3 z-[1000] pb-[env(safe-area-inset-bottom)]"
        aria-label={isFr ? 'Navigation mobile' : 'Mobile navigation'}
      >
        <ul className="mobile-dock-bar grid grid-cols-4 items-center rounded-2xl border border-white/15 bg-neutral-950/88 p-1.5 backdrop-blur-xl shadow-[0_12px_36px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.08)]">
          {mobileItems.map((item) => {
            const isActive = activeLink === item.id;
            return (
              <li key={item.id}>
                <Link
                  to={item.to}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={(e) => handleLinkClick(e, item.id, item.target)}
                  className={`mobile-dock-link flex flex-col items-center justify-center gap-1 rounded-xl py-2 min-h-[52px] text-[11px] font-medium transition active:scale-95 ${
                    isActive
                      ? 'mobile-dock-active bg-sky-500/20 text-sky-300'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <MobileDockIcon name={item.id} />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
});

export default Header;
