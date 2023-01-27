import React from 'react'

const TabTag = ({}) => {
    const [openTab, setOpenTab] = React.useState(1)

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
                                    'px-5 py-2 block rounded-3xl ' +
                                    (openTab === 1
                                        ? 'text-white bg-indigo-600'
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
                                기본 태그
                            </a>
                        </li>
                        <li className=" mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    'px-5 py-2 block rounded-3xl ' +
                                    (openTab === 2
                                        ? 'text-white bg-indigo-600'
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
                                사용자 태그
                            </a>
                        </li>
                    </ul>
                    {/* contents */}
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
                        <div className="px-2 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div
                                    className={
                                        openTab === 1 ? 'block' : 'hidden'
                                    }
                                    id="link1"
                                >
                                    기본태그
                                </div>
                                <div
                                    className={
                                        openTab === 2 ? 'block' : 'hidden'
                                    }
                                    id="link2"
                                >
                                    사용자태그
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TabTag
