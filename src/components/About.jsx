import React, { useState } from 'react'
import logo from '../assets/favicon.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
import './styles/main.css'
import { Typewriter } from 'react-simple-typewriter'
import { FaGraduationCap } from 'react-icons/fa6'
import WorkExperience from './WorkExperience/Experience'
import Footer from './Footer'
import { useCollapse } from 'react-collapsed'
import Contact from './Contact'
import Details from './Details'

const About = () => {
	const [isExpanded, setExpanded] = useState(false)
	const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
	Aos.init({ duration: 2000 });
	return (
		<>
			<div className='main px-5 mt-[50px] lg:mt-[150px] md:mt-[150px] xl:mt-[150px]'>
				<section className='about'>
					<div data-aos="fade-up" className='about-container px-10'>
						<p className='mt-5 text-black font-medium text-[14px] tracking-widest'>HELLO! MY NAME IS</p>
						<h1 className='text-[60px] font-bold text-black tracking-widest text-center mt-5'>JIGNESH<br /> PANCHAL</h1>
						<div id='about'>
							<img src={logo} className='logo' alt='Logo' />
						</div>
						<h3 className='lg:text-[40px] xl:text-[40px] md:text-[40px] text-[30px] mt-[50px] text-center font-bold'>I’m <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'><Typewriter
							words={['an SEO Professional', 'a Digital Marketer', 'a Web Designer', 'a Graphic Designer']}
							loop={0}
							cursor
							cursorStyle='_'
							typeSpeed={70}
							deleteSpeed={50}
							delaySpeed={1000}
						/></span><br />
							based in Vadodara, Gujarat, India.</h3>
							<Details/>
						<p className='mt-5 mb-[-50px] text-gray-400 text-[18px] text-justify'>
							I am a highly skilled SEO Professional with over 13+ years of experience in optimizing websites, increasing organic traffic, and improving search engine rankings. Proficient in conducting comprehensive keyword research, developing effective SEO strategies, and implementing on-page and off-page optimization techniques. Demonstrated ability to analyze data, track performance metrics, and provide actionable insights to enhance website visibility and user experience.
						</p>
					</div>
				</section>
				<section data-aos="fade-left" data-aos-anchor-placement="top-bottom" className='edu-section mb-[-50px] pt-[80px]' id='education'>
					<div className='mb-10'>
						<div className='section-title text-center'>
							<div className='greendot'></div>
							<div className='left-line'></div>
							<h2 className='text-[24px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Education</h2>
							<div className='right-line'></div>
							<div className='greendot'></div>
						</div>
					</div>
					<div className="edu-timeline">
						<div className="edu-container left-container">
							<FaGraduationCap className='edu-icon' />
							<div className="edu-text-box">
								<h2 className='font-bold'>HSC-Commerce</h2>
								<small>2002</small>
								<p>From: Rameshwar Vidhyalaya, Gotri, Vadodara.</p>
								<span className='left-container-arrow'></span>
							</div>
						</div>
						<div className="edu-container right-container">
							<FaGraduationCap className='edu-icon' />
							<div className="edu-text-box">
								<h2 className='font-bold'>Web Designer</h2>
								<small>2003</small>
								<p>From: Xavier Technical Institute, Sevasi, Vadodara.</p>
								<span className='right-container-arrow'></span>
							</div>
						</div>
						<div className="edu-container left-container">
							<FaGraduationCap className='edu-icon' />
							<div className="edu-text-box">
								<h2 className='font-bold'>Hardware & Networking</h2>
								<small>2007</small>
								<p>From: Jetking Infotrain Ltd - Vadodara.</p>
								<span className='left-container-arrow'></span>
							</div>
						</div>
						<div className="edu-container right-container">
							<FaGraduationCap className='edu-icon' />
							<div className="edu-text-box">
								<h2 className='font-bold'>Web Developer</h2>
								<small>2009</small>
								<p>From: Digital Learning Institute Pvt. Ltd - Vadodara.</p>
								<span className='right-container-arrow'></span>
							</div>
						</div>
					</div>
				</section>
				<section className='skills-section mb-[-50px] lg:pt-[80px] md:pt-[80px] xl:pt-[80px]' data-aos="fade-right" data-aos-anchor-placement="top-bottom" id='skills'>
					<div className='skills-container'>
						<div className='section-title text-center'>
							<div className='greendot'></div>
							<div className='left-line'></div>
							<h2 className='text-[24px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Main Skills</h2>
							<div className='right-line'></div>
							<div className='greendot'></div>
						</div>
						<div className='skill-items'>
							<div className='skill-item'>
								<div className='skill-info'>
									<p>Website Audit</p>
									<p>98%</p>
								</div>
								<div className='progress-line' data-percent='99%'>
									<span style={{ width: '98%' }}></span>
								</div>
							</div>
							<div className='skill-item'>
								<div className='skill-info'>
									<p>Technical SEO</p>
									<p>97%</p>
								</div>
								<div className='progress-line' data-percent='97%'>
									<span style={{ width: '97%' }}></span>
								</div>
							</div>
							<div className='skill-item'>
								<div className='skill-info'>
									<p>Google Analytics</p>
									<p>98%</p>
								</div>
								<div className='progress-line' data-percent='98%'>
									<span style={{ width: '98%' }}></span>
								</div>
							</div>
							<div className='skill-item'>
								<div className='skill-info'>
									<p>Search Console</p>
									<p>95%</p>
								</div>
								<div className='progress-line' data-percent='95%'>
									<span style={{ width: '95%' }}></span>
								</div>
							</div>
							<div className='skill-item'>
								<div className='skill-info'>
									<p>Screaming Frog SEO Spider</p>
									<p>95%</p>
								</div>
								<div className='progress-line' data-percent='95%'>
									<span style={{ width: '95%' }}></span>
								</div>
							</div>
							<div className='skill-item'>
								<div className='skill-info'>
									<p>Competitor Research</p>
									<p>92%</p>
								</div>
								<div className='progress-line' data-percent='99%'>
									<span style={{ width: '92%' }}></span>
								</div>
							</div>
							<div className='skill-item'>
								<div className='skill-info'>
									<p>Keyword Research</p>
									<p>99%</p>
								</div>
								<div className='progress-line' data-percent='99%'>
									<span style={{ width: '99%' }}></span>
								</div>
							</div>
							<div className='skill-item'>
								<div className='skill-info'>
									<p>Paid Campaigns</p>
									<p>65%</p>
								</div>
								<div className='progress-line' data-percent='65%'>
									<span style={{ width: '65%' }}></span>
								</div>
							</div>
							<div className='skill-item'>
								<div className='skill-info'>
									<p>SMO</p>
									<p>70%</p>
								</div>
								<div className='progress-line' data-percent='70%'>
									<span style={{ width: '70%' }}></span>
								</div>
							</div>
							<div className='skill-item'>
								<div className='skill-info'>
									<p>On-Page Optimization</p>
									<p>99%</p>
								</div>
								<div className='progress-line' data-percent='99%'>
									<span style={{ width: '99%' }}></span>
								</div>
							</div>
							<div className='skill-item'>
								<div className='skill-info'>
									<p>HTML/CSS</p>
									<p>98%</p>
								</div>
								<div className='progress-line' data-percent='98%'>
									<span style={{ width: '98%' }}></span>
								</div>
							</div>
							<div className='skill-item'>
								<div className='skill-info'>
									<p>Content Optimization</p>
									<p>99%</p>
								</div>
								<div className='progress-line' data-percent='99%'>
									<span style={{ width: '99%' }}></span>
								</div>
							</div>
							<div className='skill-item'>
								<div className='skill-info'>
									<p>Off-Page Optimization</p>
									<p>90%</p>
								</div>
								<div className='progress-line' data-percent='99%'>
									<span style={{ width: '90%' }}></span>
								</div>
							</div>
							<div className='skill-item'>
								<div className='skill-info'>
									<p>SEO Tools</p>
									<p>95%</p>
								</div>
								<div className='progress-line' data-percent='99%'>
									<span style={{ width: '95%' }}></span>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* ------------------------------ Extra Skills Section ------------------------------ */}
				<section className='skills-section mb-[-80px] pt-[20px]' data-aos="fade-right" data-aos-anchor-placement="top-bottom">
					<div className='skills-container'>
						<div className='section-title text-center'>
							<div className='greendot'></div>
							<button className='text-[20px] font-bold px-5 rounded-full text-white bg-gradient-to-r from-pink-500 to-violet-500' {...getToggleProps({
								onClick: () => setExpanded((prevExpanded) => !prevExpanded),
							})}
							>
								{isExpanded ? 'Hide More Skills' : 'Show More Skills'}</button>
							<div className='greendot'></div>
						</div>
						<div className='skill-items'{...getCollapseProps()}>
							<div className='skill-item'>
								<div className='skill-info'>
									<p>WordPress</p>
									<p>80%</p>
								</div>
								<div className='progress-line' data-percent='80%'>
									<span style={{ width: '80%' }}></span>
								</div>
							</div>
							<div className='skill-item'>
								<div className='skill-info'>
									<p>React JS</p>
									<p>50%</p>
								</div>
								<div className='progress-line' data-percent='50%'>
									<span style={{ width: '50%' }}></span>
								</div>
							</div>
							<div className='skill-item'>
								<div className='skill-info'>
									<p>VUE JS</p>
									<p>55%</p>
								</div>
								<div className='progress-line' data-percent='55%'>
									<span style={{ width: '55%' }}></span>
								</div>
							</div>
							<div className='skill-item'>
								<div className='skill-info'>
									<p>Photoshop</p>
									<p>90%</p>
								</div>
								<div className='progress-line' data-percent='90%'>
									<span style={{ width: '90%' }}></span>
								</div>
							</div>
							<div className='skill-item'>
								<div className='skill-info'>
									<p>CorelDraw</p>
									<p>80%</p>
								</div>
								<div className='progress-line' data-percent='80%'>
									<span style={{ width: '80%' }}></span>
								</div>
							</div>
							<div className='skill-item'>
								<div className='skill-info'>
									<p>ChatGPT</p>
									<p>75%</p>
								</div>
								<div className='progress-line' data-percent='75%'>
									<span style={{ width: '75%' }}></span>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* ------------------------------ End Extra Skills Section ------------------------------ */}
				<section className='pt-[70px] pb-10' id='experience'>
					<WorkExperience />
				</section>
				<section className='pb-20 flex justify-center items-center w-[100%] h-[100vh]' id='contact'>
					<Contact/>
				</section>
			</div>
			<Footer />
		</>
	)
}

export default About