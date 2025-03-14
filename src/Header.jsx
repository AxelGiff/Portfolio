// filepath: c:\Users\vadzt\Documents\PortFolio\src\Header.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  
  const [isBlurred, setIsBlurred] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop } = document.documentElement;

      if (scrollTop > 50) {
        setIsBlurred(true);
        setIsScrolled(true);
      } else {
        setIsBlurred(false);
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (event, link) => {
    event.preventDefault();
    setActiveLink(link);
    const targetUrl = event.target.getAttribute("href");

    // Vous pouvez effectuer d'autres actions liées au clic ici si nécessaire

    // Redirection vers l'URL cible
    window.location.href = targetUrl;
  };

  return (
    <header>
      <nav className="nav">
        <ul className={`ul-nav ${isBlurred ? 'blur_class' : ''}`}>
          <li className="nav-li">
            <Link to="/#" className={`a-list ${activeLink === 'Home' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, 'Home')}>
              {t('Home')}  <span className="slash" >/</span>
            </Link>
          </li>
          <li className="nav-li">
            <Link to="/#about-container" className={`a-list ${activeLink === 'About' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, 'About')}>
              {t('About')}
            </Link>
          </li>
          <li className="nav-li">
            <Link to="/#project-container" className={`a-list ${activeLink === 'Projects' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, 'Projects')}>
              {t('Projects')}
            </Link>
          </li>
          <li className="nav-li">
            <a href="/#contact-container" className={`a-list ${activeLink === 'Contact' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, 'Contact')}>
              {t('Contact')}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;