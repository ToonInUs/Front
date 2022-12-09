import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
            clickable: true,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><img src="../../../img/thumbnail1.jpg"></img></SwiperSlide>
        <SwiperSlide><img src="../../../img/thumbnail2.jpg"></img></SwiperSlide>
        <SwiperSlide><img src="../../../img/thumbnail3.jpg"></img></SwiperSlide>
        <SwiperSlide><img src="../../../img/thumbnail4.jpg"></img></SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider