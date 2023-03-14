import { motion } from "framer-motion"



const Exhibits = () => {


  return (
    <section>
    <div className='w-full h-[400px] mt-20 sm:mt-30 pl-10 pr-10'>
            <motion.div 
                className="w-full h-[2px] origin-left bg-black"
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
                    <span className='text-[16px] sm:text-[14px] font-medium'>New Horizons</span>
                    <span className='text-[14px] '>Jennifer West</span>
                    <span className='text-[14px] '>Jan-Feb</span>
            </motion.div>
        <motion.div 
                className="w-full h-[2px] origin-left bg-black"
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
                <span className='text-[16px] sm:text-[14px] font-medium'>Breaking Through</span>
                <span className='text-[14px] md:pr-6 sm:pr-8'>Jim Locester</span>
                <span className='text-[14px] '>Feb-Mar</span>
        </motion.div>
        <motion.div 
                className="w-full h-[2px] origin-left bg-black"
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
                <span className='text-[16px] sm:text-[14px] font-medium'>A Trip Around The Sun</span>
                <span className='text-[14px] sm:pr-[70px] md:pr-16'>Jeff Lindsay</span>
                <span className='text-[14px] '>Mar-Apr</span>
        </motion.div>
        <motion.div 
                className="w-full h-[2px] origin-left bg-black"
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
                <span className='text-[16px] sm:text-[14px] font-medium'>Take What You Got</span>
                <span className='text-[14px]  md:pr-7 sm:pr-10'>Mary Samuel</span>
                <span className='text-[14px] '>Apr-May</span>
        </motion.div>
        <motion.div 
                className="w-full h-[2px] origin-left bg-black"
                initial={{width: 0}}
                whileInView={{width: "100%"}}
                viewport={{ once: true }}
                transition={{delay: 1.0, duration: 1.0, ease: [0.56, 0.02, 0.37, 1.1]}}
                />
    </div>
</section>
  )
}

export default Exhibits