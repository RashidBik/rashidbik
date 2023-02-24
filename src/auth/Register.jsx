import React, { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const Register = ({ handlauth }) =>
{
    const [show, setShow] = useState(true);
    const name = useRef();
    const email = useRef();

    const handlSubmit = (e) =>
    {
        e.preventDefault()
        setShow(false)
        handlauth(name.current.value)
  
    }
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
      className='fixed top-0 left-0 w-[100%] h-[100%] !opacity-90 bg-accent z-30'
      >
    <motion.div
      variants={popUpVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='bg-white m-auto w-[500px] h-[600px] rounded-xl '>
        <p className='text-center py-6'>
            <h1 className='text-3xl m-4 mb-6 font-black'>Wellcome Dear</h1>
          <form onSubmit={handlSubmit}>
            <div className=' bg-red-500'>
                <input type="text"  ref={name} placeholder='Your Name' required="true" />
            </div>
            <div className=' bg-yellow-400'>
               <input type="email"  ref={email}  placeholder='Your Email' />
            </div>
            <input
                className=' hover:border border-red-300 text-gray-50 py-1 px-4 rounded-lg bg-red-500 '
                type="submit" value='Join' />
          </form>
        </p>
    </motion.div>

      </motion.div>
      )
    }
     </AnimatePresence>
    </>
  )
}

export default Register
