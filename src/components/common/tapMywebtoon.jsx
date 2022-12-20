import React from 'react'

const TabMywebtoon = ({}) => {
    const [openTab, setOpenTab] = React.useState(1)

    return (
        <>
            <div className="flex flex-wrap">
                <div className="content w-full border-b border-gray-200 dark:border-gray-700">
                    {/* tabs */}
                    <ul
                        className="list-none flex-row flex flex-wrap mb-3 text-center text-gray-400 dark:text-gray-400"
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
                        <li className="mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    'font-bold px-5 py-3 block ' +
                                    (openTab === 4
                                        ? 'text-gray-800 border-b-2 border-gray-800'
                                        : 'text-gray-400')
                                }
                                onClick={(e) => {
                                    e.preventDefault()
                                    setOpenTab(4)
                                }}
                                data-toggle="tab"
                                href="#link4"
                                role="tablist"
                            >
                                댓글
                            </a>
                        </li>
                    </ul>
                    {/* contents */}
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div
                                    className={
                                        openTab === 1 ? 'block' : 'hidden'
                                    }
                                    id="link1"
                                >
                                    <p>{}줄거리</p>
                                </div>
                                <div
                                    className={
                                        openTab === 2 ? 'block' : 'hidden'
                                    }
                                    id="link2"
                                >
                                    <p>태그</p>
                                </div>
                                <div
                                    className={
                                        openTab === 3 ? 'block' : 'hidden'
                                    }
                                    id="link3"
                                >
                                    <p>태그</p>
                                </div>
                                <div
                                    className={
                                        openTab === 4 ? 'block' : 'hidden'
                                    }
                                    id="link4"
                                >
                                    <p>태그</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TabMywebtoon
