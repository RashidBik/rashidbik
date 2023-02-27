import React, { useRef, useState } from 'react';
import {AiOutlineArrowRight} from 'react-icons/ai'
import Register from '../../auth/Register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TypeAnimation } from 'react-type-animation';

const commentsStore = [
  {name: 'Some One', img: '', msg: 'hey you are the best', repl: {name: "rashid", msg: 'Thank You so muuuuch'}}
]

const Comment = () =>{
  const [auth, setAuth] = useState(false);
  const [comment, setComment] = useState(false);
  const [comments, setComments] = useState(commentsStore);
  const [propname, setPropname] = useState('');
  const commentRef = useRef();

  // useEffect(() => {
  //   fetch('http://localhost/somewhrer')
  //     .then(res => res.json())
  //     .then(result => console.log(result))
  //     .catch(err => console.log(err));
 
  // }, []);

  const postComment = (e) =>
  {
    e.preventDefault();
    fetch({
      url: 'http://localhost/somehow',
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()).then(result => console.log(result)).catch(err => console.log(err));
  }
  
  const handlauth = (props) =>
  {
      toast.success(`Hey Thank You ${props}`, {
            position: toast.POSITION.TOP_RIGHT
        });
    setAuth(true);  
    setPropname(props)
  }
  const addComment = (e) =>
  {
    e.preventDefault();
    const newComment = { name: propname, img: '', msg: commentRef.current.value, repl: '' };
    setComments([...comments, newComment])
    commentRef.current.value = ''
    
  }
  return (
    <div className='p-4 lg:pl-40 lg:pr-80 flex flex-col '>
      <ToastContainer />
     
      { comment ? (
        <div>
               {
        auth ? (
            <form onSubmit={addComment}>
              <div className='px-20 py-8 flex'>
                  <textarea className='w-full h-11 rounded-xl p-4 bg-inherit outline-none hover:placeholder:text-lg ' type="text" ref={commentRef} placeholder='write your comment here...' required/>  
                  <input type="submit" value="Add" className=' hover:border border-red-300 py-1 px-4 rounded-lg bg-red-500 mt-4'/>
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
          comments.map((item, index) => (
            <div>
                  <div className='border rounded-xl flex items-center    '>
          <div className='p-4'>
            <div className='border w-10 h-10 rounded-full bg-green-300 '></div>
          </div>
          <div className='p-2 flex '>
            <p className='font-black pr-2 border-r border-gray-400'>{item.name}</p>
                  <p className='px-2'> { item.msg }</p>
          </div>
      </div>
      {/* replaiessssssss */}
          <div className='p-4 flex items-center text-xs'> <small><AiOutlineArrowRight/></small>
          <div className='p-4'>
                  { item.repl.name && <div className='border w-10 h-10 rounded-full bg-red-300 '></div> }
          </div>
          <div className='p-2 flex '>
                  <p className='font-black px-2 border-r border-gray-400'>{ item.repl.name }</p>
                  <p className='px-2'> { item.repl.msg }</p>
          </div>
        </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Comment
