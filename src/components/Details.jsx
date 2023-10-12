import React from 'react'

const Details = () => {
  return (
    <div className='flex mt-5 mb-5 border-[1px] rounded-lg justify-center shadow-lg'>
        <div className='grid w-[100%] grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-2 lg:p-10 md:p-10 xl:p-10 text-xl'>
        <p className='font-semibold text-left xl:text-right lg:text-right md:text-right bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>DOB:</p>
        <p className='lg:col-span-2 xl:col-span-2 md:col-span-2 col-span-3 lg:text-left md:text-left xl:text-left text-left'>February 02, 1983</p>
        <p className='font-semibold text-left xl:text-right lg:text-right md:text-right bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Address:</p>
        <p className='lg:col-span-2 xl:col-span-2 md:col-span-2 col-span-3 lg:text-left md:text-left xl:text-left text-left'>G-1204, Swami Vivekanand Heights-1, Laxmipura Road, Gorwa, Vadodara.</p>
        <p className='font-semibold text-left xl:text-right lg:text-right md:text-right bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Email:</p>
        <p className='lg:col-span-2 xl:col-span-2 md:col-span-2 col-span-3 lg:text-left md:text-left xl:text-left text-left'><a className='hover:text-fuchsia-500' href='mailto:jigneshp90@gmail.com'>jigneshp90@gmail.com</a></p>
        <p className='font-semibold text-left xl:text-right lg:text-right md:text-right bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Mobile:</p>
        <p className='lg:col-span-2 xl:col-span-2 md:col-span-2 col-span-3 lg:text-left md:text-left xl:text-left text-left'><a className='hover:text-fuchsia-500' href='tel:+919664840299'>+91 966 4840 299</a></p>
        <div className='visible col-span-3 xl:hidden lg:hidden md:hidden text-center mb-2'>
        <a href='https://drive.google.com/uc?id=17-FwgY7bxALgvcr0H07AW1HLeGYg4a-B&export=download'><button className='px-5 py-2 mt-4 border-[1px] rounded-md bg-white shadow-sm cursor-pointer hover:shadow-xl'>Download CV</button></a>
        </div>
    </div>
    </div>
  )
}

export default Details