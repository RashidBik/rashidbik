import React from 'react'
import image from '../assets/img/rashid2.jpg';
import logo from '../assets/img/RB_PNG.png';
import LineChart from './about/LineChart';

function About() {
  return (
    <>
    <section className='py-2' id='about'>
        <div className='border flex flex-col justify-center items-center '>
      <div className=' flex justify-between p-2 w-full bg-slate-200 md:p-12 md:text-2xl '>
        <span className='h-16 w-16 bg-contain ' style={{backgroundImage: `url(${logo})`}}></span>
        <div className='flex flex-col text-center pt-4 pb-6'>
          <p>Hi, I’m RashidBik</p>
          <p className='text-accent text-xl font-black font-lobster'>I build and develop digital products</p>
        </div>
        <span className='hidden md:flex bg-[url()]'>logo</span>
        {/* <img src="../assets/img/RB_PNG.png" alt="" /> */}
      </div>
     <div className=' rounded-full border -translate-y-10 md:-translate-y-16 border-red-700  '>
     <div className='border rounded-full h-20 w-20 md:h-60 md:w-60 bg-cover ' style={{backgroundImage: `url(${image})`}}>
      </div>
     </div>
    {/* //////////// */}
    <div className='grid md:grid-cols-2 md:px-16 md:py-8'>
    
      <div className=' px-6'>
          <div className='border text-center border-red-900 rounded-md'>
            <div className='flex justify-between p-4 bg-slate-300 text-xl md:text-2xl'>
              <span>$</span>
              <p>Rashid Bik</p>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </span>
            </div>
            <div className='p-2 md:text-2xl md:p-8'>
              <div>
                  I don’t like to define myself by the work I’ve done.
                  I define myself by the work I want to do. Skills can be taught, 
                  personality is inherent. I prefer to keep learning, continue 
                  challenging myself, and do interesting things that matter.
                  <a className=' text-red-500' href='src/assets/ressume/Rashidbik-Ressume2022.pdf' download='src/assets/ressume/Rashidbik-Ressume2022.pdf' title='(pdf 49.8kb)'> My resume </a>more in the PDF attached bellow
                </div>
                <div className='px-2 py-4'>
                  <button className=' w-full py-2 rounded-md bg-red-500'>Support $5</button>
                </div>
            </div>
          </div>
        </div>
        <div className='py-8 px-4'>
          <LineChart />
        </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default About
