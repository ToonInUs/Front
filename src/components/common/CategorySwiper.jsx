import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// import required modules
import { FreeMode, Pagination } from 'swiper'
import WebtoonImage from './WebtoonImage'

const CategorySwiper = ({ category, webtoons }) => {
    return (
        <>
            <div className="border-b border-gray-300">
                <label className="text-lg">{category}</label>
            </div>
            <Swiper
                slidesPerView={3.5}
                spaceBetween={6}
                freeMode={true}
                modules={[FreeMode]}
                className="mySwiper"
            >
                {webtoons.map((webtoon, index) => (
                    <SwiperSlide key={index}>
                        <WebtoonImage webtoon={webtoon} />
                        {/* <label className="text-sm">{webtoon.title}</label>
                            <label className="text-sm text-gray-400">{webtoon.creator}</label> */}
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default CategorySwiper
