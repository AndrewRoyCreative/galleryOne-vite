import React from 'react'

import { motion } from "framer-motion"

const Newsletter = () => {
  return (
    <section className='overflow-hidden'>
        <div className=' flex flex-col justify-start items-start md:justify-center md:items-center mt-40 lg:mt-64'>
            <div className='flex flex-row justify-center items-center overflow-hidden'>
                <motion.h1 
                    className=' w-full lg:w-[70%] text-[4.5rem] sm:text-[5.75rem] text-black leading-none font-semibold pl-10 pr-10 lg:mr-20 lg:ml-20 text-left md:text-center'
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    viewport={{ once: true }}
                    transition={{delay: 0.9, duration: 1.2, ease: [0.56, 0.02, 0.37, 1.1]}}
                    >
                    BE THE FIRST TO KNOW
                    </motion.h1>
            </div>
            <div className='w-full md:w-[80%] flex flex-col justify-center items-center md:text-center text-left'>
                <motion.p 
                    className='w-full md:w-[90%] pl-10 pr-10  text-wrap mt-5 text-[0.875rem] font-light'
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    viewport={{ once: true }}
                    transition={{delay: 1.0, duration: 1.2, ease: [0.56, 0.02, 0.37, 1.1]}}
                    >Would you like to be the first to hear about new exhibitions? 
                    Then join the Gallery One email list! You will get updates on upcoming exhibitions and special 
                    offers, as well as exclusive access to early previews of all upcoming shows.
                </motion.p>
                <motion.div 
                    className='w-full lg:w-[85%] flex flex-row justify-center items-end pr-10 pl-10'
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    whileInView={{opacity:1}}
                    viewport={{ once: true }}
                    transition={{delay: 1.4, duration: 1.3, ease: [0.56, 0.02, 0.37, 1.1]}}
                    >
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
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Newsletter