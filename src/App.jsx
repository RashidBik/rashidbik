import React,{useState,useEffect} from 'react';
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
import Loader from './Components/Loader';
import { AnimatePresence } from 'framer-motion';
import ErrorBoundry from './ErrorBoundry';


function App() {
 const [show, setShow] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const [dark, setDark] = useState(false);
  const [mobile, setMobile] = useState(false);
  
  const handlDark = () =>
  {
    setDark(!dark)
  }
 useEffect(() => {
  setTimeout(() => {
    setIsLoad(true)
  }, 500);
 }, []);
  return (
   <AnimatePresence >
      {!isLoad ? <Loader />
      :(       
        // <div style={ mobile ? { width: '420px', height:'700px', overflow: 'scroll'}: {}}>
        <div className="scroll-smooth hover:scroll-auto " style={dark ? { background: '#21212c', color: 'white', borderColor: 'white' }:{ background: '#f4dfdf', color: 'black', borderColor: 'black' }}>
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
