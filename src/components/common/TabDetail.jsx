import React, { useState } from 'react'
import CommentPages from '../../pages/CommentPages'
import TabTag from './TabTag'

const TabDetail = ({ id, description }) => {
    const [openTab, setOpenTab] = useState(1)
    // id로 태그랑 댓글정보 가져오기
    return (
        <>
            <div className="flex flex-wrap">
                <div className="content w-full border-b border-gray-200 dark:border-gray-700">
                    {/* tabs */}
                    <ul
                        className="list-none flex-row flex flex-wrap text-center text-gray-400 dark:text-gray-400"
                        role="tablist"
                    >
                        <li className="mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    'font-bold px-5 py-3 block ' +
                                    (openTab === 1
                                        ? 'text-gray-800 border-b-2 border-gray-800'
                                        : 'text-gray-400')
                                }
                                onClick={(e) => {
                                    e.preventDefault()
                                    setOpenTab(1)
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                줄거리
                            </a>
                        </li>
                        <li className=" mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    'font-bold px-5 py-3 block ' +
                                    (openTab === 2
                                        ? 'text-gray-800 border-b-2 border-gray-800'
                                        : 'text-gray-400')
                                }
                                onClick={(e) => {
                                    e.preventDefault()
                                    setOpenTab(2)
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                태그
                            </a>
                        </li>
                        <li className="mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    'font-bold px-5 py-3 block ' +
                                    (openTab === 3
                                        ? 'text-gray-800 border-b-2 border-gray-800'
                                        : 'text-gray-400')
                                }
                                onClick={(e) => {
                                    e.preventDefault()
                                    setOpenTab(3)
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                댓글
                            </a>
                        </li>
                    </ul>
                    {/* contents */}
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
                        <div className="px-2 flex-auto">
                            <div className="tab-content tab-space">
                                <div
                                    className={
                                        openTab === 1 ? 'block' : 'hidden'
                                    }
                                    id="link1"
                                >
                                    <div className="border-b border-gray-300 text-lg py-1 my-2">
                                        줄거리
                                    </div>
                                    <p className="text-gray-800">
                                        {description}
                                    </p>
                                </div>
                                <div
                                    className={
                                        openTab === 2 ? 'block' : 'hidden'
                                    }
                                    id="link2"
                                >
                                    <div className="border-b border-gray-300 text-lg py-1 my-2">
                                        태그
                                    </div>
                                    <TabTag />
                                </div>
                                <div
                                    className={
                                        openTab === 3 ? 'block' : 'hidden'
                                    }
                                    id="link3"
                                >
                                    <div className="border-b border-gray-300 text-lg py-1 my-2">
                                        댓글
                                    </div>
                                    <CommentPages />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TabDetail
