import React from 'react'

const Navbar = () => {
  return (
    <div className='border flex flex-col justify-center items-center '>
      <div className=' flex justify-between p-2 w-full bg-slate-100 '>
        <span>logo</span>
        <p>text</p>
        <span>logo</span>
      </div>
      <div className='border rounded-full bg-red-500 h-20 w-20 -translate-y-3 '>
        <img className='h-20 w-20 border' src="" alt="" />
      </div>
      <div className='text-center text-xl bg-white'>text</div>
    </div>
  )
}

export default Navbar
