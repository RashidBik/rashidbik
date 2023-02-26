import {useState} from 'react'
import { RiTaskFill } from 'react-icons/ri';
import { MdSecurity, MdMobileFriendly, MdAutoAwesomeMotion } from "react-icons/md";
import { IoLogoPwa } from "react-icons/io5";
import { SiChatbot, SiServerless } from "react-icons/si";
import { BsPalette2 } from "react-icons/bs";
import { BiUserVoice } from "react-icons/bi";
import { DiResponsive } from "react-icons/di";
import { CgDarkMode } from "react-icons/cg";

const BlogPage = () =>{
  const [sec, setSec] = useState(false);
  const [pen, setPen] = useState(false);
  const [tsk, setTsk] = useState(false);
  const [mob, setMob] = useState(false);
  const [mot, setMot] = useState(false);
  const [pwa, setPwa] = useState(false);
  const [bot, setBot] = useState(false);
  const [ser, setSer] = useState(false);
  const [pal, setPal] = useState(false);
  const [voi, setVoi] = useState(false);
  const [drk, setDrk] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleBlur = (e) => {
    setSec(false)
    setPen(false)
    setTsk(false)
    setMob(false)
    setMot(false)
    setPwa(false)
    setBot(false)
    setSer(false)
    setPal(false)
    setVoi(false)
    setDrk(false)
  }
   
  return (
    <header>
      <div onClickCapture={handleBlur} className='p-2 flex flex-col justify-center items-center' >
        <div className='flex'>
                <div style={{visibility: visible ? '': 'hidden'}} className='p-2  relative flex hover:animate-bounce'>
             <div className={sec ? 'iconbefore justify-start' : 'iconbefore border-accent hover:border hover:before:border  before:border-accent '}>
              <div onClick={ () => setSec(true) } className={sec ? 'iconself translate-y-7 md:w-[400px] md:h-[96px] rounded-b-xl rounded-r-xl justify-start items-start ': 'iconself'}>
                <MdSecurity  />      
              </div>
             </div>
            {
            sec &&
            <div onClick={()=> setSec(false)} className=' absolute z-30 px-4 md:pl-6 py-2 md:w-96 bg-gray-500 ' >
                <p className=' font-black text-red-900'>Security</p>
                <p className='text-xs '>Security for protection of computer systems and networks from information disclosure, theft, damage or disruption by Analyzing possible attacks and monitoring suspicious activities </p>
             </div> 
            }
          
        </div>
            <div style={{visibility: visible ? '': 'hidden'}} className='p-2  relative flex hover:animate-bounce'>
             <div className={pen ? 'iconbefore justify-start' : 'iconbefore border-accent hover:border hover:before:border  before:border-accent  '}>
              <div onClick={()=> setPen(true)} className={pen ? 'iconself translate-y-7 md:w-[400px] md:h-[96px] rounded-b-xl rounded-r-xl justify-start items-start ': 'iconself'}>
                <SiServerless  />                   
              </div>
             </div>
            {
            pen &&
            <div onClick={()=> setPen(false)} className=' absolute z-30 px-4 md:pl-6 py-2 md:w-96 bg-gray-500' >
                <p className=' font-black text-red-900'>Serverless Architecture</p>
                <p className='text-xs '>This model allows us to replace regular servers with cloud to manage machine resource consumption. serverless architecture helps to keep the internet more sustainable. </p>
             </div> 
            }
          
        </div>
            <div style={{visibility: visible ? '': 'hidden'}} className='p-2  relative flex hover:animate-bounce'>
             <div className={tsk ? 'iconbefore justify-start' : 'iconbefore border-accent hover:border hover:before:border  before:border-accent '}>
              <div onClick={()=> setTsk(true)} className={tsk ? 'iconself translate-y-7 md:w-[400px] md:h-[96px] rounded-b-xl rounded-r-xl justify-start items-start ': 'iconself'}>
                <RiTaskFill  />                 
              </div>
             </div>
            {
            tsk &&
            <div onClick={()=> setTsk(false)} className=' absolute z-30 px-4 md:pl-6 py-2 md:w-96 bg-gray-500' >
                <p className=' font-black text-red-900'>SEO</p>
                <p className='text-xs '>It aims to improve your website’s position in search results pages. Remember, the higher the website is listed, the more people will see it.</p>
             </div> 
            }
          
        </div>
            <div style={{visibility: visible ? '': 'hidden'}} className='p-2  relative flex hover:animate-bounce'>
             <div className={mob ? 'iconbefore justify-start' : 'iconbefore border-accent hover:border hover:before:border  before:border-accent '}>
              <div onClick={()=> setMob(true)} className={mob ? 'iconself translate-y-7 md:w-[400px] md:h-[96px] rounded-b-xl rounded-r-xl justify-start items-start ': 'iconself'}>
                <IoLogoPwa  />                   
              </div>
             </div>
            {
            mob &&
            <div onClick={()=> setMob(false)} className=' absolute z-30 px-4 md:pl-6 py-2 md:w-96 bg-gray-500' >
                <p className=' font-black text-red-900'>Progressive Web Apps (PWAs)</p>
                <p className='text-xs '>Lorem ipsum dolor sit, amet consectetur laboriosam ea? Accusamus nemo ad fuga est autem voluptate ducimus numquam laborum dolorem. Eius.</p>
             </div> 
            }
          
        </div>
    </div>

        <div  className='flex'>
                 <div style={{visibility: visible ? '': 'hidden'}} className='p-2  relative flex hover:animate-bounce'>
             <div className={mot ? 'iconbefore justify-start' : 'iconbefore border-accent hover:border hover:before:border  before:border-accent '}>
              <div onClick={()=> setMot(true)} className={mot ? 'iconself translate-y-7 md:w-[400px] md:h-[96px] rounded-b-xl rounded-r-xl justify-start items-start ': 'iconself'}>
                <MdAutoAwesomeMotion  />                   
              </div>
             </div>
            {
            mot &&
            <div onClick={()=> setMot(false)} className=' absolute z-30 px-4 md:pl-6 py-2 md:w-96 bg-gray-500' >
                <p className=' font-black text-red-900'>Motion UI</p>
                <p className='text-xs '>Motion UI is a new design approach that makes digital products more intuitive and user friendly.</p>
             </div> 
            }
          
        </div>
            <div style={{visibility: visible ? '': 'hidden'}} className='p-2  relative flex hover:animate-bounce'>
             <div className={pwa ? 'iconbefore justify-start' : 'iconbefore border-accent hover:border hover:before:border  before:border-accent '}>
              <div onClick={()=> setPwa(true)} className={pwa ? 'iconself translate-y-7 md:w-[400px] md:h-[96px] rounded-b-xl rounded-r-xl justify-start items-start ': 'iconself'}>
                <BiUserVoice  />                   
              </div>
             </div>
            {
            pwa &&
            <div onClick={()=> setPwa(false)} className=' absolute z-30 px-4 md:pl-6 py-2 md:w-96 bg-gray-500' >
                <p className=' font-black text-red-900'>Optimized Voice Search</p>
                <p className='text-xs '>With more AI-enabled devices, voice recognition saves our time and helps us multitask.</p>
             </div> 
            }
          
        </div>
            <div style={{visibility: visible ? '': 'hidden'}} className='p-2  relative flex hover:animate-bounce'>
             <div className={bot ? 'iconbefore justify-start' : 'iconbefore border-accent hover:border hover:before:border  before:border-accent '}>
              <div onClick={()=> setBot(true)} className={bot ? 'iconself translate-y-7 md:w-[400px] md:h-[96px] rounded-b-xl rounded-r-xl justify-start items-start ': 'iconself'}>
                <BsPalette2  />                   
              </div>
             </div>
            {
            bot &&
            <div onClick={()=> setBot(false)} className=' absolute z-30 px-4 md:pl-6 py-2 md:w-96 bg-gray-500' >
                <p className=' font-black text-red-900'>Single-Page Application</p>
                <p className='text-xs '>A single-page application can be defined as a kind of app that doesn’t need to reload itself while working in a browser. Single-page applications have more capability to hold the attention of users, as they seem to operate quickly</p>
             </div> 
            }
          
        </div>
     </div>
        <div className='flex'>
                <div style={{visibility: visible ? '': 'hidden'}} className=' p-2 relative flex hover:animate-bounce'>
             <div className={ser ? 'iconbefore justify-start' : 'iconbefore border-accent hover:border hover:before:border  before:border-accent '}>
              <div onClick={()=> setSer(true)} className={ser ? 'iconself translate-y-7 md:w-[400px] md:h-[96px] rounded-b-xl rounded-r-xl justify-start items-start ': 'iconself'}>
                <MdMobileFriendly  />                   
              </div>
             </div>
            {
            ser &&
            <div onClick={()=> setSer(false)} className=' absolute z-30 px-4 md:pl-6 py-2 md:w-96 bg-gray-500' >
                <p className=' font-black text-red-900'>Accelerated Mobile Pages</p>
                <p className='text-xs '>Implementing AMP lets companies save costs on UX and attract users with low internet speeds. </p>
             </div> 
            }
          
        </div>
            <div style={{visibility: visible ? '': 'hidden'}} className='p-2  relative flex hover:animate-bounce'>
             <div className={pal ? 'iconbefore justify-start' : 'iconbefore border-accent hover:border hover:before:border  before:border-accent '}>
              <div onClick={()=> setPal(true)} className={pal ? 'iconself translate-y-7 md:w-[400px] md:h-[96px] rounded-b-xl rounded-r-xl justify-start items-start ': 'iconself'}>
                <SiChatbot  />                   
              </div>
             </div>
            {
            pal &&
            <div onClick={()=> setPal(false)} className=' absolute z-30 px-4 md:pl-6 py-2 md:w-96 bg-gray-500' >
                <p className=' font-black text-red-900'>AI Chatbots</p>
                <p className='text-xs '>Chatbots generally provide quick answers in an emergency and are quick to resolve complaints.</p>
             </div> 
            }
          
        </div>
            <div style={{visibility: visible ? '': 'hidden'}} className='p-2  relative flex hover:animate-bounce'>
             <div className={voi ? 'iconbefore justify-start' : 'iconbefore border-accent hover:border hover:before:border  before:border-accent '}>
              <div onClick={()=> setVoi(true)} className={voi ? 'iconself translate-y-7 md:w-[400px] md:h-[96px] rounded-b-xl rounded-r-xl justify-start items-start ': 'iconself'}>
                <DiResponsive />                   
              </div>
             </div>
            {
            voi &&
            <div onClick={()=> setVoi(false)} className=' absolute z-30 px-4 md:pl-6 py-2 md:w-96 bg-gray-500' >
                <p className=' font-black text-red-900'>Responsive Websites</p>
                <p className='text-xs '>The technology helps solve a lot of problems, like improving user experience, and increasing the amount of time a user spends on a website</p>
             </div> 
            }
          
        </div>
            <div style={{visibility: visible ? '': 'hidden'}} className='p-2  relative flex hover:animate-bounce'>
             <div className={drk ? 'iconbefore justify-start' : 'iconbefore border-accent hover:border hover:before:border  before:border-accent '}>
              <div onClick={()=> setDrk(true)} className={drk ? 'iconself translate-y-7 md:w-[400px] md:h-[96px] rounded-b-xl rounded-r-xl justify-start items-start': 'iconself'}>
                <CgDarkMode  />                   
              </div>
             </div>
            {
            drk &&
            <div onClick={()=> setDrk(false)} className=' absolute z-30 px-4 md:pl-6 py-2 md:w-96 bg-gray-500' >
                <p className=' font-black text-red-900'>Dark Mode Standardization</p>
                <p className='text-xs '>The dark mode is a major consideration of every development today.</p>
             </div> 
            }
          
          </div>
      </div>
        </div>
    </header>
  )
}

export default BlogPage
