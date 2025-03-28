import React, { memo } from 'react';
import LandingPage from './LandingPage.jsx';
import About from './About.jsx';
import History from './History.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';

const Routage = memo(() => {
  return (
    <>
      <LandingPage />
      <History/>
      <About />
      <Projects />
      <Contact />
    </>
  );
});

export default Routage;
