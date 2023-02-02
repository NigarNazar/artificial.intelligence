import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import brand1 from '../assets/images/brand/brand1.svg'
import brand2 from '../assets/images/brand/brand2.svg'
import brand3 from '../assets/images/brand/brand3.svg'
import brand4 from '../assets/images/brand/brand4.svg'

export const Brand = () => {
  return (
    <div className='image '>
      
      <Swiper
       slidesPerView={2}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={brand1}/></SwiperSlide>
        <SwiperSlide> <img src={brand2}/></SwiperSlide>
        <SwiperSlide> <img src={brand3}/></SwiperSlide>
        <SwiperSlide> <img src={brand4}/></SwiperSlide>
        
      </Swiper>
      
        
    
    

   
  </div>
    
  )
}
