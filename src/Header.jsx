import React, { useEffect, useState, useCallback, memo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NavLink = memo(({ to, onClick, isActive, children }) => (
  <li className="nav-li">
    <Link 
      to={to} 
      className={`a-list ${isActive ? 'active' : ''}`} 
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

  // Mettre à jour le lien 
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

  //  blur 
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop } = document.documentElement;
      setIsBlurred(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  //  gérer le défilement vers les sections
  const handleLinkClick = useCallback((e, link, target) => {
    e.preventDefault();
    setActiveLink(link);
    
    if (location.pathname !== '/') {
      navigate('/');
      // la section après un court délai
      setTimeout(() => {
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.pathname, navigate]);

  return (
    <header>
      <nav className="nav">
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
