import React from 'react'

function Card({
  imgSrc,
  imgAlt,
  title
}) {
  return (

    <div className="bg-white text-black flex flex-col border-solid w-[10rem] h-[10rem] rounded-full m-px hover:scale-110 transition duration-300 items-center bg-cover">
      <img className="w-[50%] rounded-t-xl mt-8" src={imgSrc} alt={imgAlt} />
      <h1 className="my-2 text-xl text-center font-semibold mt-2">{title}</h1>
    </div>
  )
}

export default Card