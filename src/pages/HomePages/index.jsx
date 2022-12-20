import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/common/Button'
import TopSlider from '../../components/common/TopSlider'
import CategorySwiper from '../../components/common/CategorySwiper'

const HomePages = () => {
    return (
        <div>
            {/* slider */}
            <div className="bg-black">
                <TopSlider />
            </div>
            {/* section ?? */}
            <section className="content">
                <Button
                    type="button"
                    text="취향태그 설정하러가기"
                    color="dark"
                    link="/mywebtoon"
                />
                <CategorySwiper category="신작웹툰" />
                <CategorySwiper category="인기웹툰" />
                <CategorySwiper category="내 취향 추천" />
                <CategorySwiper category="관심웹툰" />
            </section>
        </div>
    )
}

export default HomePages
