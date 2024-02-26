import React from 'react';

function LandingPage() {
  return (
    <div className=" text-white">
      <div className="container mx-auto px-4 pt-24 md:pt-36">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-8">
            <span className='text-orange-400'>Bonjour,</span> je suis Florentin</h1>
            <p className="text-xl md:text-2xl">
            Étudiant en informatique passionné par le développement web.
            </p>
          </div>
          <div>
            <img
              className="mx-auto h-auto md:h-[600px] lg:h-[500px] rounded-md transition duration-300 transform hover:scale-110"
              src="https://cdn.pixabay.com/photo/2019/07/14/16/29/pen-4337524_960_720.jpg"
              alt="Florentin"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
