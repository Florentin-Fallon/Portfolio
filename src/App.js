import React from 'react';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Histoire from './components/Histoire';
import Projets from './components/Projets';
import Competences from './components/Competences';
import Contact from './components/Contact';

function App() {
  return (
    <div className="text-white text-center text-2xl">
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
