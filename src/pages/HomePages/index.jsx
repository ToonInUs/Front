import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/common/Button'
import TopSlider from '../../components/common/TopSlider'
import CategorySwiper from '../../components/common/CategorySwiper'

const HomePages = () => {
    const webtoons = [
        { title: '제목1', creator: '작가1', id: 0, like: true },
        { title: '제목2', creator: '작가1', id: 1, like: true },
        { title: '제목3', creator: '작가1', id: 2, like: false },
        { title: '제목4', creator: '작가1', id: 3, like: true },
        { title: '제목5', creator: '작가1', id: 4, like: false },
        { title: '제목6', creator: '작가1', id: 5, like: true },
    ]
    return (
        <div>
            {/* slider */}
            <div className="bg-black">
                <TopSlider />
            </div>
            {/* section */}
            <section className="content">
                <Button
                    type="button"
                    text="취향태그 설정하러가기"
                    color="dark"
                    link="/mywebtoon"
                />
                <CategorySwiper category="신작웹툰" webtoons={webtoons} />
                <CategorySwiper category="인기웹툰" webtoons={webtoons} />
                <CategorySwiper category="내 취향 추천" webtoons={webtoons} />
                <CategorySwiper category="관심웹툰" webtoons={webtoons} />
            </section>
        </div>
    )
}

export default HomePages
