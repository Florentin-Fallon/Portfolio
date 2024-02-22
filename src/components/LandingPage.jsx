import React from 'react'

function LandingPage() {
  return (
    <div className="text-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <h1 className="md:text-4xl sm:text-4xl text-4xl font-bold md:py-6">
              Bienvenue sur mon portfolio
            </h1>
            <div className="flex justify-center items-center">
                <p className=" md:text-xl sm:text-xl text-xl">
                    je suis Florentin, étudiant en informatique
                </p>
            </div>
        </div>
    </div>
  )
}

export default LandingPage