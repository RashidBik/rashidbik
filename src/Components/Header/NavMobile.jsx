import React, {useState} from 'react'
import {navigation} from '../../data'
import SocialM from './SocialM'
import {motion} from 'framer-motion'
import {Link} from 'react-scroll'


function NavMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const circleVariants = {
    hidden: {
      scale: 0
    },
    visible: {
      scale: 180,
      transation: {
        type: 'spring',
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transation: {
        delay: 0.1,
      },
    },
  };

  return (
    <nav className='relative'
      onClickCapture={ () => setIsOpen(false) }
        >
      <div onClick={ () => setIsOpen(true) } 
        className='cursor-pointer ' >
        {/* ////////////menu Icon////////////// */}
          <svg 
          xmlns="http://www.w3.org/2000/svg" 
               className="h-7 w-7 " viewBox="0 0 20 20" 
               fill="currentColor">
            <path fillRule="evenodd" 
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" 
                  clipRule="evenodd"
                /> 
          </svg>
      </div>
      <motion.div 
        variants={circleVariants}
        initial='hidden' 
        animate={ isOpen ? 'visible' : 'hidden' }
    
        className='w-4 h-4 rounded-full bg-gray-900 opacity-70 hover:bg-accent-hover  fixed top-0 right-0'>
      </motion.div>

      <motion.ul 
        variants={ulVariants}
        initial='hidden' 
        animate={isOpen ? 'visible' : ''}
        className={`${isOpen ? 'right-0' : '-right-full'} fixed top-0 bottom-0 w-full 
        flex flex-col justify-center items-center 
        transation-all duration-300 overflow-hidden`}>
      {
        navigation.map((item, index) => {
          return (
            <li key={index} className='mb-8 '>
              <Link 
                 to={item.href}
                 smooth={true}
                 duration={1000}
                 offset={-70}
                 onClick={() => {setIsOpen(false)}}
                 className='text-xl cursor-pointer capitalize hover:text-accent'>
                {item.name}
             </Link>
            </li>
          )
        })
      }
      <SocialM />
     </motion.ul>
    </nav>
  )
}

export default NavMobile
