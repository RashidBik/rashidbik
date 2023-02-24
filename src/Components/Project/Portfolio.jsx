import React, { useState } from 'react'
import Projects from './Projects'


const Portfolio = () => {
  const [vis, setVis] = useState(false);
  return (
    <section id='portfolio' 
    className='py-12 lg:py-32 '>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 onClick={()=> setVis(!vis)}  className='section-title before:content-portfolio 
          relative before:ablolute before:opacity-40
          before:-top-[2rem] before:-left-3/4 
          before:hidden before:lg:block text-3xl font-black 
          font-lobster
          transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 
          '>My Latest Work ^
          </h2>
        <p>

        </p>
        </div>
        <div className=' '>
          {
            vis ? (
             <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 hover:border border-inherit p-4 duration-300 rounded-lg'>
               <Projects />
             </div>
            ): (
              <div className='text-center p-3 '>
                  I always try to develop fully feature app with high perfermance   ####
              </div>
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Portfolio

