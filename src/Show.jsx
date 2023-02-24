import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'


const Show = ({show, setShow}) => {
 const showModalVariants = {
     hidden: {
       opacity: 0
    },
    visible: {
        opacity:1
    }
 }
 const popUpVariants = {
    hidden: {
      opacity: 0,
      y: '-100vh',
   },
   visible: {
       opacity:1,
       y: '100px',
       transation: {
        delay: 0.3,
       }
   }
}
    return (
    <>
     <AnimatePresence>
      {show && (
      <motion.div 
      variants={showModalVariants}
      initial='hidden'
      animate='visible'
      className='fixed top-0 left-0 w-[100%] h-[100%] !opacity-80 bg-black z-30'
      >
    <motion.div
      variants={popUpVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='bg-white m-auto w-[400px] h-[200px] rounded-xl opacity-100'>
        <p className='text-center py-6'>
            <h1 className='text-3xl m-4 mb-6 font-black'>You want to hire me ?</h1>
            <div className='flex flex-row justify-around m-4 p-6 text-white'>
              <button className='font-bold bg-red-900 p-1 px-2 rounded-md  border-accent'>Yes</button>
              <button onClick={()=> setShow(false)} className='font-bold bg-blue-900 p-1 px-2 rounded-md  border-accent'>Cancel</button>
          </div>
        </p>
    </motion.div>

      </motion.div>
      )
    }
     </AnimatePresence>
    </>
  )
}

export default Show
