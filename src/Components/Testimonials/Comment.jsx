import React, { useState } from 'react';
import {AiOutlineArrowRight} from 'react-icons/ai'

const Comment = () =>{
  const [auth, setAuth] = useState(false);
  
  const handlauth = (e) =>
  {
    setAuth(true);
  }
  return (
    <div className='p-4'>
      {
        auth ? (
        <form >
          <div className='p-4'>
              <textarea className='w-full h-11' type="text" name="" placeholder='write your comment here' />  
                            <button onClick={handlauth}
                className=' hover:border border-red-300 text-gray-50 py-1 px-4 rounded-lg bg-red-500 '>Save</button>
          </div>
      </form>
        ): (
            <div className='w-full flex py-4'>
              <button onClick={handlauth}
                className=' hover:border border-red-300 text-gray-50 py-2 px-4 rounded-lg bg-red-500 '>write comment</button>
              <input className='ml-4 border-l' type="text" disabled="true" placeholder='write your comment...' />
            </div>
        )
    }
        <div className='border rounded-xl flex items-center'>
          <div className='p-4'>
            <div className='border w-10 h-10 rounded-full bg-green-300 '></div>
          </div>
          <div className='p-2 flex '>
            <p className='font-black pr-2 border-r border-gray-400'>Some One</p>
            <p className='px-2'> hey you are the best</p>
          </div>
      </div>
      {/* replaiessssssss */}
          <div className='p-4 flex items-center text-xs'> <small><AiOutlineArrowRight/></small>
          <div className='p-4'>
            <div className='border w-10 h-10 rounded-full bg-red-300 '></div>
          </div>
          <div className='p-2 flex '>
            <p className='font-black pr-2 border-r border-gray-400'>Rashid bik</p>
            <p className='px-2'> Thank you so much</p>
          </div>
        </div>

    </div>
  )
}

export default Comment
