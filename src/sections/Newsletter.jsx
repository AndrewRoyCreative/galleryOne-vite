import React from 'react'

import { motion, useAnimation } from "framer-motion"

const Newsletter = () => {
  return (
    <section>
    <div className=' flex flex-col justify-start items-start md:justify-center md:items-center mt-40 lg:mt-64'>
        <div className='flex flex-row justify-center items-center overflow-hidden'>
        <motion.h1 
            className=' w-full lg:w-[70%] text-[72px] sm:text-[92px] text-black leading-none font-semibold pl-10 pr-10 lg:mr-20 lg:ml-20 text-left md:text-center'
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay: 0.5, duration: 1.2, ease: [0.56, 0.02, 0.37, 1.1]}}
            >BE THE FIRST TO KNOW
            </motion.h1>
            </div>
                <motion.p 
                    className='w-full md:w-[90%] pl-10 pr-10 lg:w-[70%] text-wrap mt-5 text-[14px] font-light'
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{delay: 0.5, duration: 1.5, ease: [0.56, 0.02, 0.37, 1.1]}}
                    >Would you like to be the first to hear about new exhibitions? 
                    Then join the Gallery One email list! You will get updates on upcoming exhibitions and special 
                    offers, as well as exclusive access to early previews of all upcoming shows.
                </motion.p>


            <div className=' w-[100%] overflow-hidden'>
            <motion.div 
                className='w-full flex flex-row justify-center items-end pr-10 pl-10'
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay: 1.0, duration: 1.3, ease: [0.56, 0.02, 0.37, 1.1]}}
                >
                    <input 
                    className='h-[40px] w-full pl-5 lg:w-[70%] border-2 border-black mt-20 flex flex-row justify-between items-center font-light text-gray-500 focus:outline-none'
                    placeholder='type your email'
                    >
                    </input>
                        <button 
                            type='button'
                            className='h-[40px] w-[140px] flex flex-row justify-center items-center bg-black text-white text-[12px]'>
                            SUBMIT    
                        </button>
        </motion.div>
        </div>
    </div>
</section>
  )
}

export default Newsletter