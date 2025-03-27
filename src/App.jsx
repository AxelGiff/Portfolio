import './App.css';
import './index.css';
import Header from './Header.jsx';
import Avatar from './Avatar.jsx';
import LandingPage from './LandingPage.jsx';
import About from './About.jsx';
import History from './History.jsx';
import Contact from './Contact.jsx';
import Routage from './Routage.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectDetail from './ProjectDetail.jsx'; // Créez ce composant pour afficher les détails d'un projet
import LanguageSelector from './LanguageSelector.jsx';
import React, { Suspense, lazy } from 'react';


const Projects = lazy(() => import('./Projects'));

function App() {
  return (
    <div className="font-apple">
      <Header />
      <Routes>
        <Route path="/" element={<Routage />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/projects" element={ // Route pour le composant Projects lazy loaded
          <Suspense fallback={<div>Chargement des projets...</div>}>
            <Projects />
          </Suspense>
        } />
      </Routes>
    </div>
  );
}
export default App;
