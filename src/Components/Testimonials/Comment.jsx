import React, { useEffect, useRef, useState } from 'react';
import {AiOutlineArrowRight} from 'react-icons/ai'
import Register from '../../auth/Register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TypeAnimation } from 'react-type-animation';
import supabase from '../../connection/env';


const Comment = () =>{
  const [auth, setAuth] = useState(false);
  const [comment, setComment] = useState(false);
  const [comments, setComments] = useState();
  const [propname, setPropname] = useState('');
  const commentRef = useRef();

  const [error, setError] = useState();
  const [formError, setFormError] = useState('');
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState();

  useEffect(() =>
  {
    async function fetchData()
    {
      setLoading(true);
      let { data, error } = await supabase
        .from('comment')
        .select('*')

      if (error)
      {
        setError(error)
        setLoading(false)
      } else
      {
        setError(null)
        setComments(data)
        setLoading(false)
      }
  
    }
    fetchData();  
    
    if (localStorage.getItem('username')) {
      setAuth(true)
    }
  }, [auth]);

  const postComment = async () =>
  {
   setLoading(true);
    const { data, error } = await supabase.from('comment').insert({
      text: commentRef.current.value,
      username: localStorage.getItem('username')
      });
      if (error)
      {
        setFormError(error)
        setLoading(false)
      } else
      {
        setFormError(null)
        setMsg(data)
        setLoading(false)
      }    
  }

  const handlauth = () =>
  {
    let props = localStorage.getItem('username')
      toast.success(`Hey Thank You ${props}`, {
            position: toast.POSITION.TOP_RIGHT
        });
    setAuth(true);  

  }

  return (
    <div className='p-4 lg:pl-40 lg:pr-80 flex flex-col '>
      <ToastContainer />
      { comment ? (
        <div>
               {
        auth ? (
            <form onSubmit={postComment}>
              <div className='px-20 py-8 flex flex-col items-center '>
                  <textarea className=' flex flex-col w-full h-11 rounded-xl p-4 bg-inherit outline-none hover:placeholder:text-lg ' type="text" ref={commentRef} placeholder='write your comment here...' required/>  
                  <input type="submit" value="Add" className=' hover:border border-green-300 py-1 w-40 rounded-lg bg-green-500 mt-4'/>
                  <input type="reset" value="Cancel" className=' hover:border border-red-300 py-1 w-40 rounded-lg bg-red-500 mt-4'/>
              </div>
            </form>
            ): (
                <div className='bg-red-800 '>
                  <Register handlauth={handlauth} />
              </div>
            )
        }
      </div>
      ): (
           <div className='w-full flex py-4'>
              <button onClick={()=> setComment(true)}
                className=' hover:border border-red-300 text-gray-50 py-2 px-4 rounded-lg bg-red-500 hover:animate-pulse'>write comment</button>
                 <TypeAnimation
                sequence={[
                  'Write your comment...',
                  1000 
                ]}
                wrapper="div"
                cursor={true}
                repeat={1}
                style={{ fontSize: '1em' }}
                className="mx-2 border-l border-red-500 px-4 bg-inherit pt-2 opacity-50"
              />
            </div> 
      )}
      <div>
        {
         comments && comments.map((item) => (
            <div key={item.id}>
                  <div className='border rounded-xl flex items-center    '>
          <div className='p-4'>
            <div className='border w-10 h-10 rounded-full bg-green-300 '></div>
          </div>
          <div className=' relative first-letter:p-2 flex '>
            <p className='  font-black pr-2 border-r border-gray-400'>{item.username}</p>
                  <p className='px-2'> { item.text }</p>
                  <small className=' absolute -top-4 left-4 text-[8px]'>{ item.created_at }</small>
          </div>
      </div>
      {/* replaiessssssss */}
          { item.reply ? (
              <div className='p-4 flex items-center text-xs'> <small><AiOutlineArrowRight /></small>
          <div className='p-4'>
                  <div className='border w-10 h-10 rounded-full bg-red-300 '></div> 
          </div>
          <div className='p-2 flex '>
                  <p className='font-black px-2 border-r border-gray-400'>Rashid</p>
                  <p className='px-2'> { item.reply }</p>
                  </div></div>):
              ''}    
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Comment
