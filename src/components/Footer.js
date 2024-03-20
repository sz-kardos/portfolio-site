import React from "react";
import {
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
     
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2022  All rights reserved.</span>
       
        <div className="text-teal-500">
      
        <span
         
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-pink-600
        duration-300 "
        > 
        <ul>
             <a
                className='flex justify-between items-center w-full text-gray-300'
                href='https://www.linkedin.com/in/szabina-kardos-606b3120b/'
                     >
                            <FaLinkedin size={20} />
                        </a>
          
        </ul>
        </span>
        <span   className="p-2 cursor-pointer inline-flex items-center 
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-pink-600
        duration-300 ">
        <ul>
        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://github.com/sz-kardos'
                        >
                            <FaGithub size={20} />
                        </a>
        </ul>
        </span>
      
    </div>
      </div>
    </footer>
  );
};

export default Footer;