import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaTimes, FaBars } from 'react-icons/fa'
import './styles/navbar.css'

const Nav = () => {
  const menu = [
    {
      id: 1,
      name: "HOME",
    },
    {
      id: 2,
      name: "ABOUT",
    },
    {
      id: 3,
      name: "EDUCATION",
    },
    {
      id: 4,
      name: "SKILLS",
    },
    {
      id: 5,
      name: "EXPERIENCE",
    },
    {
      id: 6,
      name: "CONTACT",
    }
  ];
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const content = <>
  <div className='lg:hidden md:block mnav navbar block top-[92px] w-full left-0 right-0 bg-slate-900 transition'>
    <ul className='text-center md:text-sm text-xl'>
      {menu.map((item, index) => (
        <li key={index} className='my-4 py-4 border-b border-slate-800'>
        <Link spy={true} smooth={true} to={item.name.toLocaleLowerCase()} duration={500}>{item.name}</Link></li>
      ))}      
    </ul>
  </div>
  </>
  return (
    <nav className='bg-gradient-to-r shadow-lg from-violet-500 to-fuchsia-500 navbar'>
      <div className='h-10vh menu flex top-0 justify-between z-50 text-white py-4'>
        <div className='flex items-center flex-1'>
          <span className='text-[40px] font-bold'><a className='px-5' href='https://jigneshdpanchal.github.io/portfolio/'>JP</a></span>
        </div>
        <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden'>
          <div className='flex-10'>
          <ul className='flex gap-8 mr-16 md:text-base text-[18px]'>
          {menu.map((item,index) => (
            <li key={index} className='cursor-pointer'>
        <Link spy={true} smooth={true} to={item.name.toLocaleLowerCase()} duration={500}>{item.name}</Link></li>
      ))}
          </ul>
          </div>
        </div>
        <div>
          {click && content}
        </div>
        <button className='block sm:hidden transition' onClick={handleClick}>
          {click ? <FaTimes/> : <FaBars/>}
        </button>
      </div>
    </nav>
  )
}

export default Nav