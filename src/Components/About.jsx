import React from 'react'
import image from '../assets/img/rashid1.jpg';
import Navbar from './about/Navbar';

function About() {
  return (
    <section className='py-12 lg:py-32 ' id='about'>
        <div className='border flex flex-col justify-center items-center '>
      <div className=' flex justify-between p-2 w-full bg-slate-200 '>
        <span>logo</span>
        <div className='flex flex-col text-center pt-4 pb-6'>
          <p>Hi, I’m RashidBik</p>
          <p className='text-accent text-xl font-black font-lobster'>I build and develop digital products</p>
        </div>
        <span className='hidden md:flex'>logo</span>
      </div>
     <div className='p-2 rounded-full border -translate-y-10 border-red-700 '>
     <div className='border rounded-full h-20 w-20 bg-[url("../src/assets/react.svg")] bg-cover '>
      </div>
     </div>
      <div className=' px-6'>
        <div className='border text-center border-red-900 rounded-md p-2'>
          <div className='flex justify-between p-4'>
            <span>$</span>
            <p>Rashid Bik</p>
            <span>*</span>
          </div>
          <p className=''>
                I don’t like to define myself by the work I’ve done. I define myself by the work I want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself, and do interesting things that matter.
          <a className=' text-red-500' href='src/assets/ressume/Rashidbik-Ressume2022.pdf' download='src/assets/ressume/Rashidbik-Ressume2022.pdf' title='(pdf 49.8kb)'> My resume </a>more in the PDF attached bellow
        </p>
        </div>
      </div>
    </div>
    </section>
  )
}

export default About
