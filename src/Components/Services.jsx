import { motion } from 'framer-motion';
import React from 'react'
import {servicesData} from '../data'


function Services() {
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
              What I Do For Clients
          </h2>
          <p className='flex flex-col items-center px-6 lg:px-28 lg:text-[28px]
           indent-8 pb-8 text-center font-madi'>
            As a front-end developer I use HTML,
             CSS, JavaScript and the most famouse library 
             react and also the handsome framework of css 
             Tailwind to build the client side of a website.
              They are responsible for building the visual
               elements on a page, such as the layout, buttons,
                menus, forms, and other features that users
                 will see and interact with when they visit
                  a webpage. In contrast with back-end
                   developers, who handle the business
                    logic and data management requirements
                     that power websites from behind the
                      scenes, I have a firm grasp of web design
                       fundamentals and the overall user experience
                        of a website.
          </p>
        </div>
        <div className='grid lg:grid-cols-4 gap-8'>
            {servicesData.map((service, index) => {
              const {icon, name, description} = service;
              return <div className='bg-gray-100 p-6 rounded-2xl shadow-md shadow-gray-400' key={index}>
                  <div className='text-accent rounded-sm 
                  w-12 h-12 flex justify-center items-center mb-4 text-[28px]'>
                      {icon}
                  </div>
                  <h4 className='text-xl font-medium'>{name}</h4>
                  <p className=''>{description}</p>
              </div>
            })}
        </div>
      </div>
    </div>
  )
}

export default Services
