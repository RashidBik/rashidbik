import React, { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Carton from './Carton';
import supabase from '../connection/env';
import human from "../assets/Madge-Waving.gif"

const Register = ({ handlauth }) =>
{
  const [show, setShow] = useState(true);
  const [isName, setIsName] = useState('');
  const [isEmail, setIsEmail] = useState('');
  const [bg, setBg] = useState('red');
  const [happy, setHappy] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

    const name = useRef();
    const email = useRef();

    const handlSubmit = async (e) =>
    {
      setLoading(true)
      e.preventDefault()
      const { data, error } = await supabase
          .from('user')
          .insert([
            { email: email.current.value, username: name.current.value },
          ])
          
      if (error) {
        setLoading(false)
      } else
      {
        setLoading(false)
        setShow(false)
        localStorage.setItem('username', name.current.value)
        handlauth()
      }

  
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
    const handleName = (e) =>
    {
      e.preventDefault();
      setBg('red')
      setIsName(e.target.value)
      if (isName.length > 1) {
        setBg('green')
      }
    }
    const handleEmail = (e) =>
      {
        e.preventDefault();
      
      setIsEmail(e.target.value)
    
        if (isEmail.includes(`@` && '.')) {
          setHappy(true)
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
      className='fixed top-0 left-0 w-[100%] h-[100%]  bg-gray-800 z-30'
      >
    <motion.div
      variants={popUpVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      className=' bg-yellow-400 m-auto w-[500px] h-[600px] rounded-xl '>
        <div>
          <div>
              <Carton />
          </div>
            <div className='p-4 '>
                 <form onSubmit={handlSubmit}>
                                      <div className='flex flex-col  py-2 px-16 rounded-xl'>
                                          <p className='text-left'>Name <span className='text-red-600'>*</span></p>
                <input className='p-2 rounded-lg' type="text"  ref={name} placeholder='Your Name' value={isName} onChange={handleName} required={true} />
            </div>
                                      <div className='flex flex-col  py-2 px-16 rounded-xl'>
                                          <p className='text-left'>Email</p>
               <input className='p-2 rounded-lg' type="email"  ref={email}  placeholder='Your Email' value={isEmail} onChange={handleEmail}  />
            </div>
                      <div className=' relative py-8'>
                        { happy ? <img className='h-40 absolute -rotate-90 right-0 bottom-8  ' src={human} alt="human with a flower" />: '' }
                        <input
                          className='text-lg text-gray-50 py-1 px-12 hover:animate-pulse rounded-lg border transition-all ' style={{background: `${bg}`}}
                          type="submit" value='Join' />
                      </div>
                  </form>   
                </div>     
         
        </div>
    </motion.div>

      </motion.div>
      )
    }
     </AnimatePresence>
    </>
  )
}

export default Register
