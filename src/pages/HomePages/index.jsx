import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/common/Button'
import TopSlider from '../../components/common/TopSlider'
import CategorySwiper from '../../components/common/CategorySwiper'
import { useGetWebtoonsQuery } from '../../store/apis/webtoonApiSlice'

const HomePages = () => {
    const [fetchWebtoons, setFetchWebtoons] = useState([])
    // fetch('http://localhost:3500/Webtoons')
    //     .then((response) => response.json())
    //     .then((data) => setFetchWebtoons(data))
    // net::ERR_INSUFFICIENT_RESOURCES

    const webtoons = [
        { title: '제목1', creator: '작가1', id: 0, like: true },
        { title: '제목2', creator: '작가1', id: 1, like: true },
        { title: '제목3', creator: '작가1', id: 2, like: false },
        { title: '제목4', creator: '작가1', id: 3, like: true },
        { title: '제목5', creator: '작가1', id: 4, like: false },
        { title: '제목6', creator: '작가1', id: 5, like: true },
    ]

    //const { isLoading, isSuccess, isError, error } = useGetWebtoonsQuery()
    const {
        data: allWebtoons,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetWebtoonsQuery()

    console.log(allWebtoons)
    let content
    if (isLoading) {
        content = <p> "Loading..."</p>
    } else if (isSuccess) {
        content = <CategorySwiper category="신작웹툰" webtoons={allWebtoons} />
    } else if (isError) {
        content = <p>{error}</p>
    }
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
                {content}
                <CategorySwiper category="신작웹툰" webtoons={fetchWebtoons} />
                <CategorySwiper category="인기웹툰" webtoons={webtoons} />
                <CategorySwiper category="내 취향 추천" webtoons={webtoons} />
                <CategorySwiper category="관심웹툰" webtoons={webtoons} />
            </section>
        </div>
    )
}

export default HomePages
