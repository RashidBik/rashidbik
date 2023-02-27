import React from 'react'
import TestimonialSlider from './TestimonialSlider'
import Comment from './Comment'

function Testimonials() {
  return (
    <section id='testimonials' className='py-4 px-2 md:px-10 flex flex-col justify-center '>
      <div className=''>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title 
              before:content-testimonials relative
              before:absolute before:opacity-40
              before:top-[2rem] before:-left-64 
              before:hidden before:lg:block text-3xl font-black mb-6 font-lobster'>
            What Other People Say
          </h2>
          <p className='subtitle font-bold text-md mb-6'>
            leave your comments here
          </p>
          <div className='py-4 w-full'>
             <Comment />
          </div>
        </div>
        <div className='flex border bg-blue-200 shadow-md '>
          <div className='relative w-96 md:w-[600px] lg:w-[800px] md:p-4 lg:px-11'>
              <img className=' absolute bottom-0 ' src="src/assets/Madge-with-hearts.gif" alt="" />
          </div>
        <TestimonialSlider />
        </div>
      </div>
    </section>
  )
}

export default Testimonials
