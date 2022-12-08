import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

const WebtoonSwiper = (props) => {
  return (
    <>
      <div className="border-b border-gray-300">
        <label className="text-lg font-bold">{props.category}</label>
      </div>
      <Swiper
        slidesPerView={3.5}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Link className="flex flex-col" to="/">
                <img className="rounded-xl" src="../../../img/poster.jpg" />
                <label className="text-sm">이상한변호사우영우</label>
                <label className="text-sm text-gray-400">작가</label>
            </Link>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  )
}

export default WebtoonSwiper