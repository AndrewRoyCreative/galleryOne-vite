import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full flex flex-row justify-between pt-5 pb-5 pr-10 pl-10 align-baseline'>
    <div className='flex flex-col'>
        <span className='leading-1 text-sm'>GALLERY</span>
            <div className='flex flex-row items-center'>
                <span className='leading-none text-sm'>ONE</span>
                <div className='w-full h-full border-[3px] border-primary ml-1' />
            </div>
        </div>
        <ul className='hidden sm:flex flex-row w-full justify-end items-center'>
            <li className='text-sm'>SHOP</li>
            <li className='pl-[100px] text-sm'>CONTACT</li>
        </ul>
        <img 
        className='block sm:hidden'
          src="../../assets/burger-menu.svg" 
          alt="menu-icon"
          width={22}
          height={16}
          />
</nav>
  )
}

export default Navbar