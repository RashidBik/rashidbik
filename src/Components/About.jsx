import { useState } from 'react';
import image from '../assets/img/rashid2.jpg';
import logo from '../assets/img/rashidbik.svg';
import LineChart from './about/LineChart';
import { AiOutlineHeart } from "react-icons/ai"

function About() {
  const [like, setLike] = useState(false);
  const [likeNum, setLikeNum] = useState(10);


  return (
    <>
    <section className='py-2' id='about'>
        <div className='border flex flex-col justify-center items-center '>
      <div className=' flex justify-between p-2 w-full md:p-12 md:text-2xl bg-red-400 '>
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
     <div className='flex'> 
      <p>{likeNum}</p>
        <AiOutlineHeart />
     </div>
    {/* //////////// */}
    <div className='grid md:grid-cols-2 md:px-16 md:py-8'>
    
      <div className=' px-6'>
          <div className='border text-center border-red-900 rounded-md'>
            <div className='flex justify-between p-4 bg-slate-300 text-xl md:text-2xl'>
              <span>$</span>
              <p>Rashid Bik</p>
              <span onClick={()=> setLike(true)}>
                <AiOutlineHeart />
              </span>
            </div>
            <div className='p-2 md:text-2xl md:p-8'>
              <div className='text-xs'>
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
