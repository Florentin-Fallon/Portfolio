import React from 'react'
import Card from './Card'
import { info } from '../info/info'

function Competences() {
  return (
    <div id='competences'>
      <div className='text-white'>
        <h1 className='text-5xl text-center'>Compétences</h1>
      </div>
      <h1 className='text-3xl text-center mt-8 text-orange-400 font-semibold'>Front-end</h1>
      <div className='flex justify-center align-middle flex-wrap mt-8'>
        <div className='flex mx-4 mb-4'>
          <Card 
            imgSrc={require('../img/html-5.png')}
            imgAlt={'HTML'}
            title={info.competences[0].label}
          />
        </div>
        <div className='flex mx-4 mb-4'>
          <Card
            imgSrc={require('../img/css-3.png')}
            imgAlt={'CSS'}
            title={info.competences[1].label}
          />
        </div>
        <div className='flex mx-4 mb-4'>
          <Card
            imgSrc={require('../img/css-3.png')}
            imgAlt={'Tailwind'}
            title={info.competences[2].label}
          />
        </div>
        <div className='flex mx-4 mb-4'>
          <Card
            imgSrc={require('../img/css-3.png')}
            imgAlt={'Boostrap'}
            title={info.competences[3].label}
          />
        </div>
        <div className='flex mx-4 mb-4'>
          <Card
            imgSrc={require('../img/React.png')}
            imgAlt={'React.js'}
            title={info.competences[4].label}
          />
        </div>
        <div className='flex mx-4 mb-4'>
          <Card
            imgSrc={require('../img/React.png')}
            imgAlt={'React Native'}
            title={info.competences[5].label}
          />
        </div>
      </div>
      <h1 className='text-3xl text-center mt-8 text-orange-400 font-semibold'>Back-end</h1>
      <div className='flex justify-center align-middle flex-wrap mt-8'>
        <div className='flex mx-4 mb-4'>
          <Card
            imgSrc={require('../img/javascript.png')}
            imgAlt={'JavaScript'}
            title={info.competences[6].label}
          />
        </div>
        <div className='flex mx-4 mb-4'>
          <Card
            imgSrc={require('../img/PHP-logo.png')}
            imgAlt={'PHP'}
            title={info.competences[7].label}
          />
        </div>
        <div className='flex mx-4 mb-4'>
          <Card
            imgSrc={require('../img/sql.png')}
            imgAlt={'SQL'}
            title={info.competences[8].label}
          />
        </div>
        <div className='flex mx-4 mb-4'>
          <Card
            imgSrc={require('../img/NodeJS.jpg')}
            imgAlt={'Node.js'}
            title={info.competences[9].label}
          />
        </div>
      </div>
      <h1 className='text-3xl text-center mt-8 text-orange-400 font-semibold'>Outils</h1>
      <div className='flex justify-center align-middle flex-wrap mt-8'>
        <div className='flex mx-4 mb-4'>
          <Card
            imgSrc={require('../img/figma.png')}
            imgAlt={'Figma'}
            title={info.competences[10].label}
          />
        </div>
        <div className='flex mx-4 mb-4'>
          <Card
            imgSrc={require('../img/trello.jpg')}
            imgAlt={'Trello'}
            title={info.competences[11].label}
          />
        </div>
        <div className='flex mx-4 mb-4'>
          <Card
            imgSrc={require('../img/Notion.png')}
            imgAlt={'Notion'}
            title={info.competences[12].label}
          />
        </div>
        <div className='flex mx-4 mb-4'>
          <Card
            imgSrc={require('../img/jetbrains.png')}
            imgAlt={'JetBrains'}
            title={info.competences[13].label}
          />
        </div>
        <div className='flex mx-4 mb-4'>
          <Card
            imgSrc={require('../img/vscode.png')}
            imgAlt={'Visual Studio Code'}
            title={info.competences[14].label}
          />
        </div>
        <div className='flex mx-4 mb-4'>
          <Card
            imgSrc={require('../img/Git.png')}
            imgAlt={'Git'}
            title={info.competences[15].label}
          />
        </div>
      </div>
    </div>
  )
}

export default Competences