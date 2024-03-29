import React,{useState, useEffect} from 'react'
import Nav from "./Nav";
import NavMobile from './NavMobile';
import SocialM from "./SocialM";

const Header = () => {
    const [bg, setBg] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll',() =>{
            return window.scrollY > 50 ? setBg(true) : setBg(false);
        })  
    });
    
  return (
    <header className={`${ bg ? 'bg-gray-900 text-gray-50 h-10' : 'h-24 text-white'}
    flex items-center fixed top-0 w-full z-20 transation-all duration-300`}>
      <div className='container mx-auto h-full flex items-center justify-between '>
        <a className='text-[30px] font-[cursive]' href='home'>
          Rashid Bik 
        </a>
        <div className='hidden lg:block '>
            <Nav />
        </div>
        <div className='hidden lg:block '>
            <SocialM />
        </div>
        <div className='lg:hidden'> 
            <NavMobile />
        </div>
      </div>
    </header>
  )
}

export default Header
