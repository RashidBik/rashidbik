import React, { useState } from 'react'
import { TypeAnimation } from 'react-type-animation';
import Projects from './Projects'


const Portfolio = () => {
  const [vis, setVis] = useState(false);
  return (
    <section id='portfolio' 
    className='py-12 lg:py-32 '>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <div onClick={()=> setVis(!vis)}  className='section-title before:content-portfolio 
          relative before:ablolute before:opacity-40
          before:-top-[2rem] before:-left-3/4 
          before:hidden before:lg:block text-3xl font-black 
          font-lobster
          transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 
          '><h1 className='p-12'>My Latest Work </h1>
            <div className='border  md:w-[600px] md:h-[300px] opacity-50 p-2 bg-[url("src/assets/img/wallpaper.jpg")] flex justify-center items-center transition-all' style={{height: vis ? '50px': '' }}>
              <img style={{height: vis ? '40px': ''}} className='h-20 hover:h-[69px] hover:animate-pulse transition-all ' src="src/assets/purplearrowright.gif" alt="" />
               <h6 className='text-sm  cursor-pointer '> {vis ? 'close the window':'Click To See Some'}
              </h6>
            </div>
          </div>
        <p>

        </p>
        </div>
        <div className=' '>
          {
            vis ? (
             <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 hover:border border-inherit p-4 duration-300 rounded-lg'>
               <Projects />
             </div>
            ): (
              <div className='text-center p-4 flex flex-col justify-center align-middle items-center '>
                <TypeAnimation
                sequence={[
                  'I always try to develop fully feature app with high perfermance',
                  1000 
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '1em' }}
                className="pt-2"
                  />
                  <div className='relative flex'>
                  <div className='border-b hover:-rotate-6 hover:animate-ping duration-75 rotate-6 opacity-50 border-gray-500 rounded-full before:border-t before:border-inherit before:absolute before:top-10 before:rounded-xl md:before:w-20 md:before:h-20 md:w-20 md:h-10 before:w-10 before:h-10 w-10 h-10 '></div>
                  <div className='border-b hover:-rotate-6 hover:animate-ping duration-75 rotate-6 opacity-50 border-gray-500 rounded-full before:border-t before:border-inherit before:absolute before:top-10 before:rounded-xl md:before:w-20 md:before:h-20 md:w-20 md:h-10 before:w-10 before:h-10 w-10 h-10 '></div>
                  <div className='border-b hover:-rotate-6 hover:animate-ping duration-75 rotate-6 opacity-50 border-gray-500 rounded-full before:border-t before:border-inherit before:absolute before:top-10 before:rounded-xl md:before:w-20 md:before:h-20 md:w-20 md:h-10 before:w-10 before:h-10 w-10 h-10 '></div>
                  <div className='border-b hover:-rotate-6 hover:animate-ping duration-75 rotate-6 opacity-50 border-gray-500 rounded-full before:border-t before:border-inherit before:absolute before:top-10 before:rounded-xl md:before:w-20 md:before:h-20 md:w-20 md:h-10 before:w-10 before:h-10 w-10 h-10 '></div>
                  <div className='border-b hover:-rotate-6 hover:animate-ping duration-75 rotate-6 opacity-50 border-gray-500 rounded-full before:border-t before:border-inherit before:absolute before:top-10 before:rounded-xl md:before:w-20 md:before:h-20 md:w-20 md:h-10 before:w-10 before:h-10 w-10 h-10 '></div>
                  <div className='border-b hover:-rotate-6 hover:animate-ping duration-75 rotate-6 opacity-50 border-gray-500 rounded-full before:border-t before:border-inherit before:absolute before:top-10 before:rounded-xl md:before:w-20 md:before:h-20 md:w-20 md:h-10 before:w-10 before:h-10 w-10 h-10 '></div>
                  <div className='border-b hover:-rotate-6 hover:animate-ping duration-75 rotate-6 opacity-50 border-gray-500 rounded-full before:border-t before:border-inherit before:absolute before:top-10 before:rounded-xl md:before:w-20 md:before:h-20 md:w-20 md:h-10 before:w-10 before:h-10 w-10 h-10 '></div>
                  <div className='border-b hover:-rotate-6 hover:animate-ping duration-75 rotate-6 opacity-50 border-gray-500 rounded-full before:border-t before:border-inherit before:absolute before:top-10 before:rounded-xl md:before:w-20 md:before:h-20 md:w-20 md:h-10 before:w-10 before:h-10 w-10 h-10 '></div>
                  <div className='border-b hover:-rotate-6 hover:animate-ping duration-75 rotate-6 opacity-50 border-gray-500 rounded-full before:border-t before:border-inherit before:absolute before:top-10 before:rounded-xl md:before:w-20 md:before:h-20 md:w-20 md:h-10 before:w-10 before:h-10 w-10 h-10 '></div>
                  {/* <div className='border-b hover:-rotate-6 hover:animate-ping duration-75 rotate-6 opacity-50 border-gray-500 rounded-full w-10 h-10 md:w-20 md:h-20 '></div> */}
</div>
                </div>
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Portfolio

