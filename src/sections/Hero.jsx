
import HeroImg from '../../assets/hero-img.png'

import { motion } from "framer-motion"

const Hero = () => {
  return (
    <>
    <section className='h-[50vh] sm:h-[70vh] w-full flex flex-col justify-end pl-10 pr-10'>
    <div className='flex-col flex lg:flex-row justify-between pb-3 lg:items-end '>
        <div>
            <div className='overflow-hidden'>
            <motion.h1 
                className='text-[4.75rem] sm:text-[5.75rem] text-black leading-none font-semibold'
                initial={{y:100, opacity:1}}
                animate={{y:0, opacity:1}}
                transition={{delay: 0.5, duration: 0.9, ease: [0.56, 0.02, 0.37, 1.1]}}
                >
                THIS
                </motion.h1>
            </div>
                <div className='flex flex-row items-center overflow-hidden'>
                <motion.div 
                    className='w-[6.75rem] h-[3.75rem] border-[0.625rem] sm:w-[8.125rem] lg:w-full sm:h-[5rem] sm:border-[1rem] border-primary'
                        initial={{y:-100, opacity:1}}
                        animate={{y:0, opacity:1}}
                        transition={{delay: 1.0, duration: 1.3, ease: [0.56, 0.02, 0.37, 1.1]}}
                    />
                    <motion.h1 
                        className='text-[4.75rem] sm:text-[5.75rem] text-black leading-none font-semibold'
                        initial={{y:100, opacity:1}}
                        animate={{y:0, opacity:1}}
                        transition={{delay: 0.7, duration: 0.9, ease: [0.56, 0.02, 0.37, 1.1]}}
                        >IS</motion.h1>
                </div>
        </div>
        <div className=' hidden w-full lg:w-[40%] h-full lg:flex flex-col justify-end text-wrap pb-3 pt-3'>
            <motion.p 
                className='text-[0.75rem] sm:text-[0.875rem] font-light'
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{delay: 1.0, duration: 1.3, ease: [0.56, 0.02, 0.37, 1.1]}}
                        >You won't want to miss this one-of-a-kind exhibition of Native American art!
                        The show will feature the work of some of the most talented Native American artists,
                        who will be showcasing their unique perspectives and cultural heritage.
                        This is a great opportunity to appreciate the beauty and power of Native American 
                        art and to support the work of these amazing artists. Don't miss out on this incredible event!
            </motion.p>
        </div>
    </div>
</section>

<section>
     <div className='pr-10 pl-10'>
        <div className='overflow-hidden relative'>
            <motion.div 
                className='bg-secondary w-[100%] h-[100%] absolute z-10 origin-top'
                initial={{top:0, height:"100%"}}
                animate={{top:"100%", height:0}}
                transition={{delay: 1.5, duration: 1.0, ease: "easeInOut"}}
                />
        <motion.img 
            className='w-[100%] h-[100%]'
            src={HeroImg}
            alt='Modern Painting'
            initial={{scale: 1.5}}
            animate={{scale: 1}}
            transition={{delay: 1.5, duration: 1.5, ease: "easeInOut"}}
            />
            </div>
            </div>
                <div className=' w-full h-full flex flex-col justify-end text-wrap pt-3 pr-10 pl-10 lg:hidden mt-5'>
                    <motion.p 
                        className='text-[0.875rem] font-light'
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{delay: 1.0, duration: 1.3, ease: [0.56, 0.02, 0.37, 1.1]}}
                        >
                        You won't want to miss this one-of-a-kind exhibition of Native American art!
                        The show will feature the work of some of the most talented Native American artists,
                        who will be showcasing their unique perspectives and cultural heritage.
                        This is a great opportunity to appreciate the beauty and power of Native American 
                        art and to support the work of these amazing artists. Don't miss out on this incredible event!
                    </motion.p>
                </div>
        </section>
        <motion.div 
            className='w-full h-[12.5rem] flex items-center justify-center'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay:0.2, duration: 0.9, ease: [0.56, 0.02, 0.37, 1.1]}}
            >
            <button 
                className='bg-primary pt-3 pb-3 pr-8 pl-8 text-white text-sm font-bold hover:bg-[#14A3AC] transition duration-700 ease-in-out'
                >VIEW COLLECTION</button>
        </motion.div>
</>

  )
}

export default Hero