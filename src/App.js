import './App.css';
import './index.css';
import Header from './Header.jsx';
import Avatar from './Avatar.jsx';
import LandingPage from './LandingPage.jsx';
import About from './About.jsx';
import History from './History.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';

function App() {
  return (
    <div className="font-apple">
      <Header />

      <LandingPage />
      <History />
      {/*<img alt="Product Preview" loading="lazy" width="60%" height="60%" decoding="async" data-nimg="1" className="invisible sm:visible mx-auto [mask-image:linear-gradient(to_bottom,white,white,transparent)] transition duration-1000 h-full relative z-40 opacity-10" style={{color:"transparent"}}  src={require("./images/About-img-removebg.png")} /> 
     {  <img alt="Product Preview" loading="lazy" width="1200" height="600" decoding="async" data-nimg="1" className="invisible sm:visible mx-auto [mask-image:linear-gradient(to_bottom,white,white,transparent)] transition duration-1000 h-full relative z-40 opacity-100" style={{color:"transparent"}}  src={require("./images/fond écran olala.png")} /> */}


    <About />
    
    <Projects />
     <Contact />
    </div>
  );
}

export default App;
