import React from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { Link } from 'react-scroll'

function Footer() {
  return (
    <div className='w-full fixed bottom-0 z-30 mt-10 border-t-[1px] bg-white p-2 text-center'>
        <div className='flex items-center content-around justify-around'>
        <div className='z-10 text-[16px] font-medium'>Copyright © 2023 Jignesh Panchal</div>
        <Link to='home' smooth={true}><FaArrowUp className='top'/></Link>
        </div>
    </div>
  )
}

export default Footer