import { motion } from 'framer-motion'
import React from 'react'
import {socialIcon} from '../../data'


function SocialM() {


  return (
    <ul className='flex space-x-6'>
      {socialIcon.map((item, index) => {
        return (
          <motion.li 
          initial={{rotate: 20}}
          whileHover={{rotate: 0}}
          transition={{type: 'spring', stiffness: 150}}
          className='flex justify-center 
          items-center text-white' key={index}>
            <a className='text-base' href={item.href} >
              {item.icon}
            </a>
          </motion.li>
        )
      })}
    </ul>
  )
}

export default SocialM
