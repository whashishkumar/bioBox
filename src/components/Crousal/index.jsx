'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import './style.css';

export default function Carousel({ children, slidesPerView }) {
  const items = React.Children.toArray(children);
  return (
    <Swiper
      speed={3000}
      loop={true}
      modules={[Autoplay]}
      spaceBetween={30}
      autoplay={{
        delay: 2500,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 13,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: -15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: -50,
        },
        1280: {
          slidesPerView,
          spaceBetween: 20,
        },
      }}
    >
      {items.map((child, index) => (
        <SwiperSlide key={index} className="card-inside-swiper">
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
