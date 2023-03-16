import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import SwiperCore, {Pagination} from 'swiper';

SwiperCore.use([Pagination]);

const testimonials = [
  {
    authorImg: 'TestiImage1',
    authorText:
      '',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: 'TestiImage2',
    authorText:
      '',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: 'TestiImage3',
    authorText:
      '',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];




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
           className='mySwiper'
          >  
         {testimonials.map((item, index) => {
            const {authorImg, authorText, authorName, authorPosition} = item;
            return (
               <SwiperSlide key={index} >
                <div className='p-4 md:py-11 lg:py-20 px-20'>
                  <div className=''>  
                    {/* style={ { background: `url(${ authorImg })` } } */}
                   <div className=' '>
                     <div className=''>
                        <p className='font-bold'>{authorName}</p>
                        <p className=''>{authorPosition}</p>
                      </div>
                      <h5 className=' text-xs md:text-lg lg:text-xl' >
                        { authorText }
                        Lorem ipsum, dolor sit nesciunt quaerat omnis assumenda repudiandae doloremque iure reprehenderit officiis.
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
