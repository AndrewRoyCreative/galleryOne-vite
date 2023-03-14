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
                delay: 0.2, duration: 2.5, ease: [0.56, 0.02, 0.37, 1.1]
            }
        })
    }

  return (
    <section>
        <div className='w-full flex flex-col md:flex-row md:justify-between md:mt-20'>
            <div className='mt-10 md:mt-0 w-full h-full flex flex-col pl-10 pr-10 '>
                <div className='overflow-hidden relative'>
                <motion.div 
                className='bg-secondary w-[100%] h-[100%] absolute z-10 origin-top'
                initial={{top:0, height:"100%"}}
                whileInView={{top:"100%", height:0}}
                viewport={{ once: true }}
                transition={{delay: 1.0, duration: 1.3, ease: [0.56, 0.02, 0.37, 1.1]}}
                />
                <motion.img 
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
                    className='text-[24px] lg:text-[26px] font-semibold mt-5'
                    initial={{y:100}}
                    animate={animationControlText}
                    transition={{delay: 0.3, duration: 1.0, ease: [0.56, 0.02, 0.37, 1.1]}}
                    
                    >MY CULTURE</motion.h5>
                    </div>
                    <motion.p 
                        className='w-full mt-5 text-wrap text-[#646464] text-[14px] lg:text-[16px] font-light'
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
                        className='text-[24px] font-semibold mt-5'
                        initial={{y:100}}
                        animate={animationControlText}
                        transition={{delay: 0.3, duration: 1.0, ease: [0.56, 0.02, 0.37, 1.1]}}
                        >THE WAY FORWARD</motion.h5>
                        </div>
                        <motion.p 
                            className='mt-5 text-wrap text-[#646464] text-[14px] lg:text-[16px] font-light'
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
                        className='text-[24px] font-semibold mt-5'
                        initial={{y:100}}
                        animate={animationControlText}
                        transition={{delay: 0.3, duration: 1.0, ease: [0.56, 0.02, 0.37, 1.1]}}
                        >KNOWING YOUR ROOTS</motion.h5>
                        </div>
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
        </div>
    </div>
                <div className='w-full flex flex-row justify-between mr-10 ml-10'>
                    <div 
                        className='w-full flex flex-row justify-start mt-14 overflow-hidden'
                        ref={ref}
                        >
                        <motion.button 
                            className=' bg-[#F3B52A] w-[200px] text-white p-1 pt-2 pb-2 hover:bg-[#DCA52A] transition duration-700 ease-in-out'
                            initial={{y:-50}}
                            animate={animationControlTop}
                            >READ MORE</motion.button>
                    </div>
                    <div 
                        className='hidden w-full md:flex flex-row justify-start mt-14 overflow-hidden'
                        ref={ref}
                        >
                        <motion.button 
                            className=' bg-[#F3B52A] w-[200px] text-white p-1 pt-2 pb-2 hover:bg-[#DCA52A] transition duration-700 ease-in-out'
                            initial={{y:-50}}
                            animate={animationControlTop}
                            >READ MORE</motion.button>
                    </div>
                    <div 
                        className='hidden w-full lg:flex flex-row justify-start mt-14 overflow-hidden'
                        ref={ref}
                        >
                        <motion.button 
                            className='bg-[#F3B52A] w-[200px] text-white p-1 pt-2 pb-2  hover:bg-[#DCA52A] transition duration-700 ease-in-out'
                            initial={{y:-50}}
                            animate={animationControlTop}
                            >READ MORE</motion.button>
                    </div>
                 </div>
</section>
  )
}

export default Slider