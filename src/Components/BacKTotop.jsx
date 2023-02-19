import React, {useState, useEffect} from 'react';
import {animateScroll as scroll} from 'react-scroll';

const BacKTotop = () => {
    const [show, setShow] = useState(false);
   useEffect(() => {
        window.addEventListener('scroll',()=>{
            return window.scrollY > 3400 ? setShow(true)
            : setShow(false);
        })
    })

const scrollToTop = ()=>{
    scroll.scrollToTop();
}
  return (
    show ? (
        <button onClick={() => scrollToTop()}
                className='bg-accent w-12 h-12 hover:border-2 transition
               text-white rounded-full  fixed right-10 bottom-10 lg:right-24 lg:bottom-24 cursor-pointer
               flex justify-center items-center transation-all' >
          <svg xmlns="http://www.w3.org/2000/svg" 
               className="h-5 w-5" 
               viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" 
                  d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
         </svg>
        </button>
      ):(
        <button 
                className='bg-white w-12 h-12 border border-accent transition 
            text-white rounded-full  fixed right-10 bottom-10 lg:right-24 lg:bottom-24 cursor-pointer
            flex justify-center items-center transation-all' >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ac6b34" className="w-6 h-6 hover:h-8 hover:w-8">
                <path fill-rule="evenodd" d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 001.28.53l4.184-4.183a.39.39 0 01.266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0012 2.25zM8.25 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zm2.625 1.125a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clip-rule="evenodd" />
            </svg>
        </button>
      )
  )
}

export default BacKTotop
