import React from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'
import MainIcon from '../assets/MainLogo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
        console.log(nav)
    }

    const handleScroll = (id) => {
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <div className="flex justify-between text-white items-center h-24 max-w-[1240px] px-4 mx-auto ">
        <img src={MainIcon} className='w-36'  alt="logo"/>
        <ul className='hidden md:flex z-10'>
            <li className='p-4'><button onClick={() => handleScroll('home')}>Home</button></li>
            <li className='p-4'><button onClick={() => handleScroll('about')}>About Us</button></li>
            <li className='p-4'><button onClick={() => handleScroll('partners')}>Partners</button></li>
            <li className='p-4'><button onClick={() => handleScroll('cards')}>Pricing</button></li>
            <li className='p-4'><button onClick={() => handleScroll('contact')}>Contact</button></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden z-50'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 md:hidden': 'fixed left-[-100%]'}>
        <img src={MainIcon} className='w-36 p-4' alt="logo"/>
            <ul className='pt-24 uppercase p-4'>
                <li className='p-4 border-b border-gray-600'><button onClick={() => handleScroll('home')}>Home</button></li>
                <li className='p-4 border-b border-gray-600'><button onClick={() => handleScroll('about')}>About Us</button></li>
                <li className='p-4 border-b border-gray-600'><button onClick={() => handleScroll('partners')}>Partners</button></li>
                <li className='p-4 border-b border-gray-600'><button onClick={() => handleScroll('cards')}>Pricing</button></li>
                <li className='p-4'><button onClick={() => handleScroll('contact')}>Contact</button></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar