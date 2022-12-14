import React from 'react'
import PageTitle from '../../components/common/pageTitle'
import TabMywebtoon from '../../components/common/tapMywebtoon'
import { Link } from 'react-router-dom'

// tailwind badge
// https://flowbite.com/docs/components/badge/

const MyWebtoonPages = () => {
  return (
    <>
      <section>
        <PageTitle title="My웹툰" />
        <div className="content border-b border-gray-300">
          <div className="flex flex-row">
            <label className="font-bold text-lg">취향태그 #</label>
            <a className="text-sm py-1 px-3 rounded-3xl ml-auto bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-700 focus:outline-none focus:ring focus:ring-black-300">
                편집하기
            </a>
          </div>
          <div className="bg-gray-100 rounded-xl p-3">
            <Link to="/" className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300">#로맨스</Link>
          </div>
        </div>
        <div>
          <TabMywebtoon />
        </div>
      </section>
    </>
  )
  
}

export default MyWebtoonPages
