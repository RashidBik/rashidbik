import { useState } from 'react';
import image from '../assets/img/rashid2.jpg';
import logo from '../assets/img/rashidbik.svg';
import LineChart from './about/LineChart';

function About() {
  const [like, setLike] = useState(false);
  const [likeNum, setLikeNum] = useState(10);


  return (
    <>
    <section className='py-2' id='about'>
        <div className='border flex flex-col justify-center items-center '>
      <div className=' flex justify-between p-2 w-full md:p-12 md:text-2xl '>
        <span className='h-16 w-16 bg-contain bg-no-repeat' style={{backgroundImage: `url(${logo})`}}></span>
        <div className='flex flex-col text-center pt-4 pb-6'>
          <p>Hi, I’m RashidBik</p>
          <p className=' text-xl font-black font-lobster'>I build and develop digital products</p>
        </div>
        <span className='hidden md:flex bg-[url()]'>logo</span>
        {/* <img src="../assets/img/RB_PNG.png" alt="" /> */}
      </div>
     <div className=' rounded-full border -translate-y-10 md:-translate-y-16   '>
      <div className='border rounded-full h-20 w-20 md:h-60 md:w-60 bg-cover ' style={{backgroundImage: `url(${image})`}}></div>
     </div>
     <p className='flex'> 
      <p>{likeNum}</p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="w-6 h-6">
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
      </svg>
     </p>
    {/* //////////// */}
    <div className='grid md:grid-cols-2 md:px-16 md:py-8'>
    
      <div className=' px-6'>
          <div className='border text-center border-red-900 rounded-md'>
            <div className='flex justify-between p-4 bg-slate-300 text-xl md:text-2xl'>
              <span>$</span>
              <p>Rashid Bik</p>
              <span onClick={()=> setLike(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
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
                  <button className=' w-full py-2 rounded-md bg-red-500'>
                  <a href='https://www.buymeacoffee.com/abdurashidu'>Support $5</a>
                  </button>
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
