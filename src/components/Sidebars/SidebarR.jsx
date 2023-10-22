import React from 'react'
import ProfilePic from '../../assets/Jignesh-Panchal.jpg'

const SidebarR = () => {
  return (
    <div className='fixed'>
        <div className='flex justify-center content-center'>
        <img src={ProfilePic} alt='Jignesh Panchal Profile Pic' width={200} height={200} className='object-cover' />
        </div>
        <div className='h-[1px] bg-gradient-to-r from-pink-500 to-violet-500'></div>
        <div className='lg:hidden md:hidden sm:block text-[18px] leading-8 px-5 py-5'>
          <h3><strong className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>DOB:</strong> Feb 2nd, 1983</h3>
          <h3><strong className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Address:</strong> G-1204, Swami Vivekanand Heights-1, Laxmipura Road, Gorwa, Vadodara. </h3>
          <h3><strong className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Email:</strong> <a className='hover:text-fuchsia-600' href='mailto:jigneshp90@gmail.com'>jigneshp90@gmail.com</a></h3>
          <h3><strong className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Mobile:</strong> <a className='hover:text-fuchsia-600' href='tel:+919664840299'>+91 966 4840 299</a></h3>
        </div>
        <div className='flex flex-col justify-center items-center px-2 content-center'>
        <h3 className='text-[18px] leading-4 p-5'>Hobbies</h3>
          <div className='grid grid-cols-2 gap-4'>
            <div className='p-2 border-[1px] rounded-md shadow-inner text-sm text-center'>Reading Industry Blogs</div>
            <div className='p-2 border-[1px] rounded-md shadow-inner text-sm text-center'>Watching Industry Videos</div>
            <div className='p-2 border-[1px] rounded-md shadow-inner text-sm text-center'>Learn New Things with ChatGPT</div>
            <div className='p-2 border-[1px] rounded-md shadow-inner text-sm text-center'>Learn Coding</div>
            <div className='p-2 border-[1px] rounded-md shadow-inner text-sm text-center'>Strategic Games</div>
            <div className='p-2 border-[1px] rounded-md shadow-inner text-sm text-center'>Blogging</div>
          </div>
        </div>
        <div className='flex justify-center content-center'>
            <a href='https://drive.google.com/uc?id=17-FwgY7bxALgvcr0H07AW1HLeGYg4a-B&export=download' aria-label='Download CV'><button className='px-10 py-2 mt-4 border-[1px] rounded-md bg-white shadow-sm cursor-pointer hover:shadow-xl'>Resume</button></a>
          </div>
    </div>
  )
}

export default SidebarR