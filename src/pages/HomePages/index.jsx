import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/common/button'
import Slider from '../../components/common/slider'
import Swiper from '../../components/common/swiper'

const HomePages = () => {
    return (
        <div>
            {/* slider */}
            <div className="bg-black">
                <Slider />
            </div>
            {/* section ?? */}
            <section className="content">
                <Button
                    type="button"
                    text="취향태그 설정하러가기"
                    color="dark"
                    link="/mywebtoon"
                />
                <Swiper category="신작웹툰" />
                <Swiper category="인기웹툰" />
                <Swiper category="내 취향 추천" />
                <Swiper category="관심웹툰" />
            </section>
        </div>
    )
}

export default HomePages
