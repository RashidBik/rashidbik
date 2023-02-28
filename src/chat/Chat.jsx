import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import ChatBox from './ChatBox'


const Chat = ({ show, setShow }) =>
{
    // const [show, setShow] = useState(
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
      className='fixed top-0 bg-none left-0 w-[100%] h-[100%] z-30 '
      >
    <div className='relative w-full h-full  '>
    <motion.div
      variants={popUpVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    className=' bg-[#5a7b4a4d] text-black border-8 border-double border-lime-500 border-opacity-20 absolute right-10 bottom-32 text-right w-[400px] h-[400px] rounded-2xl'>
        <div className='px-2 h-full flex flex-col '>
            <header className='flex justify-between border-y-2 rounded-l-full p-1'>
                <div className='flex items-center '><div className='border w-10 h-10 rounded-full '></div><p className='px-4'>Bik</p></div>                        
                <button onClick={ () => setShow(false) } className='font-bold px-2 text-red-600 '>back</button>
            </header>                        
                    <div className=' overflow-auto h-[290px]'>
                      <ChatBox />
                    </div>    
             <div className=' absolute bottom-0  w-full px-4 py-2'>
              <footer className='flex border-t p-1  border-lime-400 '>
                  <input className='outline-none p-1 bg-[#1f8b252b]' type="text" placeholder='write text...'/>
                  <button className='pl-4 text-[#076711] font-bold'>send</button>
              </footer>
          </div>         
        </div>
       
    </motion.div>                    
  </div>

      </motion.div>
      )
    }
     </AnimatePresence>
    </>
  )
}

export default Chat
