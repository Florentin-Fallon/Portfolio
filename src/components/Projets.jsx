import React from 'react'
import CardProject from './CardProject'
import { info } from '../info/info'

function Projets() {
  return (
    <div>
      <h1 className='text-5xl text-center text-white mb-16 mt-32' id='projets'>Projets</h1>
      <div className='flex justify-center align-middle flex-wrap mt-8'>
        <div className='flex mx-8 mb-4'>
          <CardProject
          imgSrc={info.portfolio[0].image}
          imgAlt={"Club d'airsoft"}
          title={info.portfolio[0].title}
          description={info.portfolio[0].description}
          nameRepos={"Voir le repos"}
          git={info.portfolio[0].source}
          buttonText={"Voir le site"}
          link={info.portfolio[0].live}
          />
        </div>
        <div className='flex mx-8 mb-4'>
          <CardProject
          imgSrc={info.portfolio[1].image}
          imgAlt={"Application génération d'images"}
          title={info.portfolio[1].title}
          description={info.portfolio[1].description}
          nameRepos={"Voir le repos"}
          git={info.portfolio[1].source}
          />
        </div>
        <div className='flex mx-8 mb-4'>
          <CardProject
          imgSrc={info.portfolio[2].image}
          imgAlt={"Portfolio"}
          title={info.portfolio[2].title}
          description={info.portfolio[2].description}
          nameRepos={"Voir le repos"}
          git={info.portfolio[2].source}
          />
        </div>
      </div>
    </div>
  )
}

export default Projets