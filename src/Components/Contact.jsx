import React, { useRef } from 'react'
import {contact} from '../data'
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact() {
  const form = useRef();
     const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_71a5e8a', 'template_faj5edi', form.current, 'MM724zbCsMzXBRs_J')
        .then((result) => {
          toast.success('Successfuly was sent !', {
            position: toast.POSITION.TOP_RIGHT
        });
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
  <>
    <div>
       <ToastContainer />
    <section className='p-6' 
    id='contact'>
      <div className='container mx-auto' >
        <div className='flex flex-col items-center text-center' >
          <h2 className='section-title before:content-contact
                relative before:absolute before:opacity-40
                before:-top-7 before:-left-40 before:hidden
                before:lg:block text-3xl
                lg:mb-2 font-bold font-lobster'>
Contact Me
          </h2>
          <p className='subtitle mb-4 lg:mb-6 font-lobster '>
            Ask Me A Question Or Hire Me Right Now
          </p>
        </div>
        <div className='flex flex-col lg:qap-x-8 p-10 md:p-2 lg:flex-row'>
        <div className='flex flex-1 flex-col items-start
         space-y-8 mb-12 lg:mb-0 lg:pt-2'>
            {contact.map((item, index) => {
              const {icon, title, subtitle, description } = item;
              return (
                <div className='flex flex-col lg:flex-row gap-x-4' key={index}> 
                 <div className='rounded-sm w-14 p-4 flex items-start hover:animate-pulse
                justify-center text-2xl'>{icon} 
                </div>
                <div className=''>
                   <h4 className='font-body text-xl mb-1'>{title}</h4>
                   <p className='mb-1'>{subtitle}</p>
                   <p className='font-normal'>{description}</p>
                </div>
              </div>
              )
            })}
          
        </div>
        <form
             ref={form} 
             onSubmit={sendEmail} 
             className='space-y-8 w-full max-w-[780px] 
             rounded-md shadow p-6 md:shadow-gray-300 '
        >
            <h1 
            className='font-black'>
              Leave a message
            </h1>
              <div className='flex gap-8'>
                <input 
                  type='text' 
                  name='user_name'
                  placeholder='Your name' 
                  className='h-[60px] 
                  border border-gray-400
                  outline-none pl-6 w-full font-body 
                  rounded-xl focus:outline focus:outline-1 bg-inherit
                  focus:outline-accent hover:animate-pulse '
                  />
                <input 
                  type='email' 
                  name='user_email'
                  placeholder='Your Email' 
                  className='border border-gray-400 h-[60px] 
                  outline-none pl-6 w-full font-body 
                  rounded-xl focus:outline focus:outline-1  bg-inherit
                  focus:outline-accent hover:animate-pulse'
                  />
              </div>
              <textarea 
                 name='message'
                 className='border border-gray-400 resize-none w-full rounded-xl
                 outline-none p-6 h-[200px] 
                 focus:outline focus:outline-1  bg-inherit
                 focus:outline-accent hover:animate-pulse' 
                 placeholder='your message'>
              </textarea> 
              <button 
                type='submit'
                className='py-4 px-7 font-medium border rounded-xl bg-inherit
                flex items-center justify-center 
                transition-all 
                btn-lg hover:animate-pulse'>
                Send message
              </button>
            </form>
        </div>
      </div>
    </section>
</div>
</>
  )
}

export default Contact
