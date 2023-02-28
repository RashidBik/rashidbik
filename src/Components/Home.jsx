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
    <section id='home' className='lg:h-[85vh] h-[78vh] flex items-center 
    lg:bg-cover bg-center bg-no-repeat  overflow-hidden
     bg-[url("./assets/img/wallpaper.jpg")]
     bg-fixed'
     
     >  
    <div className='w-full h-full  '> 
      <div className='container mx-auto h-full w-full '>
        <div className='flex items-center h-full pt-4 lg:pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-center '>
            <motion.div 
            variants={motionVarient}
            initial="hidden"
            animate="visible"
            className='lg:text-3xl lg:mt-20 mb-8 lg:mb-2 
            font-[cursive] '>
             
            </motion.div>
            <motion.h3 
            initial={{rotate: -2}}
            whileTap={{rotate: 2}}
            transition={{type: 'spring', stiffness: 400}}
            className='leading-[44px] md:leading-tight lg:text-8xl text-6xl text-center
            lg:leading-[1.2] font-madi font-bold md:tracking-[-2px] mix-blend-difference text-white'>
               FullStack <br /> Web Developer</motion.h3>
            <div className='pb-4 lg:pb-2 lg:pt-0 md: pt-6 md:pb-12 max-w-[480px] lg:text-lg font-madi
            text-center '>
              I
            <TypeAnimation
                sequence={[
                  'Love Coding',
                  1000,             
                  'Use Sveltekit and React', 
                  2000, 
                    'Enjoy my life', 
                  3000,
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '2em' }}
                className="bg-[#a1634bab]"
              />
            </div>
            <motion.button className='py-4 mt-2 px-7 sm:mb-6 font-medium 
            flex items-center justify-center 
            rounded-sm transition-all h-[48px]
            hover:bg-accent-hover bg-[#a1634bab] md:btn-lg
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
        </div>
      </div>
     </div>
    </section>
  )
}

export default Home
