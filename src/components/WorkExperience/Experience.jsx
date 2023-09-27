import './experience.css'
import { FaBriefcase } from 'react-icons/fa6'
import { useCollapse } from 'react-collapsed'
import { useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'

function WorkExperience() {
  Aos.init({ duration: 2000 });
  const [isExpanded1, setExpanded1] = useState(false);
  const [isExpanded2, setExpanded2] = useState(false);
  const [isExpanded3, setExpanded3] = useState(false);
  const [isExpanded4, setExpanded4] = useState(false);
  const [isExpanded5, setExpanded5] = useState(false);

  const { getCollapseProps: getCollapseProps1, getToggleProps: getToggleProps1 } = useCollapse({ isExpanded: isExpanded1 });
  const { getCollapseProps: getCollapseProps2, getToggleProps: getToggleProps2 } = useCollapse({ isExpanded: isExpanded2 });
  const { getCollapseProps: getCollapseProps3, getToggleProps: getToggleProps3 } = useCollapse({ isExpanded: isExpanded3 });
  const { getCollapseProps: getCollapseProps4, getToggleProps: getToggleProps4 } = useCollapse({ isExpanded: isExpanded4 });
  const { getCollapseProps: getCollapseProps5, getToggleProps: getToggleProps5 } = useCollapse({ isExpanded: isExpanded5 });
  return (
    <section data-aos="fade-left" data-aos-anchor-placement="top-bottom" className='skills-section'>
      <div className='skills-container'>
        <div className='section-title text-center'>
          <div className='greendot'></div>
          <div className='left-line'></div>
          <h2 className='text-[24px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Experience</h2>
          <div className='right-line'></div>
          <div className='greendot'></div>
        </div>
      </div>
      <div className="experience-timeline">
        <div className="experience-container experience-left-container">
          <FaBriefcase className='experience-icon' />
          <div className="experience-text-box">
            <div className='flex justify-between items-center'>
              <h2 className='font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>ITCC Digital</h2>
              <small>2021 - 2023</small>
            </div>
            <div className='flex justify-between items-center'>
              <h3>Designation:</h3>
              <h3>SEO Specialist</h3>
            </div>
            <span className='button'
              {...getToggleProps1({
                onClick: () => setExpanded1((prevExpanded1) => !prevExpanded1),
              })}
            >
              {isExpanded1 ? 'Read Less' : 'Read More'}
            </span>
            <p className='text-gray-400 text-justify m-2' {...getCollapseProps1()}>I've been part of this company's team as an SEO Specialist and have worked on over 20 different website projects. These projects covered a wide range of fields, such as home improvement, online courses, universities, catering, travel, law firms, and many others. I've consistently secured top search engine rankings for most of these projects by putting my research and analytical skills to good use.<br/><br/>Additionally, I am responsible for closely monitoring website's analytics and conducting in-depth analysis of organic search performance.</p>
            <span className='experience-left-container-arrow'></span>
          </div>
        </div>
        <div className="experience-container experience-right-container">
          <FaBriefcase className='experience-icon' />
          <div className="experience-text-box">
            <div className='flex justify-between items-center'>
              <h2 className='font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Cosmetize</h2>
              <small>2019 - 2021</small>
            </div>
            <div className='flex justify-between items-center'>
              <h3>Designation:</h3>
              <h3>SEO Team Lead</h3>
            </div>
            <span className='button'
              {...getToggleProps2({
                onClick: () => setExpanded2((prevExpanded2) => !prevExpanded2),
              })}
            >
              {isExpanded2 ? 'Read Less' : 'Read More'}
            </span>
            <p className='text-gray-400 text-justify m-2' {...getCollapseProps2()}>In my position at this company, I was responsible for developing effective strategies to make our brand known and appreciated because our website was brand new. Additionally, I created and promoted our brand on popular social media platforms such as YouTube, Twitter, and Facebook.</p>
            <span className='experience-right-container-arrow'></span>
          </div>
        </div>
        <div className="experience-container experience-left-container">
          <FaBriefcase className='experience-icon' />
          <div className="experience-text-box">
            <div className='flex justify-between items-center'>
              <h2 className='font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Swiss Pack Pvt. Ltd</h2>
              <small>2016 - 2019</small>
            </div>
            <div className='flex justify-between items-center'>
              <h3>Designation:</h3>
              <h3>SEO Team Lead</h3>
            </div>
            <span className='button'
              {...getToggleProps3({
                onClick: () => setExpanded3((prevExpanded3) => !prevExpanded3),
              })}
            >
              {isExpanded3 ? 'Read Less' : 'Read More'}
            </span>
            <p className='text-gray-400 text-justify m-2' {...getCollapseProps3()}>Swiss Pack is a leading manufacturer specializing in the production of bags and pouches. As a company with a global presence, we have sister companies located in multiple countries, including Singapore, Clifton, UAE, Canada, and more.<br/><br/>I have had the privilege of overseeing and managing the websites for Swiss Pack in all these countries. This involves a comprehensive approach, encompassing tasks such as keyword research, competitor analysis, and content optimization. What sets my strategy apart is my dedication to tailoring content to each country's language and aligning it with the specific search engine results pages (SERP) to ensure maximum effectiveness. My commitment to providing a localized and optimized online experience reflects my dedication to serving diverse markets and audiences.</p>
            <span className='experience-left-container-arrow'></span>
          </div>
        </div>
        <div className="experience-container experience-right-container">
          <FaBriefcase className='experience-icon' />
          <div className="experience-text-box">
            <div className='flex justify-between items-center'>
              <h2 className='font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Office Beacon LLC</h2>
              <small>2013 - 2016</small>
            </div>
            <div className='flex justify-between items-center'>
              <h3>Designation:</h3>
              <h3>SEO Analyst</h3>
            </div>
            <span className='button'
              {...getToggleProps4({
                onClick: () => setExpanded4((prevExpanded4) => !prevExpanded4),
              })}
            >
              {isExpanded4 ? 'Read Less' : 'Read More'}
            </span>
            <p className='text-gray-400 text-justify m-2' {...getCollapseProps4()}>My resposibilityes to identifying opportunities for growth and areas where I can enhance my project's website. This includes evaluating the website structure, internal linking strategies, and optimizing the content. Additionally, I am responsible for closely monitoring website's analytics and conducting in-depth analysis of organic search performance. My goal is to keep a watchful eye on these key aspects and provide detailed reports to help us make informed decisions for improvement.</p>
            <span className='experience-right-container-arrow'></span>
          </div>
        </div>
        <div className="experience-container experience-left-container">
          <FaBriefcase className='experience-icon' />
          <div className="experience-text-box">
            <div className='flex justify-between items-center'>
              <h2 className='font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Octexa System</h2>
              <small>2008 - 2013</small>
            </div>
            <div className='flex justify-between items-center'>
              <h3>Designation:</h3>
              <h3>SEO Specialist</h3>
            </div>
            <span className='button'
              {...getToggleProps5({
                onClick: () => setExpanded5((prevExpanded5) => !prevExpanded5),
              })}
            >
              {isExpanded5 ? 'Read Less' : 'Read More'}
            </span>
            <p className='text-gray-400 text-justify m-2' {...getCollapseProps5()}>I have been worked on our compani'sI have been actively involved in enhancing our company's website by focusing on improving keyword rankings and identifying opportunities to enhance its overall performance. During my time at the company, I've been engaged in various small-scale projects, including activities such as Article Submissions, Social Bookmarking, Blog Creation and Submission, Web Directory Submission, Local Business Listing, etc.</p>
            <span className='experience-left-container-arrow'></span>
          </div>
        </div>
      </div>
      <div data-aos="fade-right" className='skills-container'>
        <div className='section-title text-center'>
          <div className='greendot'></div>
          <div className='left-line w-[25%]'></div>
          <h2 className='text-[24px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Roles & Responsibilities</h2>
          <div className='right-line w-[25%]'></div>
          <div className='greendot'></div>
        </div>
        <div className="details">
          <p className='my-5 text-gray-400 text-[18px] text-justify'>As an SEO Team Lead, I oversee and manage a team of SEO professionals responsible for improving the search engine visibility and organic traffic of a website. Here are some key responsibilities and duties that I have done in this position:</p>
          <div data-aos="zoom-in" className='card-wrapper'>
            <div className='card shadow-md'>
              <h2>Strategy Development</h2>
              <p>Collaborate with stakeholders, such as marketing managers and content creators, to develop and implement effective SEO strategies that align with the overall business goals and objectives.</p>
            </div>
          </div>
          <div data-aos="zoom-in" className='card-wrapper'>
            <div className='card shadow-md'>
              <h2>Team Management</h2>
              <p>Lead a team of SEO specialists, providing guidance, direction, and support.</p>
            </div>
          </div>
          <div data-aos="zoom-in" className='card-wrapper'>
            <div className='card shadow-md'>
              <h2>Website Audit</h2>
              <p>I conduct a thorough analysis of a website's performance, structure, and content to identify areas that require improvement for enhanced search engine optimization results. This process involves examining critical factors including site speed, mobile-friendliness, on-page and off-page SEO elements, user experience, and technical issues. Conducting such assessments is essential to ensure optimal website performance and improved search engine rankings.</p>
            </div>
          </div>
          <div data-aos="zoom-in" className='card-wrapper'>
            <div className='card shadow-md'>
              <h2>Technical SEO</h2>
              <p>Work closely with web developers and designers to address technical issues which can impact website performance and search visibility. This may include optimizing website speed, improving crawl ability and indexing, implementing structured data markup, and fixing broken links.</p>
            </div>
          </div>
          <div data-aos="zoom-in" className='card-wrapper'>
            <div className='card shadow-md'>
              <h2>Competitor Research</h2>
              <p>As an SEO professional skilled in competitor research, I have the ability to identify competitors within a specific industry or niche. It empowers me to stay ahead of the competition, refine my strategies, and ultimately improve the website's search engine rankings and online visibility.</p>
            </div>
          </div>
          <div data-aos="zoom-in" className='card-wrapper'>
            <div className='card shadow-md'>
              <h2>Keyword Research</h2>
              <p>Conduct comprehensive keyword research to identify relevant search terms and phrases that can drive targeted organic traffic to the website.</p>
            </div>
          </div>
          <div data-aos="zoom-in" className='card-wrapper'>
            <div className='card shadow-md'>
              <h2>On-Page Optimization</h2>
              <p>Ensure that website pages are properly optimized for search engines. This includes optimizing meta tags, headings, URLs, and internal linking structures. Collaborate with content creators to optimize content for relevant keywords and user intent.</p>
            </div>
          </div>
          <div data-aos="zoom-in" className='card-wrapper'>
            <div className='card shadow-md'>
              <h2>Performance Tracking and Reporting</h2>
              <p>Use SEO tools and analytics platforms to monitor key performance indicators (KPIs), such as organic traffic, keyword rankings, conversion rates, and user engagement metrics. Generate regular reports and provide insights on performance trends and opportunities for improvement.</p>
            </div>
          </div>
          <div data-aos="zoom-in" className='card-wrapper'>
            <div className='card shadow-md'>
              <h2>Stay Updated with Industry Trends</h2>
              <p>Stay abreast of the latest SEO trends, algorithm updates, and industry best practices. Continuously evaluate and test new SEO techniques and tools to improve the effectiveness of SEO strategies.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkExperience