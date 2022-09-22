import React from 'react'
import { useState } from 'react';

const Project = ({item}) => {
  const [state, setState] = useState(false);
  const pictureNav = () => {
    setState(true)
  }
  const unPictureNav = () => {
    setState(false)
  }

  return (
    <div key={item.id} 
         className='flex flex-col items-center text-center '>
      <div className='mb-8 relative bg-gray-900 bg-clip-content rounded-2xl'>
        <img className='rounded-2xl shadow-md shadow-gray-700
         bg-gray-900 hover:bg-clip-content 
         hover:opacity-40' 
        src={item.image} alt='img' 
        onMouseOver={pictureNav}
        onMouseOut={unPictureNav}
        />
       {state && (<div 
       onMouseOver={pictureNav}
       onMouseOut={unPictureNav}

        className='absolute bottom-0 border-b rounded-b-2xl h-16 w-full bg-accent flex flex-col'>
          <a href={item.href} 
          className='text-2xl font-black hover:text-gray-100 font-lobster'>Lets See</a>
          <span className=''>{item.discription}</span>
        </div>
        )} 
     </div>
      <p className='capitalize text-accent text-sm' >
        {item.gategory}
        </p>
      <h3 className='text-2xl font-semibold capitalize'>
        {item.name}
        </h3>
    </div>
  )
}

export default Project
