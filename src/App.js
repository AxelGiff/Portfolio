import './App.css';
import './index.css';
import Header from './Header.jsx';
import Avatar from './Avatar.jsx';
import LandingPage from './LandingPage.jsx';
import About from './About.jsx';
import History from './History.jsx';

function App() {
  return (
    <div className="font-apple">
      <Header />

      <LandingPage />
      <History />
      {/*<img alt="Product Preview" loading="lazy" width="60%" height="60%" decoding="async" data-nimg="1" className="invisible sm:visible mx-auto [mask-image:linear-gradient(to_bottom,white,white,transparent)] transition duration-1000 h-full relative z-40 opacity-10" style={{color:"transparent"}}  src={require("./images/About-img-removebg.png")} /> 
     {  <img alt="Product Preview" loading="lazy" width="1200" height="600" decoding="async" data-nimg="1" className="invisible sm:visible mx-auto [mask-image:linear-gradient(to_bottom,white,white,transparent)] transition duration-1000 h-full relative z-40 opacity-100" style={{color:"transparent"}}  src={require("./images/fond écran olala.png")} /> */}


    <About />
      <section id="contact">
        <h2>Contact Section</h2>
        {/* Votre contenu Contact */}
      </section>

      {/* Ajoutez plus de contenu au besoin */}

      {/* Ajoutez du contenu en bas de la page pour pouvoir faire défiler vers le bas */}
      <div style={{ height: '100vh' }}>
        <p>Scroll down to test the navigation</p>
      </div>
      <section >
        <h2>About Section</h2>
        {/* Votre contenu About */}
      </section>

      <section id="projects">
        <h2>Projects Section</h2>
        {/* Votre contenu Projects */}
      </section>

      <section id="contact">
        <h2>Contact Section</h2>
        {/* Votre contenu Contact */}
      </section>

      {/* Ajoutez plus de contenu au besoin */}

      {/* Ajoutez du contenu en bas de la page pour pouvoir faire défiler vers le bas */}
      <div style={{ height: '100vh' }}>
        <p>Scroll down to test the navigation</p>
      </div>
    </div>
  );
}

export default App;
