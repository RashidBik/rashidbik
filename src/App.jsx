import React,{useState,useEffect} from 'react';
import './input.css';
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
 useEffect(() => {
  setTimeout(() => {
    setIsLoad(true)
  }, 3000);
 }, []);
  return (
   <AnimatePresence >
      {!isLoad ? <Loader />
      :(       
     <div className="bg-white dark:bg-gray-900 scroll-smooth hover:scroll-auto ">
         <Show show={show} setShow={setShow} />
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
       ) 
       }
   </AnimatePresence>
  );
}

export default App;
