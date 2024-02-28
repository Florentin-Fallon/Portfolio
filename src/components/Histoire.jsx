import React from 'react';
import { info } from '../info/info';
import Hobbies from './Hobbies';

function Histoire() {
  return (
    <div className='text-white'>
      <div className='flex-row mt-8 p-24 justify-center grid md:grid-cols-2 gap-8 items-center'>
        <div>
          <img className='mx-auto h-auto md:h-[200px] lg:h-[400px] rounded-full' src={require('../img/florentin.jpeg')} alt="Florentin Fallon" />
        </div>
        <div>
          <h1 className='text-5xl text-center mb-12' id='Histoire'>Mon histoire</h1>
          {info.bio.map((bioItem, index) => (
            <p className='ml-6 text-xl tracking-wide leading-relaxed text-justify' key={index}>{bioItem.text}</p>
          ))}
        </div>
      </div>
      <Hobbies />
    </div>
  );
}

export default Histoire;
