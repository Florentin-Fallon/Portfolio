import React from 'react';
import { info } from '../info/info';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';

function LandingPage({ link, icon, label }) {
  return (
    <div className="text-white">
      <div className="container mx-auto px-4 pt-24 md:pt-36 mt-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-8">
              Je suis <span className='text-orange-400'>{info.firstname}</span> {info.lastname}
            </h1>
            <p className="text-lg md:text-2xl mt-6 hover:scale-105 transition duration-300 hover:text-orange-400">
              {info.miniBio[0].emoji} {info.miniBio[0].text}
            </p>
            <p className="text-lg md:text-2xl mt-4 hover:scale-105 transition duration-300 hover:text-orange-400">
              {info.miniBio[1].emoji} {info.miniBio[1].text}
            </p>
            <p className="text-lg md:text-2xl mt-4 hover:scale-105 transition duration-300 hover:text-orange-400">
              {info.miniBio[2].emoji} {info.miniBio[2].text}
            </p>
            <p className="text-lg md:text-2xl mt-4 hover:scale-105 transition duration-300 hover:text-orange-400">
              {info.miniBio[3].emoji} {info.miniBio[3].text}
            </p>
            <div className='flex flex-row items-center ml-16'>
              {info.social.map((item, index) => (
                <a key={index} href={item.link} className="mr-24 flex flex-row mt-14 hover:border-b-2 hover:border-b-orange-400 hover:pb-2" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={item.icon === 'fa fa-linkedin' ? faLinkedin : item.icon === 'fa fa-github' ? faGithub : faGithub} size="2x" />
                  <p className='ml-2 items-center flex'>{item.label}</p>
                </a>
              ))}
            </div>
          </div>
          <div>
            <img
              className="mx-auto h-auto md:h-[600px] lg:h-[500px] rounded-xl transition duration-300 transform hover:scale-110"
              src="https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_960_720.jpg"
              alt="Florentin"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
