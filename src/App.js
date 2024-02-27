import React from 'react';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import Histoire from './components/Histoire';
import Competences from './components/Competences';

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
      <Competences />
      <div></div>
    </div>
  );
}

export default App;
