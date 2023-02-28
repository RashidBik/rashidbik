import React from 'react'

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
const ChatBox = () => {
  return (
    <div className='relative overflow-auto '>
          
              <div  className="!overflow-y-scroll pb-20 ">
                  { chats && chats.map((chat, i) => 
                   <div key={i} className="">    
                  <p  className='rounded-2xl text-left mt-4 px-2 py-1 '> <span className='bg-[#63a167f2] p-2 rounded-2xl leading-relaxed '>{ chat.you }</span></p>
                <p  className='rounded-2xl mt-4 px-2 py-1'> <span className=' bg-[#ebebeba8] p-2 rounded-2xl leading-relaxed '>{ chat.me }</span></p>
                    </div>
                  ) }
              </div>
         
        
    </div>
  )
}

export default ChatBox
