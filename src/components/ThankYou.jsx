import React from 'react'

const ThankYou = () => {
  return (
    <div className='flex flex-col w-full p-5 text-center'>
        <h2 className='text-[22px] text-white font-bold'>Thank You for Contacting Us!</h2><br/>
        <p className='text-white '>We've received your message and will get back to you as soon as possible. Your input is important to us, and we appreciate your interest. In the meantime, feel free to explore more of our website or check out our latest updates.</p>
        <h4 className='m-10 text-white font-semibold text-lg'>Have a great day!</h4>
            <a href='https://jigneshdpanchal.github.io/portfolio/'><button className='py-2 px-10 rounded-md bg-black text-white hover:bg-white hover:text-black'>Back to Home</button></a>
    </div>
  )
}

export default ThankYou