import React, { useContext, useEffect, useState } from 'react'
import supabase from '../connection/env';
import { Context } from '../context/auth';

const ChatBox = () =>
{
  const {auth, user} = useContext(Context);
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

     useEffect(() =>{      
          async function fetchData()
                {
                  setLoading(true);
            let { data, error } = await supabase
              .from('messages')
                .select("*").eq('userid', user.id)
            
                    if (error) {
                      setError(error)
                        setData(null)
                      setLoading(false)
                    } else
                    {
                      setData(data)
                    }
                }

    fetchData();
    }, [auth]);
   
  
  return (
    <div className='relative overflow-auto '>
      { auth ? (
             <div  className="!overflow-y-scroll pb-20 ">
                  { data && data.map((chat, i) => 
                   <div key={i} className="">    
                  <p  className='rounded-2xl text-left mt-4 px-2 py-1 '> <span className='bg-[#63a167f2] p-2 rounded-2xl leading-relaxed '>{ chat.text }</span></p>
                <p  className='rounded-2xl mt-4 px-2 py-1'> <span className=' bg-[#ebebeba8] p-2 rounded-2xl leading-relaxed '>{ chat.response }</span></p>
                    </div>
                  ) }
              </div>  
        ): ''}      
    </div>
  )
}

export default ChatBox
