import { motion} from 'framer-motion';
import React from 'react';
// import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
// import UpworkBrandIcon from './assets/img/brands/upwork.png';
// import FiverBrandIcon from './assets/img/brands/fiverr.png';
// import BehanceBrandIcon from './assets/img/brands/behance.png';
// import DribbbleBrandIcon from './assets/img/brands/dribbble.png';


const brands = [
  {
    img: '',
    href: 'https://www.freelancer.com/',
  },
  {
    img: '',
    href: 'https://www.upwork.com/',
  },
  {
    img: '',
    href: 'https://www.fiverr.com/',
  },
  {
    img: '',
    href: 'https://www.behance.net/',
  },
  {
    img: '',
    href: 'https://dribbble.com/',
  },
];


function Brands() {
    

  return (
    <div className='min-h-[90px] flex items-center bg-slate-600'>
      <div className='container mx-auto flex md:justify-between items-center flex-wrap 
      justify-evenly'>
        {brands.map((brand, index) =>{
            return (
                <motion.a 
                href={brand.href}
                whileTap={{
                  scale: 1.2,
                  transation:{
                    type: 'spring',
                    yoyo: 'infinity'
                  }
                }}
                key={index}>
                    <img src={brand.img} alt='' />
                </motion.a> 
            )
        })}
      </div>
    </div>
  )
}

export default Brands
