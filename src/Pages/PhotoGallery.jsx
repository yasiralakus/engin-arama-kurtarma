import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function PhotoGallery() {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className='photo-gallery-item'>
            <img src="./images/photo-gallery/wp1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='photo-gallery-item'>
            <img src="./images/photo-gallery/wp2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='photo-gallery-item'>
            <img src="./images/photo-gallery/wp3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='photo-gallery-item'>
            <img src="./images/photo-gallery/wp4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='photo-gallery-item'>
            <img src="./images/photo-gallery/wp5.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='photo-gallery-item'>
            <img src="./images/photo-gallery/wp6.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='photo-gallery-item'>
            <img src="./images/photo-gallery/wp7.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='photo-gallery-item'>
            <img src="./images/photo-gallery/wp8.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='photo-gallery-item'>
            <img src="./images/photo-gallery/wp9.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='photo-gallery-item'>
            <img src="./images/photo-gallery/wp10.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='photo-gallery-item'>
            <img src="./images/photo-gallery/wp11.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='photo-gallery-item'>
            <img src="./images/photo-gallery/wp12.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='photo-gallery-item'>
            <img src="./images/photo-gallery/wp13.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='photo-gallery-item'>
            <img src="./images/photo-gallery/wp14.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='photo-gallery-item'>
            <img src="./images/photo-gallery/wp15.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='photo-gallery-item'>
            <img src="./images/photo-gallery/wp16.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='photo-gallery-item'>
            <img src="./images/photo-gallery/wp17.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='photo-gallery-item'>
            <img src="./images/photo-gallery/wp18.jpg" alt="" />
        </SwiperSlide>

      </Swiper>
    </>
  );
}
