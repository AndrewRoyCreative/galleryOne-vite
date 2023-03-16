import React from 'react'

import { motion } from "framer-motion"

const Newsletter = () => {
  return (
    <section>
        <div className=' flex flex-col justify-start items-start md:justify-center md:items-center mt-40 lg:mt-64'>
            <div className='flex flex-row justify-center items-center overflow-hidden'>
                <h1 className=' w-full lg:w-[70%] text-[4rem] sm:text-[5.75rem] text-black leading-none font-semibold sm:pl-10 sm:pr-10 pr-5 pl-5 lg:mr-20 lg:ml-20 lg:text-center md:text-center sm:text-left text-center'>
                    BE THE FIRST TO KNOW
                </h1>
            </div>
            <div className='w-full md:w-[80%] flex flex-col justify-center items-center md:text-center text-left'>
                <p className='w-full lg:w-[80%] pl-10 pr-10 text-wrap mt-5 text-[0.875rem] font-light text-center sm:text-left'
                    >Would you like to be the first to hear about new exhibitions? 
                    Then join the Gallery One email list! You will get updates on upcoming exhibitions and special 
                    offers, as well as exclusive access to early previews of all upcoming shows.
                </p>
                <div className='w-full lg:w-[80%] flex flex-row justify-center items-end pr-10 pl-10'>
                    <input 
                        className='h-[2.5rem] w-full pl-5  border-2 border-black mt-20 flex flex-row justify-between items-center font-light text-gray-500 focus:outline-none rounded-none'
                        placeholder='type your email'
                        />
                    <button 
                        type='button'
                        className='h-[2.5rem] w-[8.75rem] flex flex-row justify-center items-center bg-black text-white text-[0.75rem] '
                        >
                        SUBMIT    
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Newsletter