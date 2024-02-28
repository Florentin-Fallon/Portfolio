import React from 'react'

function Hobbies() {
  return (
    <div className='items-center'>
        <h1 className='text-4xl text-center text-white mb-12'>Hobbies</h1>
        <div className='flex flex-wrap justify-center items-center'>
            <ul className='text-2xl text-white flex'>
                <li className='mb-4 mr-16'>
                    <img src={require('../img/musique.png')} alt='music' className='w-16 h-16 inline-block mr-4 rounded-full' />
                    Musique
                </li>
                <li className='mb-4 mr-16'>
                    <img src={require('../img/football.png')} alt='football' className='w-16 h-16 inline-block mr-4 rounded-full' />
                    Football
                </li>
                <li className='mb-4 mr-16'>
                    <img src={require('../img/patch.png')} alt='airsoft' className='w-16 h-16 inline-block mr-4 rounded-full' />
                    Airsoft
                </li>
                <li className='mb-4 mr-16'>
                    <img src={require('../img/dessin.png')} alt='dessin' className='w-16 h-16 inline-block mr-4 rounded-full' />
                    Dessin
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Hobbies