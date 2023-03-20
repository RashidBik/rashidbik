import React, { useEffect, useState } from 'react'
import supabase from '../connection/env';

const chats = [
    {
        you: 'hey how is it going?',
        me: 'I am good Thank you',
    },
    {
        you: 'hey how is it going?  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, vero. Quo modi nihil veritatis magnam totam mollitia molestias enim nesciunt natus, libero maiores iste nemo, cupiditate nulla distinctio expedita praesentium? ',
        me: 'I am good Thank you',
    },
        {
        you: 'hey how is it going?         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, vero. Quo modi nihil veritatis magnam totam mollitia molestias enim nesciunt natus, libero maiores iste nemo, cupiditate nulla distinctio expedita praesentium? ',
        me: 'I am good Thank you',
    }
]
const ChatBox = () =>
{
  
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

    useEffect(() =>{      
          async function fetchData()
                {
                  setLoading(true);
            let { data, error } = await supabase
              .from('messages')
              .select('*');
            
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
    }, []);
  
  return (
    <div className='relative overflow-auto '>
          
              <div  className="!overflow-y-scroll pb-20 ">
                  { data && data.map((chat, i) => 
                   <div key={i} className="">    
                  <p  className='rounded-2xl text-left mt-4 px-2 py-1 '> <span className='bg-[#63a167f2] p-2 rounded-2xl leading-relaxed '>{ chat.text }</span></p>
                <p  className='rounded-2xl mt-4 px-2 py-1'> <span className=' bg-[#ebebeba8] p-2 rounded-2xl leading-relaxed '>{ chat.response }</span></p>
                    </div>
                  ) }
              </div>        
    </div>
  )
}

export default ChatBox
