import { useState } from 'react'
// import {servicesData} from '../data'
import BlogPage from './blog/BlogPage';

function Services() {
  const [state, setState] = useState(false);

  return (
    <div id='services' 
    className='border-y py-6'>
      <div className=' container mx-auto'>
        <div className='flex flex-col items-center text-center' >
          <h2 className='section-titel 
          before:content-services relative
          before:absolute before:opacity-40
          before:-top-[2rem] before:-left-28
          before:hidden before:lg:block
          text-3xl font-black mb-6 font-lobster'>
              Key trending features for enterprise web apps
          </h2>
          <p className='flex flex-col items-center px-6 lg:px-28 lg:text-[28px]
           indent-8 pb-8 text-center font-madi'>
            As a fullstack developer I use ,
            defferint web Technologies to create feature rich and user friendly 
            web applications.
            I have a firm grasp of web development
             fundamentals and the overall user experience
             of a web app.
          </p>
        </div>
        <div className=' w-full p-4 flex flex-wrap justify-center align-middle items-center '>
            <BlogPage />
        </div>
      </div>
    </div>
  )
}

export default Services
