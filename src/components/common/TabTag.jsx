import React, { useState } from 'react'

const TabTag = ({}) => {
    const [openTab, setOpenTab] = useState(1)
    const [myTags, setMyTags] = useState([])
    const [isEditMode, setIsEditMode] = useState(false) // 편집모드면 태그의 x show & 버튼 text바꾸기
    const [btnText, setBtnText] = useState('편집하기')
    const basicTags = ['감동', '법정', '성장물']
    const userTags = ['자폐변호사', '우투더영투더우']

    function handleEditModeToggle() {
        console.log('clicked')
        if (isEditMode) {
            setIsEditMode(false)
            setBtnText('완료')
        } else {
            setIsEditMode(true)
            setBtnText('편집하기')
        }
    }
    function removeTag(index) {
        setMyTags(myTags.filter((el, i) => i !== index))
    }
    function addTag(addedTag) {
        setMyTags([...myTags, addedTag])
    }

    return (
        <div>
            <div className="flex flex-row border-b border-gray-300  py-1 my-2">
                <label className="text-lg"> 내가 선택한 태그</label>
                {/* 편집하기버튼 */}
                <button
                    onClick={handleEditModeToggle}
                    className="text-white text-sm bg-gray-800 rounded-2xl px-3 ml-auto"
                >
                    {btnText}
                </button>
            </div>

            {/* 내가 선택한 태그들 */}
            <div className="p-3 rounded bg-gray-100">
                {myTags.map((tag, index) => (
                    <span
                        id="badge-dismiss-default"
                        key={index}
                        className="inline-flex items-center py-1 px-2 mr-2 m-1 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-200 dark:text-blue-800"
                    >
                        #{tag}
                        {/* x 버튼 */}
                        <button
                            type="button"
                            onClick={() => removeTag(index)}
                            className={
                                (isEditMode ? '' : 'hidden ') +
                                'inline-flex items-center p-0.5 ml-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-300 dark:hover:text-blue-900'
                            }
                            data-dismiss-target="#badge-dismiss-default"
                            aria-label="Remove"
                        >
                            <svg
                                aria-hidden="true"
                                className="w-3.5 h-3.5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <span className="sr-only">Remove badge</span>
                        </button>
                    </span>
                ))}
            </div>

            {/* tab */}
            <div className="flex flex-wrap mt-2">
                <div className="w-full border-b border-gray-200 dark:border-gray-700">
                    {/* tab button */}
                    <ul
                        className=" list-none flex-row flex flex-wrap text-center text-gray-400 mb-2 dark:text-gray-400"
                        role="tablist"
                    >
                        <li className=" flex-auto text-center">
                            <a
                                className={
                                    'px-2 py-2 block rounded-3xl rounded-r ' +
                                    (openTab === 1
                                        ? 'text-white bg-indigo-600'
                                        : 'text-gray-500 bg-indigo-100')
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
                        <li className=" flex-auto text-center">
                            <a
                                className={
                                    'px-2 py-2 block rounded-3xl rounded-l  ' +
                                    (openTab === 2
                                        ? 'text-white bg-indigo-600'
                                        : 'text-gray-500 bg-indigo-100')
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
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded">
                        <div className=" py-3 flex-auto">
                            <div className="tab-content tab-space">
                                <div
                                    className={
                                        openTab === 1 ? 'block' : 'hidden'
                                    }
                                    id="link1"
                                >
                                    {basicTags.map((tag, index) => (
                                        <span
                                            id="badge-dismiss-default"
                                            key={index}
                                            className="inline-flex items-center py-1 px-2 mr-2 m-1 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-200 dark:text-blue-800"
                                        >
                                            #{tag}
                                            {/* + 버튼 */}
                                            <button
                                                type="button"
                                                onClick={() => addTag(tag)}
                                                className={
                                                    (isEditMode
                                                        ? ''
                                                        : 'hidden ') +
                                                    'inline-flex items-center p-0.5 ml-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-300 dark:hover:text-blue-900'
                                                }
                                            >
                                                +
                                            </button>
                                        </span>
                                    ))}
                                </div>
                                <div
                                    className={
                                        openTab === 2 ? 'block' : 'hidden'
                                    }
                                    id="link2"
                                >
                                    {userTags.map((tag, index) => (
                                        <span
                                            id="badge-dismiss-default"
                                            key={index}
                                            className="inline-flex items-center py-1 px-2 mr-2 m-1 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-200 dark:text-blue-800"
                                        >
                                            #{tag}
                                            {/* + 버튼 */}
                                            <button
                                                type="button"
                                                onClick={() => addTag(tag)}
                                                className={
                                                    (isEditMode
                                                        ? ''
                                                        : 'hidden ') +
                                                    'inline-flex items-center p-0.5 ml-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-300 dark:hover:text-blue-900'
                                                }
                                            >
                                                +
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabTag
