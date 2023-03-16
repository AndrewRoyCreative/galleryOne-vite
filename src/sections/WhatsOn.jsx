import { useInView } from 'react-intersection-observer'

import { motion, useAnimation } from "framer-motion"

import WhatsOnImg from '../../assets/whats-on-img.png'

const WhatsOn = () => {


    const {inView, entry, ref} = useInView();

    const animationControl = useAnimation();
    if (inView) {
        animationControl.start({
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
                delay: 1.0, duration: 1.3, ease: [0.56, 0.02, 0.37, 1.1]
            }
        })
    }

  return (
    <section className=' w-full flex flex-col justify-end sm:pl-10 sm:pr-10 pl-5 pr-5 mt-20'>
    <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center'>
        <div>
            <div 
                className='overflow-hidden'
                ref={ref}
                >
                <motion.h1 
                    className='text-[4rem] sm:text-[5.75rem] text-black leading-none font-semibold'
                    initial={{y:100}}
                    animate={animationControl}
                    >
                    WHATS
                </motion.h1>
            </div>
            <div 
                className='flex flex-row items-center overflow-hidden'
                ref={ref}
                >
                <motion.div 
                    className='w-full h-[4.5rem] border-[0.8rem] border-[#EA1B2F]'
                    initial={{y:-100}}
                    animate={animationControlTop}
                    />
                    <div ref={ref}>
                        <motion.h1 
                            className='text-[4rem] sm:text-[5.75rem] text-black leading-none font-semibold'
                            initial={{y:100}}
                            animate={animationControl}
                            transition={{delay: 0.9, duration: 1.2, ease: [0.56, 0.02, 0.37, 1.1]}}
                            >
                            ON
                        </motion.h1>
                    </div>
                </div>
            </div>
        <div className='w-full lg:w-[50%] h-full pt-5'>
            <div className='overflow-hidden relative'>
                <motion.div 
                    className='bg-secondary w-[100%] h-[100%] absolute z-10 origin-top'
                    initial={{right:0, width:"100%"}}
                    whileInView={{right:"100%", width:0}}
                    viewport={{ once: true }}
                    transition={{delay: 1.0, duration: 1.3, ease: [0.56, 0.02, 0.37, 1.1]}}
                    />
                    <motion.img 
                        className='w-full h-full lg:pr-10 lg:pl-10'
                        src={WhatsOnImg}
                        alt='Modern Painting'
                        initial={{scale: 1.5}}
                        whileInView={{scale: 1}}
                        viewport={{ once: true }}
                        transition={{delay: 1.0, duration: 0.8, ease: [0.56, 0.02, 0.37, 1.1]}}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhatsOn