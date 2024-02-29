import React from 'react'
import CardProject from './CardProject'
import { info } from '../info/info'

function Projets() {
  return (
    <div>
      <h1 className='text-5xl text-center text-white mb-16 mt-32' id='projets'>Projets</h1>
      <div className='flex justify-center align-middle flex-wrap mt-8'>
        <div className='flex mx-8 mb-6'>
          <CardProject
          imgSrc={info.portfolio[0].image}
          imgAlt={"Club d'airsoft"}
          title={info.portfolio[0].title}
          description={info.portfolio[0].description}
          svg0={info.svg[0].React}
          svg1={info.svg[2].Vscode}
          svg2={info.svg[1].Tailwind}
          nameRepos={"Voir le repos"}
          git={info.portfolio[0].source}
          />
        </div>
        <div className='flex mx-8 mb-6'>
          <CardProject
          imgSrc={info.portfolio[1].image}
          imgAlt={"Application génération d'images"}
          title={info.portfolio[1].title}
          description={info.portfolio[1].description}
          svg0={info.svg[0].React}
          svg1={info.svg[2].Vscode}
          nameRepos={"Voir le repos"}
          git={info.portfolio[1].source}
          />
        </div>
        <div className='flex mx-8 mb-6'>
          <CardProject
          imgSrc={info.portfolio[2].image}
          imgAlt={"Portfolio"}
          title={info.portfolio[2].title}
          description={info.portfolio[2].description}
          svg0={info.svg[0].React}
          svg1={info.svg[2].Vscode}
          svg2={info.svg[1].Tailwind}
          nameRepos={"Voir le repos"}
          git={info.portfolio[2].source}
          />
        </div>
        <div className='flex mx-8 mb-6'>
          <CardProject
          imgSrc={info.portfolio[3].image}
          imgAlt={"Application de monitoring"}
          title={info.portfolio[3].title}
          description={info.portfolio[3].description}
          svg1={info.svg[2].Vscode}
          nameRepos={"Voir le repos"}
          git={info.portfolio[3].source}
          />
        </div>
        <div className='flex mx-8 mb-6'>
          <CardProject
          imgSrc={info.portfolio[4].image}
          imgAlt={"Jeu vidéo en 2D"}
          title={info.portfolio[4].title}
          description={info.portfolio[4].description}
          svg1={info.svg[2].Vscode}
          nameRepos={"Voir le repos"}
          git={info.portfolio[4].source}
          />
          </div>
          <div className='flex mx-8 mb-6'>
          <CardProject
          imgSrc={info.portfolio[5].image}
          imgAlt={"Projet python"}
          title={info.portfolio[5].title}
          description={info.portfolio[5].description}
          svg1={info.svg[2].Vscode}
          nameRepos={"Voir le repos"}
          git={info.portfolio[5].source}
          />
          </div>
          <div className='flex mx-8 mb-6'>
          <CardProject
          imgSrc={info.portfolio[6].image}
          imgAlt={"Groupie Tracker"}
          title={info.portfolio[6].title}
          description={info.portfolio[6].description}
          svg1={info.svg[2].Vscode}
          nameRepos={"Voir le repos"}
          git={info.portfolio[6].source}
          />
          </div>
      </div>
    </div>
  )
}

export default Projets