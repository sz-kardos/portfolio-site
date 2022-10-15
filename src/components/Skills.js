import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Figma from '../assets/figma.png';
import Bootstrap from '../assets/bootstrap.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';


const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f]   text-gray-300 dark:bg-slate-200 dark:text-gray-600'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                    
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8' >
                    <div className=' hover:scale-110 duration-500 '>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className=' hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className=' hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="JS icon" />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className=' hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactImg} alt="REACT icon" />
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className=' hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={GitHub} alt="GITHUB icon" />
                        <p className='my-4'>GITHUB</p>
                    </div>
                    <div className=' hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Figma} alt="FIGMA icon" />
                        <p className='my-4'>Figma</p>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Bootstrap} alt="BOOTSTRAP icon" />
                        <p className='my-4'>Bootstrap</p>
                    </div>
                    <div className=' hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Tailwind} alt="TAILWIND icon" />
                        <p className='my-4'>Tailwind</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;