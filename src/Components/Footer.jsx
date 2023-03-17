import React from 'react'
import { socialIcon } from '../data'
import logo from "../assets/img/rashidbik.svg";


const Footer = () => {
  return (
    <footer className='py-4'>
      <div className='container mx-auto'>
        <div className='flex flex-col
            space-y-6 lg:space-y-0 items-center justify-between'>
            <div className='flex flex-row lg:gap-6'>
                {socialIcon.map((item, index) => {
                    const {href, icon} = item;
                    return(
                        <a className=' text-base mx-4'
                        href={href} key={index} > {icon}</a>
                    )
                })}
            </div>
            <div className='font-black font-[cursive]'>
            <img src={logo}
                className='w-[90px]'
          />            </div>
            <p className=''>
                &copy; 2022 All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
