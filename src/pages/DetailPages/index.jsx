import React from 'react'
import { useParams } from 'react-router'
import PageTitle from '../../components/common/PageTitle'
import { Link } from 'react-router-dom'
import TabDetail from '../../components/common/TabDetail'
import LikeButton from '../../components/common/LikeButton'

const DetailPages = () => {
    const { id } = useParams()
    console.log(id) // id로 웹툰 상세 정보 받아오기

    const webtoon = {
        id: id,
        title: '이상한 변호사 우영우',
        creator: '유일 / 화음조,이예지',
        header_img: '../../../img/poster.jpg',
        platform: '네이버웹툰',
        url: 'https://comic.naver.com/webtoon/list?titleId=798173&no=1&weekday=',
        description:
            "한국대 로스쿨 수석 졸업에, 변호사 시험 성적 1,500점 이상! 국내 업계 2위 법무법인 한바다의 인턴 변호사가 된 우영우. 영우는 자신의 능력을 증명해내고 '진짜 변호사'가 될 수 있을까?",
        genre: '스토리, 드라마',
        isDeleted: false,
    }
    return (
        <section>
            <PageTitle />
            <div className="content">
                <label className="px-2 font-bold text-xl">
                    {webtoon.title}
                </label>
                <div className="grid grid-cols-2 gap-6 px-2">
                    <img className="rounded-lg" src={webtoon.header_img} />
                    <div className="flex flex-col">
                        <label className="text-gray-400">
                            {webtoon.creator}
                            <br />
                            <br />
                            {webtoon.genre}
                            <br />
                            {webtoon.platform}
                        </label>
                        <div className="flex flex-row mt-auto">
                            {/* 웹툰 보러가기 링크 */}
                            <a
                                href={webtoon.url}
                                className="text-sm py-2 px-6 rounded-xl bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-700 focus:outline-none focus:ring focus:ring-black-300"
                                target="_blank"
                            >
                                바로가기
                            </a>
                            {/* 관심웹툰 추가 */}
                            <LikeButton />
                        </div>
                    </div>
                </div>
            </div>
            <TabDetail id={id} description={webtoon.description} />
        </section>
    )
}

export default DetailPages
