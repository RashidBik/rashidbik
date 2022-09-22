import React from 'react'
import {socialIcon} from '../data'


const Footer = () => {
  return (
    <footer className='bg-accent py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col
            space-y-6 lg:space-y-0 items-center justify-between'>
            <div className='flex flex-row lg:gap-6'>
                {socialIcon.map((item, index) => {
                    const {href, icon} = item;
                    return(
                        <a className='text-white m-4 text-base'
                        href={href} key={index} > {icon}</a>
                    )
                })}
            </div>
            <div className='lg:m-4 font-black text-3xl font-[cursive]'>
            <img src="src/assets/img/RashidLogo.png"
                className='w-[140px]'
          />            </div>
            <p>
                &copy; 2022 All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
