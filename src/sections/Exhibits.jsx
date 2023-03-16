import { motion } from "framer-motion"



const Exhibits = () => {
  return (
    <section className="w-[100vw] flex flex-col justify-center items-center sm:pl-10 sm:pr-10 pl-5 pr-5">
        <div className='w-full h-full mt-20 sm:mt-30'>
            <div className="w-full h-[0.125rem] origin-left bg-black"/>
                <div className='w-full flex sm:flex-row flex-col sm:justify-between justify-center items-center pt-6 pb-6 '>
                    <span className='text-[1rem] sm:text-[0.875rem] font-medium'>New Horizons</span>
                    <span className='text-[0.875rem] '>Jennifer West</span>
                    <span className='text-[0.875rem] '>Jan-Feb</span>
                </div>
            <div className="w-full h-[0.125rem] origin-left bg-black"/>
                <div className='w-full flex sm:flex-row flex-col sm:justify-between justify-center items-center pt-6 pb-6'>
                    <span className='text-[1rem] sm:text-[0.875rem] font-medium'>Breaking Through</span>
                    <span className='text-[0.875rem] md:pr-6 sm:pr-8'>Jim Locester</span>
                    <span className='text-[0.875rem] '>Feb-Mar</span>
                </div>
            <div className="w-full h-[0.125rem] origin-left bg-black"/>
                <div className='w-full flex sm:flex-row flex-col sm:justify-between justify-center items-center pt-6 pb-6'>
                    <span className='text-[1rem] sm:text-[0.875rem] font-medium'>A Trip Around The Sun</span>
                    <span className='text-[0.875rem] sm:pr-[4.375rem] md:pr-16'>Jeff Lindsay</span>
                    <span className='text-[0.875rem] '>Mar-Apr</span>
                </div>
            <div className="w-full h-[0.125rem] origin-left bg-black"/>
                <div className='w-full flex sm:flex-row flex-col sm:justify-between justify-center items-center pt-6 pb-6'>
                    <span className='text-[1rem] sm:text-[0.875rem] font-medium'>Take What You Got</span>
                    <span className='text-[0.875rem]  md:pr-7 sm:pr-10'>Mary Samuel</span>
                    <span className='text-[0.875rem] '>Apr-May</span>
                </div>
            <div className="w-full h-[0.125rem] origin-left bg-black"/>
        </div>
    </section>
  )
}

export default Exhibits