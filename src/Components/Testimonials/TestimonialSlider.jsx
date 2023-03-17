import React, { useEffect, useState } from 'react'
import SwiperCore, {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import supabase from '../../connection/env';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";


SwiperCore.use([Pagination]);

const TestimonialSlider = () =>
{
  const [news, setNews] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  useEffect(() => {
    const fetchData = async () =>
    {
      setLoading(true)
      let { data, error } = await supabase
      .from('new')
      .select('*')
      
      if (error) {
        setLoading(false)
        setError(error)
      } else
      {
        setLoading(false)
        setNews(data)
      }
    }
    fetchData();
  }, []);

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
          {news && news.map((item, index) => {
            return (
               <SwiperSlide  >
                <div className='p-4 md:py-11 lg:py-20 px-20' key={index}>
                  <div className=''>  
                   <div className=''>
                     <div className=''>
                        <p className='font-bold'>{item.name}</p>
                        <p className=''>{item.title}</p>
                      </div>
                      <h5 className=' text-xs md:text-lg lg:text-xl' >
                        {item.excerpt}
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
