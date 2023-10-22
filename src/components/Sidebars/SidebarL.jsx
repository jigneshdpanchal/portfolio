import React from 'react'
import { IoLogoGithub,IoLogoTwitter,IoLogoLinkedin,IoLogoFacebook } from "react-icons/io5";

const SidebarL = () => {
  return (
    <div
    className="w-[90px] mt-[92px] border-r-[1px] dark:bg-slate-800 h-screen fixed flex flex-col justify-around items-center"
    >
        <h2 className='-rotate-90 font-bold tracking-widest'>PORTFOLIO</h2>
        <div className='flex flex-col gap-7 mb-10 text-[28px]'>
            <a href='https://github.com/jigneshdpanchal/' aria-label='Visit My GitHub Profile Page' target='_blank'><IoLogoGithub className="cursor-pointer text-purple-600 hover:scale-110 transition-all ease-in-out"/></a>
            <a href='https://facebook.com/JigneshDPanchal' aria-label='Visit My Facebook Profile Page' target='_blank'><IoLogoFacebook className="cursor-pointer text-purple-600 hover:scale-110 transition-all ease-in-out"/></a>
            <a href='https://in.linkedin.com/in/jignesh-panchal-seo' aria-label='Visit My Linkedin Profile Page' target='_blank'>
            <IoLogoLinkedin className="cursor-pointer text-purple-600 hover:scale-110 transition-all ease-in-out"/></a>
            <a href='https://twitter.com/JigneshDPanchal' aria-label='Visit My Twitter Profile Page' target='_blank'>
            <IoLogoTwitter className="cursor-pointer text-purple-600 hover:scale-110 transition-all ease-in-out"/></a>
        </div>
    </div>
  )
}

export default SidebarL