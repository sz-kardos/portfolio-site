import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Firebase from '../assets/firebase.png';
import Mysql from '../assets/mysql.png';
import jquery from '../assets/jquery.png';
import GitHub from '../assets/github.png';
import Php from '../assets/php.png';
import Java from '../assets/java.png';
import Node from '../assets/node.png';




const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] pt-24   text-gray-300 dark:bg-slate-200 dark:text-gray-600'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto  flex flex-col justify-center w-full h-full'>
                <div >
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
                        <img className='w-20 mx-auto' src={Firebase} alt="FIREBASE icon" />
                        <p className='my-4'>FIREBASE</p>
                    </div>
                    <div className=' hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Java} alt="Java icon" />
                        <p className='my-4'>JAVA</p>
                    </div>
                    <div className=' hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Node} alt="NodeJS icon" />
                        <p className='my-4'>NodeJs</p>
                    </div>
                    <div className=' hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={GitHub} alt="GITHUB icon" />
                        <p className='my-4'>GITHUB</p>
                    </div>
                    <div className=' hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Mysql} alt="Mysql icon" />
                        <p className='my-4'>MySQL</p>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Php} alt="PHP icon" />
                        <p className='my-4'>PHP</p>
                    </div>
                    <div className=' hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={jquery} alt="JQUERY icon" />
                        <p className='my-4'>jQuery</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;