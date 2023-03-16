import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from "framer-motion"

import Artist1 from '../../assets/artist-1.png'
import Artist2 from '../../assets/artist-2.png'
import Artist3 from '../../assets/artist-3.png'

const Slider = () => {

    const {inView, entry, ref} = useInView();

    const animationControlText = useAnimation();
    if (inView) {
        animationControlText.start({
            y:0,
            transition:{
                delay: 0.5, duration: 0.9, ease: [0.56, 0.02, 0.37, 1.1]
            }
        })
    }

    const animationControlTop = useAnimation();
    if (inView) {
        animationControlTop.start({
            y:0,
            transition:{
                delay: 0.2, duration: 1.5, ease: [0.56, 0.02, 0.37, 1.1]
            }
        })
    }

  return (
    <section>
        <div className='w-[100vw] flex flex-col md:flex-row md:justify-between md:mt-20 overflow-hidden'>
            <div className=' mt-10 md:mt-0 w-full h-full flex flex-col justify-center items-center pl-10 pr-10 '>
                <div className='w-full overflow-hidden relative'>
                    <motion.div 
                        className='bg-secondary w-[100%] h-[100%] absolute z-10 origin-top'
                        initial={{top:0, height:"100%"}}
                        whileInView={{top:"100%", height:0}}
                        viewport={{ once: true }}
                        transition={{delay: 1.0, duration: 1.3, ease: [0.56, 0.02, 0.37, 1.1]}}
                    />
                    <motion.img 
                        className='w-[100%]'
                        src={Artist1}
                        alt="Artist 1"
                        initial={{scale: 1.5}}
                        whileInView={{scale: 1}}
                        viewport={{ once: true }}
                        transition={{delay: 1.0, duration: 1.0, ease: "easeInOut"}}
                        />
                </div>
                <div>
                    <div 
                        className='overflow-hidden'
                        ref={ref}
                        >
                        <motion.h5 
                            className='text-[1.5rem] lg:text-[1.3rem] font-semibold mt-5'
                            initial={{y:10, opacity: 0}}
                            whileInView={{y:0, opacity: 1}}
                            viewport={{ once: true }}
                            transition={{delay: 0.3, duration: 1.0, ease: [0.56, 0.02, 0.37, 1.1]}}   
                        >
                        MY CULTURE
                        </motion.h5>
                    </div>
                    <div className='w-full lg:h-[180px] md:h-[120px] '>
                        <motion.p 
                            className='w-full mt-5 text-wrap text-[#646464] text-[0.875rem] lg:text-[1rem] font-light'
                            initial={{opacity:0}}
                            whileInView={{opacity:1}}
                            viewport={{ once: true }}
                            transition={{delay: 1.5, duration: 1.0, ease: [0.56, 0.02, 0.37, 1.1]}}
                            >
                            Joseph is an 23-year-old Native American who has overcome 
                            immense adversity in his life. He has faced poverty,
                            racism, and a lack of educational opportunities. Despite these 
                            difficulties, Joseph has found a way to use his art to express his 
                            courage and resilience.
                        </motion.p>
                        </div>
                        <div className='w-full flex flex-row justify-start mt-14 overflow-hidden'>
                            <button className=' bg-[#F3B52A] w-[12.5rem] text-white p-1 pt-2 pb-2 hover:bg-[#DCA52A] transition duration-700 ease-in-out'
                            >
                            READ MORE
                            </button>
                        </div>
                    </div>
                </div>
            <div className='hidden w-full h-full md:flex flex-col pl-10 pr-10'>
                <div className='overflow-hidden relative'>
                    <motion.div 
                        className='bg-secondary w-[100%] h-[100%] absolute z-10 origin-top'
                        initial={{top:0, height:"100%"}}
                        whileInView={{top:"100%", height:0}}
                        viewport={{ once: true }}
                        transition={{delay: 1.0, duration: 1.3, ease: [0.56, 0.02, 0.37, 1.1]}}
                        />
                    <motion.img
                        className='w-[100%]'
                        src={Artist2}
                        alt="Artist 2"
                        initial={{scale: 1.5}}
                        whileInView={{scale: 1}}
                        viewport={{ once: true }}
                        transition={{delay: 1.0, duration: 1.0, ease: "easeInOut"}}
                    />
                </div>
                <div className='flex flex-col '>
                    <div 
                        className='overflow-hidden'
                        ref={ref}
                        >
                    <motion.h5 
                        className='text-[1.3rem] font-semibold mt-5'
                        initial={{y:10, opacity: 0}}
                        whileInView={{y:0, opacity: 1}}
                        viewport={{ once: true }}
                        transition={{delay: 0.3, duration: 1.0, ease: [0.56, 0.02, 0.37, 1.1]}}
                        >
                        THE WAY FORWARD
                        </motion.h5>
                        </div>
                        <div className='w-full lg:h-[200px] md:h-[143px]'>
                            <motion.p 
                                className='mt-5 text-wrap text-[#646464] text-[0.875rem] lg:text-[1rem] font-light'
                                initial={{opacity:0}}
                                whileInView={{opacity:1}}
                                viewport={{ once: true }}
                                transition={{delay: 1.5, duration: 1.0, ease: [0.56, 0.02, 0.37, 1.1]}}
                                >
                                Marina is a 32-year-old Native South American woman who
                                uses her art to empower women and promote positive change. Marina has faced poverty, 
                                sexism, and discrimination in her life, and she has used her art to express her resilience 
                                and strength.
                            </motion.p>
                            </div>
                            <div className='w-full md:flex flex-row justify-start mt-14 overflow-hidden'>
                                <button className=' bg-[#F3B52A] w-[12.5rem] text-white p-1 pt-2 pb-2 hover:bg-[#DCA52A] transition duration-700 ease-in-out'
                                >
                                READ MORE
                                </button>
                            </div>
                        </div>
                    </div> 
                <div className=' hidden w-full h-full lg:flex flex-col pr-10 pl-10'>
                    <div className='overflow-hidden relative'>
                        <motion.div 
                        className='bg-secondary w-[100%] h-[100%] absolute z-10 origin-top'
                        initial={{top:0, height:"100%"}}
                        whileInView={{top:"100%", height:0}}
                        viewport={{ once: true }}
                        transition={{delay: 1.0, duration: 1.3, ease: [0.56, 0.02, 0.37, 1.1]}}
                        />
                        <motion.img 
                            className='w-[100%]'
                            src={Artist3}
                            alt="Artist 3"
                            initial={{scale: 1.5}}
                            whileInView={{scale: 1}}
                            viewport={{ once: true }}
                            transition={{delay: 1.0, duration: 1.0, ease: "easeInOut"}}
                        />
                    </div>
                <div className='flex flex-col h-full '>
                    <div 
                        className='overflow-hidden'
                        ref={ref}
                        >
                        <motion.h5 
                            className='text-[1.3rem] font-semibold mt-5'
                            initial={{y:10, opacity: 0}}
                            whileInView={{y:0, opacity: 1}}
                            viewport={{ once: true }}
                            transition={{delay: 0.3, duration: 1.0, ease: [0.56, 0.02, 0.37, 1.1]}}
                            >
                            KNOWING YOUR ROOTS
                            </motion.h5>
                            </div>
                            <div className='w-full h-[200px]'>
                                <motion.p 
                                    className='mt-5 text-wrap text-[#646464] font-light'
                                    initial={{opacity:0}}
                                    whileInView={{opacity:1}}
                                    viewport={{ once: true }}
                                    transition={{delay: 1.5, duration: 1.0, ease: [0.56, 0.02, 0.37, 1.1]}}
                                    >
                                    John is an 80-year-old Native American man who uses his art
                                    to keep his culture and heritage alive. John is determined to ensure that his culture and
                                    heritage continue to thrive.
                                </motion.p>
                                </div>
                                <div className='hidden w-full lg:flex flex-row justify-start mt-14 overflow-hidden'>
                                    <button className='bg-[#F3B52A] w-[12.5rem] text-white p-1 pt-2 pb-2  hover:bg-[#DCA52A] transition duration-700 ease-in-out'
                                    >
                                    READ MORE
                                    </button>
                                </div>
                         </div>
                    </div>
        </div>
    </section>
  )
}

export default Slider