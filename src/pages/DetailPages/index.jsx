import React from 'react'
import { useParams } from 'react-router'
import PageTitle from '../../components/common/PageTitle'
import { Link } from 'react-router-dom'
import TabDetail from '../../components/common/TabDetail'
import LikeButton from '../../components/common/LikeButton'

const DetailPages = () => {
    const { id } = useParams()
    console.log(id) // id로 웹툰 상세 정보 받아오기
    return (
        <section>
            <PageTitle title=" " />
            <div className="content">
                <label className="font-bold text-lg">title</label>
                <img />
                <label className="text-gray-300">creator genre flatform</label>
                <div className="flex flex-row">
                    {/* 웹툰 보러가기 링크 */}
                    <a
                        href="https://github.com/ToonInUs/Front"
                        className="text-sm py-2 px-8 rounded-3xl ml-auto bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-700 focus:outline-none focus:ring focus:ring-black-300"
                        target="_blank"
                    >
                        바로 보러가기
                    </a>
                    {/* 관심웹툰 추가 */}
                    <LikeButton />
                </div>
            </div>
            <TabDetail />
        </section>
    )
}

export default DetailPages
