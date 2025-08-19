"use client"; // only if using Next.js App Router

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function Carousel({ children, slidesPerView = 4 }) {
  const items = React.Children.toArray(children);

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={slidesPerView}
      speed={1000}
      loop={true}
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false, 
      }}
          breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: slidesPerView, 
        },
      }}
    >
      {items.map((child, index) => (
        <SwiperSlide key={index} className="padding">{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}
