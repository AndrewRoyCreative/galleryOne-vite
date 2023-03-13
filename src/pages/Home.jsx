import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

import Hero from '../../assets/hero-img.png'
import WhatsOn from '../../assets/whats-on-img.png'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Slider from '../components/Slider'



const Home = () => {
    const animationControl = useAnimation();
    const {inView, entry, ref} = useInView();
    if (inView) {
        animationControl.start({
            y:0,
            transition:{
                delay: 0.2, duration: 0.9, ease: [0.56, 0.02, 0.37, 1.1]
            }
        })
    }
    
  return (
    <>
    <Navbar />

    {/* HERO HEADING */}
    <section className='h-[50vh] sm:h-[60vh] w-full flex flex-col justify-end pl-10 pr-10'>
            <div className='flex-col flex lg:flex-row justify-between pb-3 lg:items-end '>
                <div>
                    <div className='overflow-hidden'>
                    <h1 className='text-[72px] sm:text-[82px] text-black leading-none font-semibold'>THIS</h1>
                    </div>
                        <div className='flex flex-row items-center overflow-hidden'>
                        <div 
                            className='w-[80px] h-[60px] border-[10px] sm:w-[130px] lg:w-full sm:h-[80px] sm:border-[16px] border-primary'/>
                            <h1 className='text-[72px] sm:text-[82px] text-black leading-none font-semibold'>IS</h1>
                        </div>
                    </div>
                <div className=' hidden w-full lg:w-[40%] h-full lg:flex flex-col justify-end text-wrap pb-3 pt-3'>
                    <p className='text-[12px] sm:text-[14px] font-light'
                        >
                        You won't want to miss this one-of-a-kind exhibition of Native American art!
                        The show will feature the work of some of the most talented Native American artists,
                        who will be showcasing their unique perspectives and cultural heritage.
                        This is a great opportunity to appreciate the beauty and power of Native American 
                        art and to support the work of these amazing artists. Don't miss out on this incredible event!
                    </p>
                </div>
            </div>
    </section>


    {/* HERO IMAGE AND BUTTON */}
        <section>
                <div className='pr-10 pl-10'>
                    <img 
                        className='w-[100%] h-[100%]'
                        src={Hero}
                        alt='Modern Painting'
                    />
                </div>
                <div className=' w-full h-full flex flex-col justify-end text-wrap pt-3 pr-10 pl-10 lg:hidden mt-5'>
                    <p className='text-[14px] font-light'
                        >
                        You won't want to miss this one-of-a-kind exhibition of Native American art!
                        The show will feature the work of some of the most talented Native American artists,
                        who will be showcasing their unique perspectives and cultural heritage.
                        This is a great opportunity to appreciate the beauty and power of Native American 
                        art and to support the work of these amazing artists. Don't miss out on this incredible event!
                    </p>
                </div>
        </section>
        <div className='w-full h-[200px] flex items-center justify-center'>
            <button 
                className='bg-primary pt-3 pb-3 pr-8 pl-8 text-white text-sm font-bold hover:bg-[#14A3AC] transition duration-700 ease-in-out'
                >
                VIEW COLLECTION
            </button>
        </div>


    {/* EXHIBIT LIST HEADING */}
    <section className=' w-full flex flex-col justify-end pl-10 pr-10 mt-20'>
            <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center'>
                <div 
                    ref={ref}
                    className='overflow-hidden'>
                    <motion.h1 
                        className='text-[70px] sm:text-[82px] text-black leading-none font-semibold'
                        
                            >WHATS</motion.h1>
                        <div className='flex flex-row items-center overflow-hidden'>
                            <div className='w-full h-[80px] border-[16px] border-[#EA1B2F]'/>
                                <h1 className='text-[70px] sm:text-[82px] text-black leading-none font-semibold'>ON</h1>
                            </div>
                        </div>
            <div className='w-full lg:w-[50%] h-full pt-5'>
                <img 
                    className='w-full h-full lg:pr-10 lg:pl-10'
                    src={WhatsOn}
                    alt='Modern Painting'
                />
                </div>
            </div>
    </section>


    {/* EXHIBIT LIST */}
    <section>
        <div className='w-full h-[400px] mt-20 sm:mt-30 pl-10 pr-10'>
            <div className='w-full flex sm:flex-row flex-col sm:justify-between justify-center items-center border-t-2 border-b-2 border-black pt-6 pb-6 '>
                <span className='text-[16px] sm:text-[14px] font-medium'>New Horizons</span>
                <span className='text-[14px] '>Jennifer West</span>
                <span className='text-[14px] '>Jan-Feb</span>
            </div>
            <div className='w-full flex sm:flex-row flex-col sm:justify-between justify-center items-center border-black pt-6 pb-6'>
                <span className='text-[16px] sm:text-[14px] font-medium'>Breaking Through</span>
                <span className='text-[14px] md:pr-6 sm:pr-8'>Jim Locester</span>
                <span className='text-[14px] '>Feb-Mar</span>
            </div>
            <div className='w-full flex sm:flex-row flex-col sm:justify-between justify-center items-center border-t-2 border-b-2 border-black pt-6 pb-6'>
                <span className='text-[16px] sm:text-[14px] font-medium'>A Trip Around The Sun</span>
                <span className='text-[14px] sm:pr-[70px] md:pr-16'>Jeff Lindsay</span>
                <span className='text-[14px] '>Mar-Apr</span>
            </div>
            <div className='w-full flex sm:flex-row flex-col sm:justify-between justify-center items-center border-b-2 border-black pt-6 pb-6'>
                <span className='text-[16px] sm:text-[14px] font-medium'>Take What You Got</span>
                <span className='text-[14px]  md:pr-7 sm:pr-10'>Mary Samuel</span>
                <span className='text-[14px] '>Apr-May</span>
            </div>
        </div>
    </section>


    {/* ARTICLES HEADING */}
    <section>
        <div className=' w-full flex flex-col justify-center items-center mt-20 pl-10 pr-10'>
            <div className='w-full flex flex-col lg:flex-row justify-center items-center'>
                <div className='w-full flex flex-row justify-between lg:hidden pb-20 pr-10 pl-10'>
                    <div className='w-[100px] h-[60px] md:w-[180px] md:h-[100px] lg:w-full lg:ml-10 lg:h-[180px] lg:hidden border-[12px] md:border-[20px] border-[#F3B52A]'/>
                        <div className='w-[100px] h-[60px] md:w-[180px] md:h-[100px] lg:w-full lg:ml-10 lg:h-[180px] lg:hidden border-[12px] md:border-[20px] border-[#F3B52A]'/>
                    </div>
                    <div className='hidden lg:flex lg:w-full h-[180px] border-[20px] border-[#F3B52A]'/>
                        <div className='flex flex-col items-center'>
                                <h1 className='text-center text-[72px] sm:text-[82px] text-black leading-none font-semibold mr-10 ml-10'>A FEW WORDS</h1>
                                    <p className=' text-[14px] w-full mt-5 pl-10 pr-10 text-center md:w-[750px] text-wrap font-light'
                                        >
                                        Supporting Native American artists
                                        is an important way to recognize the unique cultural heritage 
                                        of Native American people. We can help ensure that their art and culture is celebrated and appreciated.
                                        It is also an opportunity to learn about different cultures and perspectives and to show our appreciation
                                        for the work of these amazing artists. Click on the articles to learn more!
                                    </p>
                            </div>  
                        <div className='hidden lg:flex lg:w-full h-[180px] border-[20px] border-[#F3B52A]'/>
                </div>
         </div>
    </section>


    {/* ARTICLES IMAGES */}
    <Slider />
    {/* <SliderTwo /> */}

    {/* SECTION 5 // NEWSLETTER */}
    <section>
        <div className=' flex flex-col justify-start items-start md:justify-center md:items-center mt-40 lg:mt-64'>
            <div className='flex flex-row justify-center items-center overflow-hidden'>
                <h1 className=' w-full lg:w-[70%] text-[72px] sm:text-[82px] text-black leading-none font-semibold pl-10 pr-10 lg:mr-20 lg:ml-20 text-left md:text-center'>BE THE FIRST TO KNOW</h1>
                    </div>
                        <p className='w-full md:w-[90%] pl-10 pr-10 lg:w-[70%] text-wrap mt-5 text-[14px] font-light'
                        >
                        Would you like to be the first to hear about new exhibitions? 
                        Then join the Gallery One email list! You will get updates on upcoming exhibitions and special 
                        offers, as well as exclusive access to early previews of all upcoming shows.
                    </p>
                <div className='w-full flex flex-row justify-center items-end pr-10 pl-10'>
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
            </div>
        </div>
    </section>


    {/* FOOTER */}
    <Footer />
    </>
  )
}

export default Home