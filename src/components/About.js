import React from 'react';





const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300 dark:bg-slate-200 text-gray-600'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 text-gray-300 dark:text-gray-600 border-pink-600'>
                            About Me
            </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-3xl font-bold'>
                        <p>My interests are in Front End Engineering, and I love to create beautiful and performant products with  user experiences.</p>
                    </div>
                    <div>
                        <p> 
                        Your most unhappy customers are your greatest source of learning. — Bill Gates
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;