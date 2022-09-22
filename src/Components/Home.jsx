import { motion } from 'framer-motion'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';


function Home({setShow}) {
  const motionVarient = {
    hidden: {
      x: '-10vh',
    },
    visible: {
      x: '10vh',
      transition: {
        type: 'spring',
        damping: 9,
        when: 'beforeChildren'
      },
    }
  }


  return (
    <section id='section' className='lg:h-[85vh] h-[78vh] flex items-center 
    lg:bg-cover bg-center bg-no-repeat  overflow-hidden
     bg-[url("./assets/img/wallpaper.jpg")]
     bg-fixed
    '>  
    <div className='w-full h-full  '> 
      <div className='container mx-auto h-full w-full '>
        <div className='flex items-center h-full pt-4 lg:pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-center text-gray-100  '>
            <motion.p 
            variants={motionVarient}
            initial="hidden"
            animate="visible"
            className='lg:text-3xl lg:mt-20 mb-8 lg:mb-2 text-white
            font-[cursive] '>
              {/* Hey I Am Rashid Bik */}
            </motion.p>
            <motion.h3 
            initial={{rotate: -2}}
            whileTap={{rotate: 2}}
            transition={{type: 'spring', stiffness: 400}}
            className='leading-[44px] md:leading-tight lg:text-8xl text-6xl 
            lg:leading-[1.2] font-madi font-bold md:tracking-[-2px] mix-blend-difference'>
               Front End <br /> Developer</motion.h3>
            <p className='pt-4 pb-4 lg:pb-2 lg:pt-0 md: pt-6 md:pb-12 max-w-[480px] lg:text-lg font-madi
            text-center '>
              I
            <TypeAnimation
                sequence={[
                  'Love React And Tailwind',
                  1000,             
                  'Work With React And Tainlwind', 
                  2000, 
                  'Enjoy React With Tailwind', 
                  () => {
                    console.log('Done typing!'); 
                  }
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '2em' }}
                className="text-gray-500 lg:text-gray-100"
              />
            </p>
            <p className='font-madi'>You</p>
            <motion.button className='py-4 mt-2 px-7 sm:mb-6 font-medium 
            text-white flex items-center justify-center 
            rounded-sm transition-all h-[48px] bg-accent 
            hover:bg-accent-hover md:btn-lg
            transation-all font-lobster'
            initial={{scale: 1.9}}
            animate={{scale: 1.1}}
            transition={{type: 'spring', stiffness: 400}}
            onClick={() =>{
              setShow(true)
            }}
            >
              Work with me
            </motion.button>
          </div>
          {/* </div> */}
        </div>
      </div>
     </div>
    </section>
  )
}

export default Home
