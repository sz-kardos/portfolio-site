import React, { useRef, useState } from 'react';
import Netflix from '../assets/netflix.png';
import Weather from '../assets/weather.png';
import game2048 from '../assets/game2048.png';
import Calc from '../assets/calc.png';
import Rock from '../assets/rock,paper.png';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";

import { AiFillEye, AiFillGithub } from 'react-icons/ai';
const Work = () => {
  
    return (
      
      <div name='work' className='w-full md:h-screen  bg-[#0a192f] dark:bg-slate-200 dark:text-gray-600'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-8 p-2'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 dark:text-gray-600 border-pink-600'>
               Projects
            </p>
            
          </div>
          <div className=' m-10 gap-2 p-30'>

  <Swiper 
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
        
      >
  
             
            <SwiperSlide
              style={{ backgroundImage: `url(${Netflix})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Netflix Clone
                </span>
                <div className='pt-8 text-center'>
                  <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-500'>
                    <AiFillEye />
                    </button>
                  </a>
                  <a href='https://github.com/sz-kardos/netflix-react'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-500'>
                    <AiFillGithub />
                    </button>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              style={{ backgroundImage: `url(${game2048})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  2048 GAME
                </span>
                <div className='pt-8 text-center'>
                  <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-500'>
                    <AiFillEye />
                    </button>
                  </a>
                  <a href='https://github.com/sz-kardos/2048'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-500'>
                    <AiFillGithub />
                    </button>
                  </a>
                </div>
              </div>
            </SwiperSlide>
              {/* Grid Item */}
            <SwiperSlide
              style={{ backgroundImage: `url(${Weather})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100 '>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Weather Application
                </span>
                <div className='pt-8 text-center '>
                  <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-500'>
                    <AiFillEye />
                    </button>
                  </a>
                  <a href='https://github.com/sz-kardos/weather-app'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-500'>
                    <AiFillGithub />
                    </button>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              style={{ backgroundImage: `url(${Calc})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Calculator
                </span>
                <div className='pt-8 text-center'>
                  <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-500'>
                    <AiFillEye />
                    </button>
                  </a>
                  <a href='https://github.com/sz-kardos/react-calc'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-500'>
                    <AiFillGithub />
                    </button>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              style={{ backgroundImage: `url(${Rock})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Rock,Paper,Scissors
                </span>
                <div className='pt-8 text-center'>
                  <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-500'>
                    <AiFillEye />
                    </button>
                  </a>
                  <a href='https://github.com/sz-kardos/paper-rock-scissors'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-500'>
                    <AiFillGithub />
                    </button>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            </Swiper>
            </div>
          </div>
        </div>
     
    );
  };

export default Work;