import { motion } from "framer-motion"



const Exhibits = () => {
  return (
    <section className="w-[100vw] flex flex-col justify-center items-center">
    <div className='w-full h-full mt-20 sm:mt-30 pl-10 pr-10'>
            <motion.div 
                className="w-full h-[0.125rem] origin-left bg-black"
                initial={{width: 0}}
                whileInView={{width: "100%"}}
                viewport={{ once: true }}
                transition={{delay: 0.2, duration: 1.0, ease: [0.56, 0.02, 0.37, 1.1]}}
                />
            <motion.div 
                className='w-full flex sm:flex-row flex-col sm:justify-between justify-center items-center pt-6 pb-6 '
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{ once: true }}
                transition={{delay: 0.3, duration: 1.2, ease: [0.56, 0.02, 0.37, 1.1]}}
                >
                    <span className='text-[1rem] sm:text-[0.875rem] font-medium'>New Horizons</span>
                    <span className='text-[0.875rem] '>Jennifer West</span>
                    <span className='text-[0.875rem] '>Jan-Feb</span>
            </motion.div>
            <motion.div 
                className="w-full h-[0.125rem] origin-left bg-black"
                initial={{width: 0}}
                whileInView={{width: "100%"}}
                viewport={{ once: true }}
                transition={{delay: 0.4, duration: 1.0, ease: [0.56, 0.02, 0.37, 1.1]}}
                />
            <motion.div 
                className='w-full flex sm:flex-row flex-col sm:justify-between justify-center items-center pt-6 pb-6'
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{ once: true }}
                transition={{delay: 0.3, duration: 1.2, ease: [0.56, 0.02, 0.37, 1.1]}}
                >
                    <span className='text-[1rem] sm:text-[0.875rem] font-medium'>Breaking Through</span>
                    <span className='text-[0.875rem] md:pr-6 sm:pr-8'>Jim Locester</span>
                    <span className='text-[0.875rem] '>Feb-Mar</span>
            </motion.div>
            <motion.div 
                className="w-full h-[0.125rem] origin-left bg-black"
                initial={{width: 0}}
                whileInView={{width: "100%"}}
                viewport={{ once: true }}
                transition={{delay: 0.6, duration: 1.0, ease: [0.56, 0.02, 0.37, 1.1]}}
                />
            <motion.div 
                className='w-full flex sm:flex-row flex-col sm:justify-between justify-center items-center pt-6 pb-6'
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{ once: true }}
                transition={{delay: 0.3, duration: 1.2, ease: [0.56, 0.02, 0.37, 1.1]}}
                >
                    <span className='text-[1rem] sm:text-[0.875rem] font-medium'>A Trip Around The Sun</span>
                    <span className='text-[0.875rem] sm:pr-[4.375rem] md:pr-16'>Jeff Lindsay</span>
                    <span className='text-[0.875rem] '>Mar-Apr</span>
            </motion.div>
            <motion.div 
                className="w-full h-[0.125rem] origin-left bg-black"
                initial={{width: 0}}
                whileInView={{width: "100%"}}
                viewport={{ once: true }}
                transition={{delay: 0.8, duration: 1.0, ease: [0.56, 0.02, 0.37, 1.1]}}
                />
            <motion.div 
                className='w-full flex sm:flex-row flex-col sm:justify-between justify-center items-center pt-6 pb-6'
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{ once: true }}
                transition={{delay: 0.3, duration: 1.2, ease: [0.56, 0.02, 0.37, 1.1]}}
                >
                    <span className='text-[1rem] sm:text-[0.875rem] font-medium'>Take What You Got</span>
                    <span className='text-[0.875rem]  md:pr-7 sm:pr-10'>Mary Samuel</span>
                    <span className='text-[0.875rem] '>Apr-May</span>
            </motion.div>
            <motion.div 
                className="w-full h-[0.125rem] origin-left bg-black"
                initial={{width: 0}}
                whileInView={{width: "100%"}}
                viewport={{ once: true }}
                transition={{delay: 1.0, duration: 1.0, ease: [0.56, 0.02, 0.37, 1.1]}}
                />
            </div>
    </section>
    // <section>
    //     <div className=" bg-red-500 w-[full] h-[full]"></div>

    // </section>
  )
}

export default Exhibits