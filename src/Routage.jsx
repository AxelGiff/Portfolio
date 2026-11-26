import React, { memo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LandingPage from './LandingPage.jsx';
import About from './About.jsx';
import History from './History.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';

const Routage = memo(() => {
  const location = useLocation();

  useEffect(() => {
    const targetId = location.hash ? location.hash.slice(1) : location.state?.scrollTo;
    if (!targetId) return;

    let attempts = 0;
    const scrollWhenReady = () => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
      if (attempts < 10) {
        attempts += 1;
        requestAnimationFrame(scrollWhenReady);
      }
    };

    requestAnimationFrame(scrollWhenReady);
  }, [location.hash, location.state]);

  return (
    <>
      <LandingPage />
      <History />
      <Projects />
      <About />
      <Contact />
    </>
  );
});

export default Routage;
