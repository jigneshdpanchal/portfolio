import Nav from './components/Nav'
import Aos from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
import About from './components/About'
import SidebarL from './components/Sidebars/SidebarL'
import SidebarR from './components/Sidebars/SidebarR'
import ProgressBar from './components/ProgressBar'

function App() {
  
  Aos.init();

  return (
    <>
        
        <Nav/>
        <div className='hidden md:block'><SidebarL/></div>
        <div className='w-full' id='home'>
        <div className='lg:ml-[90px] sm:ml-[-90] overflow-hidden grid grid-cols-1 md:grid-cols-3'>
          <div className='col-span-2'><About/></div>
          <div className='hidden mt-[92px] md:block'>
          <ProgressBar/>
          <SidebarR/>
          </div>
        </div>
        </div>
    </>
  )
}

export default App
