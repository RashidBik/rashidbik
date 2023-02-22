import React from 'react'
import TestimonialSlider from './TestimonialSlider'
import Comment from './Comment'

function Testimonials() {
  return (
    <section id='testimonials' className='py-4 px-2 md:px-10 flex flex-col justify-center'>
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
        <TestimonialSlider />
      </div>
    </section>
  )
}

export default Testimonials
