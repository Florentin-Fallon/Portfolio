import React from 'react';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import Histoire from './components/Histoire';
import Competences from './components/Competences';
import Projets from './components/Projets';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <LandingPage />
      </div>
      <div>
        <Histoire />
      </div>
      <div>
      <Competences />
      </div>
      <div>
        <Projets />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
