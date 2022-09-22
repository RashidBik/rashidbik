import { motion } from 'framer-motion'
import React from 'react'

const loadingVariants = {
    hidden: {
        x: -20,
        y: 0,
    },
    visible: {
        x: 20,
        y: -30,
        transition: {
            x: {
                yoyo: Infinity,
                duration: 0.5,
                when: 'beforeChildren',
            },
            y:{
                yoyo: Infinity,
                duration: 0.25,
                ease: 'easeOut',
                when: 'beforeChildren',
            },
        }
    }
} 
const loading2Variants = {
    hidden: {
        x: -20,
        y: 0,
    },
    visible: {
        x: 20,
        transition: {
            x: {
                yoyo: Infinity,
                duration: 0.5,
            },
           
        }
    }
} 
const Loader = () => {
  return (
    <div className='absolute w-full h-[100vh] pt-60 bg-black z-40'>
        <motion.div
        variants={loadingVariants}
        initial="hidden"
        animate="visible"
        className='w-[10px] h-[10px] m-auto bg-white rounded-full shadow-md  shadow-red-300'>
        
        </motion.div>
        <motion.div
        variants={loading2Variants}
        initial="hidden"
        animate="visible"
        className='w-[16px] h-[4px] m-auto bg-red-500 rounded-md '>
        
        </motion.div>
     </div>

  )
}

export default Loader
