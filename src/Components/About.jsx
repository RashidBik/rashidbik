import React from 'react'
import image from '../assets/img/rashid1.jpg';

function About() {
  return (
    <section className='py-12 lg:py-32 '>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-2 lg:gap-24'>
          <img className='object-cover h-[540px] md:w-[500px] md:mx-auto
          lg:mx-0 rounded-2xl' src={image} />
          <div className='flex flex-col items-center text-center lg:items-start
          lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl md:text-4xl font-medium lg:font-extrabold mb-3  
              before:content-about relative 
              before:absolute before:opacity-40 
              before:-top[2rem] before:hidden 
              before:lg:block font-black  font-lobster'> About
              </h2>
              <p className='mb-2 text-accent text-xl font-black font-lobster'>I build and develop digital products</p>
              <hr className='mb-4 opacity-5' />
              <p className='mb-2 indent-6 text-left font-madi text-[20px]'>
              <b>Hi, I’m RashidBik.</b> I'm a multi-talented human with over 5 years of experiences in wide range of design disciplines.
editor, front-end developer, photographer, reporter and more.
I don’t like to define myself by the work I’ve done. I define myself by the work I want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself, and do interesting things that matter.
Fueled by high energy levels and boundless enthusiasm, I’m easily inspired and more then willing to follow my fascinations wherever they take me. I’m passionate, expressive, multi-talented spirit with a natural ability to entertain and inspire. I’m never satisfied to just come up with ideas. Instead I have an almost impulsive need to act on them.
My abundant energy fuels me in the pursuit of many interests, hobbies, areas of study and artistic endeavors. I’m a fast learner, able to pick up new skills and juggle different projects and roles with relative ease.
I like to develop expertise in a number of areas over the course of my life and career. My personality type is ENTJ. I currently work remotely with a selected freelance client base and are open for new opportunities.
You can read more about my biography, experience, skills, education and much more in the PDF attached bellow:
              </p>
            </div>
           <a href='src/assets/ressume/Rashidbik-Ressume2022.pdf' download='src/assets/ressume/Rashidbik-Ressume2022.pdf'>
            <button className='py-4 px-7 font-medium text-white flex items-center justify-center rounded-sm hover:bg-accent-hover transition-all btn-md bg-accent 
            hover:bg-accent-hover transition-all'>
              My resume
            </button>
            (pdf 49.8kb)
           </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
