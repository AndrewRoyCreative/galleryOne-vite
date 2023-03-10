import React from 'react'

const Footer = () => {
  return (
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
  )
}

export default Footer