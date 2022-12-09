import React from 'react'
import { useParams } from 'react-router'
import PageTitle from '../../components/common/pageTitle'
import { Link } from 'react-router-dom'
import TabDetail from '../../components/common/tapDetail'

const DetailPages = () => {
  const { params } = useParams()

  return (
    <section>
        <PageTitle title=" " />
        <div className="content">
            <label className="font-bold text-lg">title</label>
            <img />
            <label className="text-gray-300">
                creator
                genre
                flatform
            </label>
            <a href="https://github.com/ToonInUs/Front" className="text-sm py-2 px-8 rounded-3xl ml-auto bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-700 focus:outline-none focus:ring focus:ring-black-300" target="_blank">바로 보러가기</a>
            <Link className="text-sm py-2 px-8 rounded-3xl ml-auto bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-700 focus:outline-none focus:ring focus:ring-black-300">바로보러가기</Link>
            {/* 하...버튼 필요없네?? Link에 바로 넣으면 되는구나 onClick도 들어가네.. 어이0*/}
        </div>
        <TabDetail />
    </section>
  )
  
}

export default DetailPages
