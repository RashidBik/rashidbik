import React, {useState, useEffect} from 'react';
import {animateScroll as scroll} from 'react-scroll';

const BacKTotop = () => {
    const [show, setShow] = useState(false);
   useEffect(() => {
        window.addEventListener('scroll',()=>{
            return window.scrollY > 700 ? setShow(true)
            : setShow(false);
        })
    })

const scrollToTop = ()=>{
    scroll.scrollToTop();
}
  return (
    show && (
        <button onClick={() => scrollToTop()}
                className='bg-accent w-12 h-12 hover:bg-accent-hover 
               text-white rounded-full  fixed right-24 bottom-24 cursor-pointer
               flex justify-center items-center transation-all' >
          <svg xmlns="http://www.w3.org/2000/svg" 
               className="h-5 w-5" 
               viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" 
                  d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
         </svg>
        </button>
      )
  )
}

export default BacKTotop
