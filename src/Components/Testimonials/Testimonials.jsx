import React from 'react'
import TestimonialSlider from './TestimonialSlider'


function Testimonials() {

  return (
    <section id='Testimonials' className='mt-6'>
      <div className='container my-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title 
              before:content-testimonials relative
              before:absolute before:opacity-40
              before:top-[2rem] before:-left-64 
              before:hidden before:lg:block text-3xl font-black mb-6 font-lobster'>
            What Other People Say
          </h2>
          <p className='subtitle font-bold text-md text-accent mb-6'>
            I Love To Hear From You
          </p>
        </div>
        <TestimonialSlider />
      </div>
    </section>
  )
}

export default Testimonials
