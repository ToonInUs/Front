import React, { useState, useEffect } from 'react'
import Button from '../../components/common/Button'
import PageTitle from '../../components/common/PageTitle'

const EditTagPages = () => {
    const [myTags, setMyTags] = useState([]) // 선택된 태그들

    // 사용자의 취향태그를 받아와서 선택된 태그들 체크표시 해줘야함.
    // useEffect(() => {
    //     first

    //     return () => {
    //         second
    //     }
    // }, [third])

    const tagsBackground = [
        { tag: '청춘물' },
        { tag: '시대극' },
        { tag: '학교' },
    ]
    const tagsMan = [{ tag: '광공' }, { tag: '댕댕이' }, { tag: '개냥이' }]
    const [isDropdownOpenBackground, setIsDropdownOpenBackground] =
        useState(false)
    const [isDropdownOpenMan, setIsDropdownOpenMan] = useState(false)

    function handleDropdownBackground() {
        isDropdownOpenBackground
            ? setIsDropdownOpenBackground(false)
            : setIsDropdownOpenBackground(true)
    }
    function handleDropdownMan() {
        isDropdownOpenMan
            ? setIsDropdownOpenMan(false)
            : setIsDropdownOpenMan(true)
    }
    function removeTag(index) {
        // 태그의 x버튼을 누르면
        setMyTags(myTags.filter((el, i) => i !== index)) // myTags에서 삭제
        // 체크박스 해제
    }
    function toggleTag(tag) {
        // if myTags 5개 이상이고 없는 태그면 추가제한
        if (myTags.length + 1 > 5 && myTags.includes(tag) == false) {
            alert('취향태그는 최대 5개까지 설정할 수 있습니다.')
            return
            // 메세지 띄우기
        } else if (myTags.includes(tag) == false) {
            // if myTags에 없으면 추가
            setMyTags([...myTags, tag])
        } else if (myTags.includes(tag) == true) {
            // if myTags에 있으면 제거
            setMyTags(myTags.filter((el, i) => el !== tag))
        }
        console.log('myTags', myTags)
    }
    return (
        <section>
            <PageTitle title="취향태그 #" />
            <div className="content">
                {/* 선택된 태그 */}
                <div className="bg-gray-100 rounded-lg p-2">
                    {myTags.map((myTag, index) => (
                        <span
                            id="badge-dismiss-default"
                            key={index}
                            className="inline-flex items-center py-1 px-2 mr-2 m-1 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-200 dark:text-blue-800"
                        >
                            #{myTag}
                            {/* <button
                                type="button"
                                onClick={() => removeTag(index)}
                                className="inline-flex items-center p-0.5 ml-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-300 dark:hover:text-blue-900"
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
                            </button> */}
                        </span>
                    ))}
                </div>
                {/* dropdown */}
                <button
                    id="dropdownSearchButton"
                    onClick={handleDropdownBackground}
                    data-dropdown-toggle="dropdownSearch"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                    type="button"
                >
                    장르/배경{' '}
                    <svg
                        className="w-4 h-4 ml-auto"
                        aria-hidden="true"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        ></path>
                    </svg>
                </button>

                <div
                    className={
                        isDropdownOpenBackground
                            ? ''
                            : 'hidden ' +
                              'z-10 bg-white rounded shadow w-60 dark:bg-gray-700'
                    }
                >
                    {/* 목록 */}
                    <ul
                        className="h-48 px-3 py-3 rounded-lg overflow-y-auto text-sm text-gray-700 bg-gray-100 dark:text-gray-200"
                        aria-labelledby="dropdownSearchButton"
                    >
                        {tagsBackground.map((tag, index) => (
                            <li key={index}>
                                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input
                                        onClick={() => toggleTag(tag.tag)}
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                    />
                                    <label
                                        htmlFor="checkbox-item-11"
                                        className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                                    >
                                        {tag.tag}
                                    </label>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* ------------------------------------------------------------------ */}
                {/* dropdown */}
                <button
                    id="dropdownSearchButton"
                    onClick={handleDropdownMan}
                    data-dropdown-toggle="dropdownSearch"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                    type="button"
                >
                    남자주인공{' '}
                    <svg
                        className="w-4 h-4 ml-auto"
                        aria-hidden="true"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        ></path>
                    </svg>
                </button>

                <div
                    className={
                        isDropdownOpenMan
                            ? ''
                            : 'hidden ' +
                              'z-10 bg-white rounded shadow w-60 dark:bg-gray-700'
                    }
                >
                    {/* 목록 */}
                    <ul
                        className="h-48 px-3 py-3 rounded-lg overflow-y-auto text-sm text-gray-700 bg-gray-100 dark:text-gray-200"
                        aria-labelledby="dropdownSearchButton"
                    >
                        {tagsMan.map((tag, index) => (
                            <li key={index}>
                                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input
                                        onClick={() => toggleTag(tag.tag)}
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                    />
                                    <label
                                        htmlFor="checkbox-item-11"
                                        className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                                    >
                                        {tag.tag}
                                    </label>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <Button color="dark" link="/mywebtoon" text="저장하기" />
            </div>
        </section>
    )
}

export default EditTagPages
