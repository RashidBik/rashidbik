import React from 'react'
import heart from "../assets/heart.gif"

const Carton = () => {
  return (
    <div className='flex align-baseline  p-4 '>
      <img width="200px" height="200px" src={heart} alt="" />
      <p className=' text-inherit text-4xl font-bold pt-28 '>Wellcome</p>
    </div>
  )
}

export default Carton
