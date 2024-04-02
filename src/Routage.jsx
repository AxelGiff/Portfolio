import React from 'react'
import LandingPage from './LandingPage.jsx';
import About from './About.jsx';
import History from './History.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx'


export default function Routage() {

  return (
    <div>
      <LandingPage />
      <History/>
      <About />
      <Projects />
      <Contact />
    </div>
  )
}
