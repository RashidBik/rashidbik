import React, { useState, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar'
import { AnimatePresence } from 'framer-motion';
import ErrorBoundry from './ErrorBoundry';

import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Portfolio from './Components/Project/Portfolio';
import Testimonials from './Components/Testimonials/Testimonials';
import Header from './Components/Header/Header';
import Brands from './Components/Brands';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import BacKTotop from './Components/BacKTotop';
import Show from './Show';

 let bar = 0

function App() {
 const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dark, setDark] = useState(false);
  // const [mobile, setMobile] = useState(false);
  ///////////////////////////////
 const [progress, setProgress] = useState(bar)
   
/////////////////////////////////
  const handlDark = () =>
  {
    setDark(!dark)
  }
 
  useEffect(() =>
  {
   setLoading(true)
  setTimeout(() => {
    setLoading(true)
        setProgress(bar++)
        setLoading(false)
  }, 1000);
   
 }, []);
  return (
   <AnimatePresence >
      {loading ?  <LoadingBar
                    color='#f11946'
                    progress={progress}
                    onLoaderFinished={() => setProgress(0)}
                  />
      :(       
        // <div stylreade={ mobile ? { width: '420px', height:'700px', overflow: 'scroll'}: {}}>
        <div className="scroll-smooth select-none hover:scroll-auto " style={dark ? { background: '#21212c', color: 'white', borderColor: 'white' }:{ background: '#f4dfdf', color: 'black', borderColor: 'black' }}>
        <div onClick={handlDark} className='fixed z-40 bg-red-600 px-2 -translate-x-5 top-80 rotate-90 font-bold'> #{dark ? 'Light':'Dark'}</div>
         {/* <div onClick={()=> setMobile(!mobile)} className='hidden md:fixed md:block right-0 top-80 font-bold text-teal-50'>responsive</div> */}
          <Show show={ show } setShow={ setShow } />
          <ErrorBoundry><Header/></ErrorBoundry>
          <ErrorBoundry><Home setShow={setShow} /></ErrorBoundry>
          <ErrorBoundry><Brands /></ErrorBoundry>
          <ErrorBoundry><About /></ErrorBoundry>
          <ErrorBoundry><Skills /></ErrorBoundry>
          <ErrorBoundry><Portfolio /></ErrorBoundry>
          <ErrorBoundry><Services /></ErrorBoundry>
          <ErrorBoundry><Testimonials /></ErrorBoundry>
          <ErrorBoundry><Contact /></ErrorBoundry>
          <ErrorBoundry><Footer /></ErrorBoundry>
          <ErrorBoundry><BacKTotop /></ErrorBoundry>
        </div>
        // </div>
       ) 
       }
   </AnimatePresence>
  );
}

export default App;  

