import React from 'react'

import Artist1 from '../../assets/artist-1.png'
import Artist2 from '../../assets/artist-2.png'
import Artist3 from '../../assets/artist-3.png'

const SliderTwo = () => {
  return (
    <section className='w-full h-full flex flex-col pr-10 pl-10 bg-teal-500'>
                <div className='w-full h-full flex flex-row justify-start md:justify-between'>
                    <div className='lg:w-[35%]'>
                        <img 
                            src={Artist1}
                            alt="Artist 1"
                        />
                        <h5 className='text-[20px] lg:text-[20px] font-semibold mt-5'>MY CULTURE</h5>
                            <p className='w-full mt-5 text-wrap text-[#646464] text-[14px] lg:text-[14px] font-light pr-5'
                                >
                                Joseph is an 23-year-old Native American who has overcome 
                                immense adversity in his life. He has faced poverty,
                                racism, and a lack of educational opportunities. Despite these 
                                difficulties, Joseph has found a way to use his art to express his 
                                courage and resilience.
                            </p>
                    </div>
                    <div className='lg:w-[35%] mr-8 ml-8 hidden sm:block'>
                        <img
                            src={Artist2}
                            alt="Artist 2"
                        />
                            <h5 className='text-[20px] font-semibold mt-5'>THE WAY FORWARD</h5>
                                <p className='mt-5 text-wrap text-[#646464] text-[14px] lg:text-[14px] font-light pr-5'
                                >
                                John is an 80-year-old Native American man who uses his art to keep his culture and 
                                heritage alive. John is determined to ensure that his culture and heritage continue 
                                to thrive.
                            </p>
                    </div>
                    <div className='w-[35%] hidden lg:block'>
                        <img
                            src={Artist3}
                            alt="Artist 3"
                        />
                            <h5 className='text-[20px] font-semibold mt-5'>KNOWNG YOUR ROOTS</h5>
                                <p className='mt-5 text-wrap text-[#646464] text-[14px] lg:text-[14px] font-light pr-5'
                                    >
                                    Marina is a 32-year-old Native South American woman who
                                    uses her art to empower women and promote positive change. Marina has faced poverty, 
                                    sexism, and discrimination in her life, and she has used her art to express her resilience 
                                    and strength.
                                </p>
                            </div>
                    </div>

            <div className=' bg-red-500 w-full h-full flex flex-row justify-between '>
                <div className='w-[35%]'>
                    <button className=' bg-[#F3B52A] w-[200px] text-white p-1 pt-2 pb-2 mt-14 hover:bg-[#DCA52A] transition duration-700 ease-in-out'>READ MORE</button>
                    </div>
                    <div className='w-[35%]'>
                    <button className=' bg-[#F3B52A] w-[200px] text-white p-1 pt-2 pb-2 mt-14 hover:bg-[#DCA52A] transition duration-700 ease-in-out'>READ MORE</button>
                    </div>
                    <div className='w-[35%] hidden lg:block'>
                    <button className=' bg-[#F3B52A] w-[200px] text-white p-1 pt-2 pb-2 mt-14 hover:bg-[#DCA52A] transition duration-700 ease-in-out'>READ MORE</button>
                    </div>
                </div>
</section>
  )
}

export default SliderTwo