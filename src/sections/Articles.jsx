import { useInView } from 'react-intersection-observer'

import { motion, useAnimation } from "framer-motion"

const Articles = () => {

    // const {inView, entry, ref} = useInView();

    // const animationControlText = useAnimation();
    // if (inView) {
    //     animationControlText.start({
    //         y:0,
    //         transition:{
    //             delay: 0.5, duration: 0.9, ease: [0.56, 0.02, 0.37, 1.1]
    //         }
    //     })
    // }

    // const animationControlRight = useAnimation();
    // if (inView) {
    //     animationControlRight.start({
    //         x:0,
    //         transition:{
    //             delay: 0.8, duration: 2.3, ease: [0.56, 0.02, 0.37, 1.1]
    //         }
    //     })
    // }

    // const animationControlLeft = useAnimation();
    // if (inView) {
    //     animationControlLeft.start({
    //         x:0,
    //         transition:{
    //             delay: 0.8, duration: 2.3, ease: [0.56, 0.02, 0.37, 1.1]
    //         }
    //     })
    // }

  return (
    <section>
    <div className=' w-[100vw] flex flex-col justify-center items-center lg:mt-60 mt-28'>
        <div className='w-full flex flex-col lg:flex-row justify-center items-center '>
            <div className=' w-full flex flex-row justify-between lg:hidden pb-20 sm:pr-10 sm:pl-10 pr-5 pl-5 md:mt-28 mt-10'>
                <div className='overflow-hidden'>
                    <div className='w-[6.25rem] h-[3.75rem] md:w-[11.25rem] md:h-[6.25rem] lg:w-full lg:ml-10 lg:h-[11.25rem] lg:hidden border-[0.75rem] md:border-[1.25rem] border-[#F3B52A]'/>
                </div>
                    <div className='overflow-hidden'>
                        <div className='w-[6.25rem] h-[3.75rem] md:w-[11.25rem] md:h-[6.25rem] lg:w-full lg:ml-10 lg:h-[11.25rem] lg:hidden border-[0.75rem] md:border-[1.25rem] border-[#F3B52A]'/>
                    </div>
                </div>
                    <div className='w-full pl-10 overflow-hidden'> 
                        <div className='hidden lg:flex lg:w-full h-[11.25rem] border-[1.25rem] border-[#F3B52A]'/>
                    </div>
                        <div className='flex flex-col items-center'>
                            <h1 className='text-center text-[4.5rem] sm:text-[5.75rem] text-black leading-none font-semibold sm:mr-10 sm:ml-10 mr-5 ml-5'>
                            A FEW WORDS
                            </h1>
                            <p className=' text-[0.875rem] w-full mt-5 sm:pl-10 sm:pr-10 pl-5 pr-5 text-center md:w-[46.875rem] text-wrap font-light'
                                >
                                Supporting Native American artists
                                is an important way to recognize the unique cultural heritage 
                                of Native American people. We can help ensure that their art and culture is celebrated and appreciated.
                                It is also an opportunity to learn about different cultures and perspectives and to show our appreciation
                                for the work of these amazing artists. Click on the articles to learn more!
                            </p>
                        </div>  
                    <div className='w-full pr-10 overflow-hidden'> 
                        <div className='hidden lg:flex lg:w-full lg:mr-10 h-[11.25rem] border-[1.25rem] border-[#F3B52A]'/>
                    </div>   
                </div>
            </div>
    </section>
  )
}

export default Articles