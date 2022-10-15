import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 dark:bg-slate-200 text-gray-600'>
      <form method='POST' action="https://getform.io/f/1d553849-44ef-4225-a3c0-bd4f0f69a8bc" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 dark:text-gray-600'>Get In Touch</p>
         
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
        <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message...'></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center dark:bg-gray-600 border-pink-600 dark:hover:bg-pink-600'>Send a message</button>
      </form>
    </div>
  )
}

export default Contact