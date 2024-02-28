import React from 'react';
import { info } from '../info/info';

function Histoire() {
  return (
    <div className='text-white' id='Histoire'>
      <div className='flex-row mt-8 p-24 justify-center grid md:grid-cols-2 gap-8 items-center'>
        <div>
          <img className='mx-auto h-auto md:h-[600px] lg:h-[500px] rounded-full' src="https://cdn.pixabay.com/photo/2022/05/22/16/50/outdoors-7213961_1280.jpg" alt="Florentin Fallon" />
        </div>
        <div>
          <h1 className='text-5xl text-center mb-12'>Mon histoire</h1>
          {info.bio.map((bioItem, index) => (
            <p className='ml-6 text-lg tracking-wide leading-relaxed' key={index}>{bioItem.text}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Histoire;
