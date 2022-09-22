import React from 'react'
import {testimonials} from '../../data'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import SwiperCore, {Pagination} from 'swiper';

SwiperCore.use([Pagination]);

const TestimonialSlider = () => {
  return (
    <>
      <Swiper
           loop={true}
           autoplay={{
               delay: 5000,
               disableOnInteraction: false,
               pauseOnMouseEnter:true,
               stopOnLastSlide:false
           }}
           slidesPerView={3}
           className='mySwiper m-0 flex justify-center'
          >  
         {testimonials.map((item, index) => {
            const {authorImg, authorText, authorName, authorPosition} = item;
            return (
               <SwiperSlide key={index} >
                <div className='flex flex-col justify-between px-6 lg:px-10'>
                 <img className='rounded-2xl w-[100px] lg:w-[200px]' src={authorImg} alt='' />
                   <div className=''>
                     <div className=''>
                        <p className='font-bold text-[8px] lg:text-xl'>{authorName}</p>
                        <p className='text-[8px] lg:text-xl'>{authorPosition}</p>
                      </div>
                      <h5 className='font-body italic font-normal lg:w-60 text-[8px] lg:text-xl' >
                        {authorText}
                      </h5>
                    </div>
                </div> 
              </SwiperSlide>
            )
        })}
      </Swiper>
    </>
  )
}

export default TestimonialSlider
