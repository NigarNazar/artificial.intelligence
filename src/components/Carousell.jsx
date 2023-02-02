import React from 'react'
import Card from './Card'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Carouselsvg1 from '../assets/images/carousell.svg/carousell1.svg'
import Carouselsvg2 from '../assets/images/carousell.svg/carousell2.svg'
import Carouselsvg3 from '../assets/images/carousell.svg/carousell3.svg'
import Carouselsvg4 from '../assets/images/carousell.svg/carousell4.svg'
import Carouselsvg5 from '../assets/images/carousell.svg/carousell5.svg'
export const Carousell = () => {
    return (
        <div className='row mt-4 mb-4 p-5'>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                    },
                    420: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    500:{
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
          640: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
            768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                998: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    }
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide> <Card
                    imgValue={Carouselsvg1}
                    h3Value='Naxly as the Winners in Global Agency Awards'
                    phValue='Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.'
                /></SwiperSlide>
                <SwiperSlide> <Card
                    imgValue={Carouselsvg2}
                    h3Value='Expert Prespective Agency Awards'
                    phValue='Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.'
                /></SwiperSlide>
                <SwiperSlide><Card
                    imgValue={Carouselsvg3}
                    h3Value='Business Prespective Global Agency Awards'
                    phValue='Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.'
                /></SwiperSlide>
                <SwiperSlide>  <Card
                    imgValue={Carouselsvg4}
                    h3Value='Value for Results in Global Agency Awards'
                    phValue='Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.'
                /></SwiperSlide>
               
                <SwiperSlide><Card
                    imgValue={Carouselsvg5}
                    h3Value='Global Experience in Agency Awards'
                    phValue='Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.'
                /></SwiperSlide>

            </Swiper>

        </div>
    )
}

