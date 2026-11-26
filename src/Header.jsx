import React, { useEffect, useState, useCallback, memo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

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

const Header = memo(() => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [isBlurred, setIsBlurred] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  // Ajuster l'onglet actif en fonction de l'URL
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
    } else if (location.pathname.startsWith('/projects/')) {
      setActiveLink('Projects');
    } else if (location.pathname === '/projects') {
      setActiveLink('Projects');
    }
  }, [location]);

  // Effet de flou sur défilement + suivi de section active
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

  // Fonction optimisée pour la navigation
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

  return (
    <header>
      <nav className="nav" aria-label="Navigation principale">
        <ul className={`ul-nav ${isBlurred ? 'blur_class' : ''}`}>
          <NavLink 
            to="/" 
            isActive={activeLink === 'Home'}
            onClick={(e) => handleLinkClick(e, 'Home', 'body')}
          >
            Home <span className="slash">/</span>
          </NavLink>
          
          <NavLink 
            to="/#about-container" 
            isActive={activeLink === 'About'}
            onClick={(e) => handleLinkClick(e, 'About', '#about-container')}
          >
            About
          </NavLink>
          
          <NavLink 
            to="/#project-container" 
            isActive={activeLink === 'Projects'}
            onClick={(e) => handleLinkClick(e, 'Projects', '#project-container')}
          >
            Projects
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
    </header>
  );
});

export default Header;
