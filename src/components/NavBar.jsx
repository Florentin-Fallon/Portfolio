import React from 'react'

function NavBar() {
  return (
    <div>
        <nav class="flex items-center bg-black p-3 flex-wrap">
          <a href="/">
          <span class="text-xl text-white font-semibold uppercase ml-6"><span className='text-orange-400'>Florentin</span> Fallon</span>
          </a>
        <div class="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto mr-6" id="navigation">
          <div class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <a
              href="/"
              class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:text-orange-400"
            >
              <span>Accueil</span>
            </a>
            <a
              href="/"
              class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:text-orange-400"
            >
              <span>Histoire</span>
            </a>
            <a
              href="/"
              class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:text-orange-400"
            >
              <span>Compétences</span>
            </a>
            <a
              href="/"
              class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:text-orange-400"
            >
              <span>Projets</span>
            </a>
            <a
              href="/"
              class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:text-orange-400"
            >
              <span>Contact</span>
            </a>
          </div>
        </div>
    </nav>

    </div>
  )
}

export default NavBar
