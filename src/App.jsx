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
import { Context } from './context/auth';

 let bar = 0

function App()
{
 
  const [auth, setAuth] = useState(false);
 const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [dark, setDark] = useState(false);
  const [user, setUser] = useState(null);
  // const [mobile, setMobile] = useState(false);
  ///////////////////////////////
 const [progress, setProgress] = useState(0)
   
/////////////////////////////////
  
  
  const handlDark = () =>
  {
    setDark(!dark)
  }
 
  useEffect(() =>
  {
    setUser(localStorage.getItem('user'));
          
  }, [user]);
  

//  
  const [buffer, setBuffer] = React.useState(10);

  const progressRef = React.useRef(() => {});
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
        setLoading(false)
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

















  return (
    <AnimatePresence >
      {loading ?  <LoadingBar
                    color='green'
                    progress={progress}
                    onLoaderFinished={() => setProgress(0)}
                  />
      :(       
        // <div stylreade={ mobile ? { width: '420px', height:'700px', overflow: 'scroll'}: {}}>
        <div className="scroll-smooth select-none hover:scroll-auto " style={dark ? { background: '#21212c', color: 'white', borderColor: 'white' }:{ background: '#f4dfdf', color: 'black', borderColor: 'black' }}>
        <div onClick={handlDark} className='fixed z-40 bg-red-600 px-2 -translate-x-5 top-80 rotate-90 font-bold'> #{dark ? 'Light':'Dark'}</div>
         {/* <div onClick={()=> setMobile(!mobile)} className='hidden md:fixed md:block right-0 top-80 font-bold text-teal-50'>responsive</div> */}
          <Show show={ show } setShow={ setShow } />
            <Context.Provider value={{auth, setAuth, user}}>
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
          </Context.Provider>
        </div>
        // </div>
       ) 
       }
   </AnimatePresence>
  );
}

export default App;  

