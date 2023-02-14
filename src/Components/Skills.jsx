import React from 'react'
import {skills} from '../data'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import SwiperCore, {Pagination, Autoplay} from 'swiper';

SwiperCore.use([Autoplay]);
SwiperCore.use([Pagination]);

const Skills = () => {
  return (
  <div className=''>
    <div className='py-2 '>
      <div className='' >
      <Swiper
        loop={true}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter:true,
            stopOnLastSlide:false
        }}
        slidesPerView={4}
        className='mySwiper m-0 flex justify-center'
        >
        {skills.map((skill, index) =>{
          return (
            <SwiperSlide className='!m-0 ' key={index}>
              <img src={skill.image} alt=""
                   className='shadow-xl shadow-gray-300'
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
     </div>
    </div>
  </div>
  )
}

export default Skills
