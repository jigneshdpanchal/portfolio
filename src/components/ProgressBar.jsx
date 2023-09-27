import {useEffect, useState} from 'react'
function ProgressBar() {

    const [scrollTop,setScrollTop]=useState();
    useEffect(()=>{
        window.addEventListener("scroll",onScroll)
        return ()=>window.removeEventListener("scroll",onScroll);
    },[])

    const onScroll=()=>{
        const winScroll=document.documentElement.scrollTop;

        const height=document.documentElement.scrollHeight-
                    document.documentElement.clientHeight

        const scrolled=(winScroll/height)*100;
        
        setScrollTop(scrolled)
    }
  return (
    <div className='w-1 bg-gray-100 fixed mt-[100px ml-[-5px] h-full mb-4'>
        <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all ease-out duration-1000' style={{height:`${scrollTop}%`}}>

        </div>
    </div>
  )
}

export default ProgressBar