import React from 'react';

function CardProject({
    imgSrc,
    imgAlt,
    title,
    buttonText,
    description,
    svg0,
    svg1,
    svg2,
    nameRepos,
    git,
    link,
}) {
    return (
        <div className="bg-white flex flex-col border-solid w-[17rem] h-auto rounded-lg m-px hover:scale-105 transition duration-300">
            {imgSrc && imgAlt && (<img className="w-[100%] rounded-t-lg" src={imgSrc} alt={imgAlt} />)}
            {title && <h1 className="my-2 text-xl text-center font-semibold">{title}</h1>}
            {description && <p className="text-center text-sm">{description}</p>}
            <div className="group mt-4 flex justify-center gap-2 mb-6">
                {svg0 && (
                    <span
                        data-tooltip-target="react"
                        className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
                    >
                        <svg 
                            className="w-5 h-5 text-gray-800 dark:text-white" 
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path d={svg0}/>
                        </svg>
                    </span>
                )}
                {svg1 && (
                    <span
                        data-tooltip-target="vscode"
                        className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
                    >
                        <svg 
                            className="w-5 h-5 text-gray-800 dark:text-white" 
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24"
                        >
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={svg1}/>
                        </svg>
                    </span>
                )}
                {svg2 && (
                    <span
                        data-tooltip-target="tailwind"
                        className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
                    >
                        <svg 
                            className="w-5 h-5 text-gray-800 dark:text-white" 
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path d={svg2}/>
                        </svg>
                    </span>
                )}
            </div>
            <a className='text-center text-sm w-[50%] rounded-lg bg-orange-500 hover:bg-orange-400 text-white m-auto p-1 mb-2' href={git}>{nameRepos}</a>
            {buttonText && <a href={link} className="text-center text-sm w-[50%] rounded-lg bg-blue-700 hover:bg-blue-500 text-white m-auto p-1 mb-4">
                {buttonText}
            </a>}
        </div>
    );
}

export default CardProject;
