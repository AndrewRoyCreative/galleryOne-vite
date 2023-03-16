import Insta from '../../assets/insta.svg'
import Twitter from '../../assets/twitter.svg'
import Facebook from '../../assets/facebook.svg'

const Footer = () => {
  return (
    <footer className='h-[18.75rem] w-full bg-black mt-40 flex flex-col overflow-hidden'>
        <div className='w-full h-full flex flex-row justify-between pr-10 pl-10'>
            <div className='flex flex-col'>
                <h5 className='text-white font-semibold mt-10 mb-2'>GALLERY ONE</h5>
                <span className='text-white font-light text-[0.875rem] sm:text-[16px]'>123 Palmdale West</span>
                <span className='text-white font-light text-[0.875rem] sm:text-[16px]'>Palo Alto, California</span>
                <span className='text-white font-light text-[0.875rem] sm:text-[16px]'># 650-555-5555</span>
            </div>
            <div className='md:flex flex-col pr-24 hidden'>
                <h5 className='text-white font-semibold mt-10 mb-2'>SOCIALS</h5>
                <span className='text-white font-light text-[0.875rem] sm:text-[16px]'>Instagram</span>
                <span className='text-white font-light text-[0.875rem] sm:text-[16px]'>Twitter</span>
                <span className='text-white font-light text-[0.875rem] sm:text-[16px]'>Facebook</span>
            </div>
            <div className='flex flex-col'>
                <h5 className='text-white font-semibold mt-10 mb-2'>INFO</h5>
                <span className='text-white font-light text-[0.875rem] sm:text-[16px]'>About</span>
                <span className='text-white font-light text-[0.875rem] sm:text-[16px]'>FAQ</span>
                <span className='text-white font-light text-[0.875rem] sm:text-[16px]'>Contact</span>
            </div>
        </div>
        <div className=' flex flex-col justify-center items-center mb-1'>
            <div className='flex flex-row pb-10 md:hidden'>
                <img 
                    className='w-[1.375rem] h-[1.375rem]'
                    src={Insta}
                    />
                <img 
                    className='w-[1.75rem] h-[1.75rem] ml-7 mr-7 '
                    src={Twitter}/>
                <img 
                    className='w-[1.375rem] h-[1.375rem]'
                    src={Facebook}
                    />
            </div>
        <span className='text-white font-thin text-center text-[0.875rem] sm:text-[1rem]'>Copyright 2023</span>
    </div>
</footer>
  )
}

export default Footer