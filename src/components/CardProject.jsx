import React from 'react';

function CardProject({
    imgSrc,
    imgAlt,
    title,
    buttonText,
    description,
    nameRepos,
    git,
    link,
}) {
    return (
        <div className="bg-white flex flex-col border-solid w-[17rem] h-[18rem] rounded-lg m-px hover:scale-105 transition duration-300">
            {imgSrc && imgAlt && (<img className="w-[100%] rounded-t-lg" src={imgSrc} alt={imgAlt} />)}
            {title && <h1 className="my-2 text-xl text-center font-semibold">{title}</h1>}
            {description && <p className="text-center text-sm">{description}</p>}
            <a className='text-center text-sm w-[50%] rounded-lg bg-blue-700 hover:bg-blue-500 text-white m-auto p-1' href={git}>{nameRepos}</a>
            {buttonText && <a href={link} className="text-center text-sm w-[50%] rounded-lg bg-blue-700 hover:bg-blue-500 text-white m-auto p-1">
                {buttonText}
            </a>}
        </div>
  );
}

export default CardProject;
