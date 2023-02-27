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
    <section className='pb-8' id='about'>
        <div className=' flex flex-col justify-center items-center '>
      {/* ///////////////////////////////////// */}
          <div className=' relative flex justify-start z-0 w-full md:text-2xl bg-inherit border-b shadow shadow-gray-500 md:px-4'>
            {/* <span className='h-56 w-56  border bg-cover bg-no-repeat' style={ { backgroundImage: `url(${ logo })` } }></span> */}
            <img className='h-10 md:h-40 md:pl-8' src={logo} alt="" />
        <div className='flex flex-col text-center pt-4 pb-6'>
          <p>Hi, I’m RashidBik</p>
          <p className=' text-xl font-black md:m-8 font-lobster'>I build and develop digital products</p>
        </div>
            <div className=' absolute w-40 md:w-80 lg:w-96 h-full right-0 '>
              <div className='relative '>
                <div className='lg:w-[51%] md:w-[61%] w-[69%] opacity-40 hover:animate-pulse h-16 md:h-20 absolute top-[14px] md:top-[42px] right-8 -rotate-[60deg] skew-x-[30deg] rounded bg-red-800 border-y flex justify-center pt-4'>
                  <p className='text-xl -skew-x-[30deg] md:text-4xl'>logo</p>
                </div>
              </div>
            </div>
      
        {/* ///////////////////////// */}
      </div>
     <div className=' rounded-full border -translate-y-10 md:-translate-y-16   '>
      <div className='border shadow shadow-gray-500 rounded-full h-20 w-20 md:h-60 md:w-60 bg-cover ' style={{backgroundImage: `url(${image})`}}></div>
     </div>
     <div className='flex pb-4 text-xl'> 
      <p className=''>{likeNum}</p>
        <AiOutlineHeart />
     </div>
    {/* //////////// */}
    <div className='grid md:grid-cols-2 md:px-16 md:py-8'>
    
      <div className=' px-6 md:px-4 xl:px-40 '>
          <div className='border md:py-6 text-center shadow-md shadow-orange-500 rounded-md'>
            <div className='flex justify-between p-4 border-b border-slate-300 text-xl rounded-md md:text-2xl'>
              <span>$</span>
              <p>Rashid Bik</p>
              <span onClick={()=> setLike(true)}>
                <AiOutlineHeart />
              </span>
            </div>
            <div className='p-2 md:text-2xl md:p-8'>
              <div className='text-xs md:text-xl py-4'>
                  I don’t like to define myself by the work I’ve done.
                  I define myself by the work I want to do. Skills can be taught, 
                  personality is inherent. I prefer to keep learning, continue 
                  challenging myself, and do interesting things that matter.
                  <a className=' text-red-400' href='src/assets/ressume/Rashidbik-Ressume2022.pdf' download='src/assets/ressume/Rashidbik-Ressume2022.pdf' title='(pdf 49.8kb)'> My resume </a>more in the PDF attached bellow
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
