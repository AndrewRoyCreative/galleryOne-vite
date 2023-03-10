import React from 'react'

import Hero from '/assets/hero-img.png'
import WhatsOn from '/assets/whats-on-img.png'

import Artist1 from '/assets/artist-1.png'
import Artist2 from '/assets/artist-2.png'
import Artist3 from '/assets/artist-3.png'

const Home = () => {
  return (
    <>

    {/* NAVBAR */}
    <nav className='w-full flex flex-row justify-between pt-5 pb-5 pr-10 pl-10 align-baseline'>
        <div className='flex flex-col'>
            <span className='leading-1 text-sm'>GALLERY</span>
                <div className='flex flex-row items-center'>
                    <span className='leading-none text-sm'>ONE</span>
                    <div className='w-full h-full border-[3px] border-primary ml-1' />
                </div>
        </div>
            <ul className='flex flex-row w-full justify-end items-center'>
                <li className='text-sm'>SHOP</li>
                <li className='pl-[100px] text-sm'>CONTACT</li>
            </ul>
    </nav>


    {/* HERO HEADING */}
    <section className=' h-[70vh] w-full flex flex-col justify-end pl-10 pr-10'>
            <div className='flex-col flex lg:flex-row justify-between pb-3 lg:items-end '>
                <div>
                    <h1 className='text-[92px] text-black leading-none font-semibold'>THIS</h1>
                        <div className='flex flex-row items-center '>
                        <div className=' w-[130px] lg:w-full h-[80px] border-[16px] border-primary' />
                            <h1 className='text-[92px] text-black leading-none font-semibold'>IS</h1>
                        </div>
                </div>
                <div className='w-full lg:w-[40%] h-full flex flex-col justify-end text-wrap pb-3 pt-3'>
                    <p className='text-sm font-light'>You won't want to miss this one-of-a-kind exhibition of Native American art!
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
        </section>
        <div className='w-full h-[200px] flex items-center justify-center'>
            <button className='bg-primary pt-3 pb-3 pr-8 pl-8 text-white text-sm font-bold hover:bg-[#14A3AC] transition duration-700 ease-in-out'>VIEW COLLECTION</button>
        </div>


    {/* EXHIBIT LIST HEADING */}
    <section className=' w-full flex flex-col justify-end pl-10 pr-10 mt-20'>
            <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center'>
                <div>
                    <h1 className='text-[92px] text-black leading-none font-semibold'>WHATS</h1>
                        <div className='flex flex-row items-center '>
                        <div className='w-full h-[80px] border-[16px] border-[#EA1B2F]' />
                            <h1 className='text-[92px] text-black leading-none font-semibold'>ON</h1>
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
        <div className='w-full h-[400px] mt-40 pl-10 pr-10'>
            <div className='w-full flex flex-row justify-between border-t-2 border-b-2 border-black pt-6 pb-6 '>
                <span>New Horizons</span><span>Jennifer West</span><span>Jan-Feb</span>
            </div>
            <div className='w-full flex flex-row justify-between border-black pt-6 pb-6'>
                <span>Breaking Through</span><span className='pr-9'>Jim Locester</span><span>Feb-Mar</span>
            </div>
            <div className='w-full flex flex-row justify-between border-t-2 border-b-2 border-black pt-6 pb-6'>
                <span>A Trip Around The Sun</span><span className='pr-20'>Jeff Lindsay</span><span>Mar-Apr</span>
            </div>
            <div className='w-full flex flex-row justify-between border-b-2 border-black pt-6 pb-6'>
                <span>Take What You Got</span><span className='pr-10'>Mary Samuel</span><span>Apr-May</span>
            </div>
        </div>
    </section>


    {/* ARTICLES HEADING */}
    <section>
        <div className='w-full flex flex-col justify-center items-center mt-20'>
            <div className='w-full flex flex-col lg:flex-row justify-center items-center '>
                    <div className='w-full flex flex-row justify-between lg:hidden pb-20 pr-10 pl-10'>
                    <div className='w-[180px] h-[100px] lg:w-full lg:ml-10 lg:h-[180px] lg:hidden border-[20px] border-[#F3B52A]'/>
                    <div className='w-[180px] h-[100px] lg:w-full lg:ml-10 lg:h-[180px] lg:hidden border-[20px] border-[#F3B52A]'/>
                    </div>
                    <div className='hidden lg:inline-block w-[180px] h-[100px] lg:w-full lg:ml-10 lg:h-[180px] border-[20px] border-[#F3B52A]'/>
                            <div className='flex flex-col items-center'>
                                <h1 className='text-center text-[92px] text-black leading-none font-semibold mr-10 ml-10'>A FEW WORDS</h1>
                                    <p className='w-full mt-5 pl-10 pr-10 text-center md:w-[750px] text-wrap'>Supporting Native American artists
                                     is an important way to recognize the unique cultural heritage 
                                        of Native American people. We can help ensure that their art and culture is celebrated and appreciated.
                                        It is also an opportunity to learn about different cultures and perspectives and to show our appreciation
                                        for the work of these amazing artists. Click on the articles to learn more!
                                    </p>
                    </div>      
                <div className='hidden lg:inline-block lg:w-full lg:mr-10 h-[180px] border-[20px] border-[#F3B52A]'/>
            </div>
         </div>
    </section>


    {/* ARTICLES IMAGES */}
    <section>
        <div className=' w-full flex flex-col md:flex-row md:justify-between md:mt-20'>
            <div className=' w-full h-full flex flex-col pl-10 pr-10 '>
                <img 
                    src={Artist1}
                    alt="Artist 1"
                />
                <div>
                    <h5 className='text-[30px] font-medium mt-5'>MY CULTURE</h5>
                        <p className='w-full mt-5 text-wrap text-[#646464]'>Joseph is an 23-year-old Native American who has overcome 
                            immense adversity in his life. He has faced poverty,
                            racism, and a lack of educational opportunities. Despite these 
                            difficulties, Joseph has found a way to use his art to express his 
                            courage and resilience.
                        </p>
                </div>
                    <button className=' bg-[#F3B52A] w-full lg:w-[200px] text-white p-1 pt-2 pb-2 mt-14 hover:bg-[#DCA52A] transition duration-700 ease-in-out'>READ MORE</button>
                </div>
            <div className='hidden w-full h-full md:flex flex-col pl-10 pr-10'>
                <img 
                    src={Artist2}
                    alt="Artist 2"
                />
                    <div className='flex flex-col justify-between'>
                    <h5 className='text-[30px] font-medium mt-5'>THE WAY FORWARD</h5>
                        <p className='mt-5 text-wrap text-[#646464]'>Marina is a 32-year-old Native South American woman who
                        uses her art to empower women and promote positive change. Marina has faced poverty, 
                        sexism, and discrimination in her life, and she has used her art to express her resilience 
                        and strength.
                        </p>
                    </div>
                    <button className=' bg-[#F3B52A] w-full lg:w-[200px] text-white p-1 pt-2 pb-2 mt-14 hover:bg-[#DCA52A] transition duration-700 ease-in-out'>READ MORE</button>
            </div>
            <div className=' hidden w-full lg:flex flex-col pr-10 pl-10'>
                <img 
                    src={Artist3}
                    alt="Artist 3"
                />
                <div className='flex flex-col h-full justify-between'>
                    <div>
                        <h5 className='text-[30px] font-medium mt-5'>KNOWING YOUR ROOTS</h5>
                            <p className='mt-5 text-wrap text-[#646464]'>John is an 80-year-old Native American man who uses his art
                            to keep his culture and heritage alive. John is determined to ensure that his culture and
                            heritage continue to thrive.
                            </p>
                    </div>
                        <button className=' bg-[#F3B52A] w-full lg:w-[200px] text-white p-1 pt-2 pb-2 mt-14 hover:bg-[#DCA52A] transition duration-700 ease-in-out'>READ MORE</button>
                </div>
            </div>
        </div>
    </section>


    {/* SECTION 5 // NEWSLETTER */}
    <section>
        <div className=' flex flex-col justify-start items-start lg:justify-center lg:items-center mt-40 lg:mt-64'>
            <h1 className=' w-full lg:w-[70%] text-[92px] text-black leading-none font-semibold pl-10 pr-10 lg:mr-20 lg:ml-20 text-left lg:text-center'>BE THE FIRST TO KNOW</h1>
                <p className=' w-full pl-10 pr-10 lg:w-[70%] text-wrap mt-5'>Would you like to be the first to hear about new exhibitions? 
                    Then join the Gallery One email list! You will get updates on upcoming exhibitions and special 
                    offers, as well as exclusive access to early previews of all upcoming shows.
                </p>

                {/* change to input field and button*/}
                <div className='w-full flex flex-row justify-center pr-10 pl-10'>
                    <div className='h-[40px] w-full lg:w-[70%] border-2 border-black mt-20 flex flex-row justify-between items-center font-light text-gray-500'>
                        you@youremail.com
                        <div className='h-full w-[120px] flex flex-row justify-center items-center bg-black text-white'>
                         IM IN
                    </div>
                </div>
            </div>
        </div>
    </section>


    {/* FOOTER */}
    <footer className='h-[300px] w-full bg-black mt-40 flex flex-col'>
        <div className='w-full h-full flex flex-row justify-between pr-10 pl-10'>
            <div className='flex flex-col'>
                <h5 className='text-white font-semibold mt-10 mb-2'>GALLERY ONE</h5>
                <span className='text-white font-light'>123 Palmdale West</span>
                <span className='text-white font-light'>Palo Alto, California</span>
                <span className='text-white font-light'># 650-555-5555</span>
            </div>
            <div className='flex flex-col pr-24'>
                <h5 className='text-white font-semibold mt-10 mb-2'>SOCIALS</h5>
                <span className='text-white font-light'>Instagram</span>
                <span className='text-white font-light'>Twitter</span>
                <span className='text-white font-light'>Facebook</span>
            </div>
            <div className='flex flex-col'>
                <h5 className='text-white font-semibold mt-10 mb-2'>INFO</h5>
                <span className='text-white font-light'>About</span>
                <span className='text-white font-light'>FAQ</span>
                <span className='text-white font-light'>Contact</span>
            </div>
        </div>
            <div className='flex flex-row justify-center mb-10'>
            <span className='text-white font-thin text-center'>Copyright 2023</span>
            </div>
        
    </footer>
    </>
  )
}

export default Home