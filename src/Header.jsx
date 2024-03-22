import React, { useEffect, useState } from 'react';

const Header = () => {
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
        <a href="#" className={`a-list ${activeLink === 'Home' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, 'Home')}>
            Home
            <span className="slash">/</span>
          </a>
        </li>
        <li className="nav-li">
        <a href="#about-container" className={`a-list ${activeLink === 'About' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, 'About')}>
            About
          </a>
        </li>
        <li className="nav-li">
        <a href="#projects" className={`a-list ${activeLink === 'Projects' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, 'Projects')}>
            Projects
          </a>
        </li>
        <li className="nav-li">
        <a href="#contact" className={`a-list ${activeLink === 'Contact' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, 'Contact')}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
    </header>
  );
};
export default Header;