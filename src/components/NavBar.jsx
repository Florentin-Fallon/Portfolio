import React from 'react'
import {info} from "../info/info"

function NavBar() {
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div>
        <nav className="flex items-center bg-black p-3 flex-wrap mt-4">
          <a href="/">
          <span className="text-2xl font-semibold uppercase ml-6 text-orange-400">{info.surnom}</span>
          </a>
        <div className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto mr-6" id="navigation">
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <a
              href="/"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:text-orange-400"
              onClick={() => scrollToSection('accueil')}
            >
              <span>Accueil</span>
            </a>
            <a
              href="#histoire"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:text-orange-400"
              onClick={() => scrollToSection('Histoire')}
            >
              <span>Histoire</span>
            </a>
            <a
              href="#competences"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:text-orange-400"
              onClick={() => scrollToSection('competences')}
            >
              <span>Compétences</span>
            </a>
            <a
              href="#projets"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:text-orange-400"
              onClick={() => scrollToSection('projets')}
            >
              <span>Projets</span>
            </a>
            <a
              href="#contact"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:text-orange-400 Navlink"
              onClick={() => scrollToSection('contact')}
            >
              <span >Contact</span>
            </a>
          </div>
        </div>
    </nav>

    </div>
  )
}

export default NavBar;
