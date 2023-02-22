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
           slidesPerView={1}
           className='mySwiper flex justify-center'
          >  
         {testimonials.map((item, index) => {
            const {authorImg, authorText, authorName, authorPosition} = item;
            return (
               <SwiperSlide key={index} >
                <div className=' border-t pt-6 bg-red-800'>
                  <div className='h-40 !bg-cover bg-blend-overlay  !bg-center !bg-no-repeat  ' style={ { background: `url(${ authorImg })` } }  >  
                   <div className='text-center pt-6 '>
                     <div className=''>
                        <p className='font-bold'>{authorName}</p>
                        <p className=''>{authorPosition}</p>
                      </div>
                      <h5 className='font-body italic font-normal' >
                        { authorText }
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam asperiores iusto et molestiae aut qui impedit, non aliquam itaque praesentium illo nesciunt quaerat omnis assumenda repudiandae doloremque iure reprehenderit officiis.
                      </h5>
                    </div>
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
