import {useState} from 'react'
import { RiPenNibFill,  RiTaskFill } from 'react-icons/ri';
import { MdSecurity, MdMobileFriendly, MdAutoAwesomeMotion } from "react-icons/md";
import { IoLogoPwa } from "react-icons/io5";
import { SiChatbot, SiServerless } from "react-icons/si";
import { BsPalette2 } from "react-icons/bs";
import { BiUserVoice } from "react-icons/bi";
// import { DiResponsive } from "react-icons/di";
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
                <div style={{visibility: visible ? '': 'hidden'}} className='p-2  relative flex'>
             <div className={sec ? 'iconbefore justify-start' : 'iconbefore border-green-300 hover:border hover:before:border  before:border-green-300 '}>
              <div onClick={ () => setSec(true) } className={sec ? 'iconself translate-y-7 md:w-[400px] md:h-[96px] rounded-b-xl rounded-r-xl justify-start items-start ': 'iconself'}>
                <MdSecurity  />      
              </div>
             </div>
            {
            sec &&
            <div onClick={()=> setSec(false)} className=' absolute z-30 px-4 md:pl-6 py-2 md:w-96 bg-slate-300' >
                <p className=' indent-3'>Improved Native Cybersecurity</p>
                <p className='text-xs '>Lorem ipsum dolor sit, amet consectetur laboriosam ea? Accusamus nemo ad fuga est autem voluptate ducimus numquam laborum dolorem. Eius.</p>
             </div> 
            }
          
        </div>
            <div style={{visibility: visible ? '': 'hidden'}} className='p-2  relative flex'>
             <div className={pen ? 'iconbefore justify-start' : 'iconbefore border-green-300 hover:border hover:before:border  before:border-green-300 '}>
              <div onClick={()=> setPen(true)} className={pen ? 'iconself translate-y-7 md:w-[400px] md:h-[96px] rounded-b-xl rounded-r-xl justify-start items-start ': 'iconself'}>
                <SiServerless  />                   
              </div>
             </div>
            {
            pen &&
            <div onClick={()=> setPen(false)} className=' absolute z-30 px-4 md:pl-6 py-2 md:w-96 bg-slate-300' >
                <p className=' indent-3'>Serverless Architecture</p>
                <p className='text-xs '>Lorem ipsum dolor sit, amet consectetur laboriosam ea? Accusamus nemo ad fuga est autem voluptate ducimus numquam laborum dolorem. Eius.</p>
             </div> 
            }
          
        </div>
            <div style={{visibility: visible ? '': 'hidden'}} className='p-2  relative flex'>
             <div className={tsk ? 'iconbefore justify-start' : 'iconbefore border-green-300 hover:border hover:before:border  before:border-green-300 '}>
              <div onClick={()=> setTsk(true)} className={tsk ? 'iconself translate-y-7 md:w-[400px] md:h-[96px] rounded-b-xl rounded-r-xl justify-start items-start ': 'iconself'}>
                <RiTaskFill  />                 
              </div>
             </div>
            {
            tsk &&
            <div onClick={()=> setTsk(false)} className=' absolute z-30 px-4 md:pl-6 py-2 md:w-96 bg-slate-300' >
                <p className=' indent-3'>SEO</p>
                <p className='text-xs '>Lorem ipsum dolor sit, amet consectetur laboriosam ea? Accusamus nemo ad fuga est autem voluptate ducimus numquam laborum dolorem. Eius.</p>
             </div> 
            }
          
        </div>
            <div style={{visibility: visible ? '': 'hidden'}} className='p-2  relative flex'>
             <div className={mob ? 'iconbefore justify-start' : 'iconbefore border-green-300 hover:border hover:before:border  before:border-green-300 '}>
              <div onClick={()=> setMob(true)} className={mob ? 'iconself translate-y-7 md:w-[400px] md:h-[96px] rounded-b-xl rounded-r-xl justify-start items-start ': 'iconself'}>
                <IoLogoPwa  />                   
              </div>
             </div>
            {
            mob &&
            <div onClick={()=> setMob(false)} className=' absolute z-30 px-4 md:pl-6 py-2 md:w-96 bg-slate-300' >
                <p className=' indent-3'>Progressive Web Apps (PWAs)</p>
                <p className='text-xs '>Lorem ipsum dolor sit, amet consectetur laboriosam ea? Accusamus nemo ad fuga est autem voluptate ducimus numquam laborum dolorem. Eius.</p>
             </div> 
            }
          
        </div>
    </div>

        <div  className='flex'>
                 <div style={{visibility: visible ? '': 'hidden'}} className='p-2  relative flex'>
             <div className={mot ? 'iconbefore justify-start' : 'iconbefore border-green-300 hover:border hover:before:border  before:border-green-300 '}>
              <div onClick={()=> setMot(true)} className={mot ? 'iconself translate-y-7 md:w-[400px] md:h-[96px] rounded-b-xl rounded-r-xl justify-start items-start ': 'iconself'}>
                <MdAutoAwesomeMotion  />                   
              </div>
             </div>
            {
            mot &&
            <div onClick={()=> setMot(false)} className=' absolute z-30 px-4 md:pl-6 py-2 md:w-96 bg-slate-300' >
                <p className=' indent-3'>Motion UI</p>
                <p className='text-xs '>Lorem ipsum dolor sit, amet consectetur laboriosam ea? Accusamus nemo ad fuga est autem voluptate ducimus numquam laborum dolorem. Eius.</p>
             </div> 
            }
          
        </div>
            <div style={{visibility: visible ? '': 'hidden'}} className='p-2  relative flex'>
             <div className={pwa ? 'iconbefore justify-start' : 'iconbefore border-green-300 hover:border hover:before:border  before:border-green-300 '}>
              <div onClick={()=> setPwa(true)} className={pwa ? 'iconself translate-y-7 md:w-[400px] md:h-[96px] rounded-b-xl rounded-r-xl justify-start items-start ': 'iconself'}>
                <BiUserVoice  />                   
              </div>
             </div>
            {
            pwa &&
            <div onClick={()=> setPwa(false)} className=' absolute z-30 px-4 md:pl-6 py-2 md:w-96 bg-slate-300' >
                <p className=' indent-3'>Optimized Voice Search</p>
                <p className='text-xs '>Lorem ipsum dolor sit, amet consectetur laboriosam ea? Accusamus nemo ad fuga est autem voluptate ducimus numquam laborum dolorem. Eius.</p>
             </div> 
            }
          
        </div>
            <div style={{visibility: visible ? '': 'hidden'}} className='p-2  relative flex'>
             <div className={bot ? 'iconbefore justify-start' : 'iconbefore border-green-300 hover:border hover:before:border  before:border-green-300 '}>
              <div onClick={()=> setBot(true)} className={bot ? 'iconself translate-y-7 md:w-[400px] md:h-[96px] rounded-b-xl rounded-r-xl justify-start items-start ': 'iconself'}>
                <BsPalette2  />                   
              </div>
             </div>
            {
            bot &&
            <div onClick={()=> setBot(false)} className=' absolute z-30 px-4 md:pl-6 py-2 md:w-96 bg-slate-300' >
                <p className=' indent-3'>Single-Page Application</p>
                <p className='text-xs '>Lorem ipsum dolor sit, amet consectetur laboriosam ea? Accusamus nemo ad fuga est autem voluptate ducimus numquam laborum dolorem. Eius.</p>
             </div> 
            }
          
        </div>
     </div>
        <div className='flex'>
                <div style={{visibility: visible ? '': 'hidden'}} className=' p-2 relative flex'>
             <div className={ser ? 'iconbefore justify-start' : 'iconbefore border-green-300 hover:border hover:before:border  before:border-green-300 '}>
              <div onClick={()=> setSer(true)} className={ser ? 'iconself translate-y-7 md:w-[400px] md:h-[96px] rounded-b-xl rounded-r-xl justify-start items-start ': 'iconself'}>
                <MdMobileFriendly  />                   
              </div>
             </div>
            {
            ser &&
            <div onClick={()=> setSer(false)} className=' absolute z-30 px-4 md:pl-6 py-2 md:w-96 bg-slate-300' >
                <p className=' indent-3'>Accelerated Mobile Pages</p>
                <p className='text-xs '>Lorem ipsum dolor sit, amet consectetur laboriosam ea? Accusamus nemo ad fuga est autem voluptate ducimus numquam laborum dolorem. Eius.</p>
             </div> 
            }
          
        </div>
            <div style={{visibility: visible ? '': 'hidden'}} className='p-2  relative flex'>
             <div className={pal ? 'iconbefore justify-start' : 'iconbefore border-green-300 hover:border hover:before:border  before:border-green-300 '}>
              <div onClick={()=> setPal(true)} className={pal ? 'iconself translate-y-7 md:w-[400px] md:h-[96px] rounded-b-xl rounded-r-xl justify-start items-start ': 'iconself'}>
                <SiChatbot  />                   
              </div>
             </div>
            {
            pal &&
            <div onClick={()=> setPal(false)} className=' absolute z-30 px-4 md:pl-6 py-2 md:w-96 bg-slate-300' >
                <p className=' indent-3'>AI Chatbots</p>
                <p className='text-xs '>Lorem ipsum dolor sit, amet consectetur laboriosam ea? Accusamus nemo ad fuga est autem voluptate ducimus numquam laborum dolorem. Eius.</p>
             </div> 
            }
          
        </div>
            <div style={{visibility: visible ? '': 'hidden'}} className='p-2  relative flex'>
             <div className={voi ? 'iconbefore justify-start' : 'iconbefore border-green-300 hover:border hover:before:border  before:border-green-300 '}>
              <div onClick={()=> setVoi(true)} className={voi ? 'iconself translate-y-7 md:w-[400px] md:h-[96px] rounded-b-xl rounded-r-xl justify-start items-start ': 'iconself'}>
                <RiPenNibFill  />                   
              </div>
             </div>
            {
            voi &&
            <div onClick={()=> setVoi(false)} className=' absolute z-30 px-4 md:pl-6 py-2 md:w-96 bg-slate-300' >
                <p className=' indent-3'>Branding</p>
                <p className='text-xs '>Lorem ipsum dolor sit, amet consectetur laboriosam ea? Accusamus nemo ad fuga est autem voluptate ducimus numquam laborum dolorem. Eius.</p>
             </div> 
            }
          
        </div>
            <div style={{visibility: visible ? '': 'hidden'}} className='p-2  relative flex'>
             <div className={drk ? 'iconbefore justify-start' : 'iconbefore border-green-300 hover:border hover:before:border  before:border-green-300 '}>
              <div onClick={()=> setDrk(true)} className={drk ? 'iconself translate-y-7 md:w-[400px] md:h-[96px] rounded-b-xl rounded-r-xl justify-start items-start': 'iconself'}>
                <CgDarkMode  />                   
              </div>
             </div>
            {
            drk &&
            <div onClick={()=> setDrk(false)} className=' absolute z-30 px-4 md:pl-6 py-2 md:w-96 bg-slate-300' >
                <p className=' indent-3'>Dark Mode Standardization</p>
                <p className='text-xs '>Lorem ipsum dolor sit, amet consectetur laboriosam ea? Accusamus nemo ad fuga est autem voluptate ducimus numquam laborum dolorem. Eius.</p>
             </div> 
            }
          
          </div>
      </div>
        </div>
    </header>
  )
}

export default BlogPage
