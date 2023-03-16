import { motion } from "framer-motion"

import Menu from '../../assets/burgermenu.svg'

const Navbar = () => {
  return (
    <motion.nav 
      className='w-[100vw] flex flex-row justify-between pt-5 pb-5 pr-10 pl-10 align-baseline'
      initial={{y: -10, opacity: 0}}
      animate={{y: 0,opacity:1}}
      transition={{delay: 2.0, duration: 1.2, ease: [0.56, 0.02, 0.37, 1.1]}}
      >
      <div className='flex flex-col'>
        <span className='leading-1 text-sm'>GALLERY</span>
            <div className='flex flex-row items-center'>
                <span className='leading-none text-sm'>ONE</span>
            <div className='w-full h-full border-[3px] border-primary ml-1' />
        </div>
      </div>
          <ul className='hidden sm:flex flex-row w-full justify-end items-center'>
              <li className='text-sm'>SHOP</li>
              <li className='pl-[6.25rem] text-sm'>CONTACT</li>
          </ul>
          <div className="mt-3 w-[18px] h-[12px]">
        <img 
          className='block sm:hidden w-[1.375rem] h-[1.375rem]'
          src={Menu} 
          alt="menu-icon"
        />
        </div>
    </motion.nav>
  )
}

export default Navbar