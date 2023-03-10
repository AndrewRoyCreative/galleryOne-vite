import React from 'react'

import Artist1 from '/assets/artist-1.png'
import Artist2 from '/assets/artist-2.png'
import Artist3 from '/assets/artist-3.png'

const Slider = () => {
  return (
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
  )
}

export default Slider