import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { setCredentials } from '../../store/slices/authSlice'
import { useLoginMutation } from '../../store/apis/authApiSlice'
import PageTitle from '../../components/common/PageTitle'

const TagSearchPages = () => {
    const tagRef = useRef()
    const errRef = useRef()

    const [tags, setTags] = useState([]) // 선택된 태그들
    const recommendTags = ['존잘', '사이다']
    const [tag, setTag] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const navigate = useNavigate()

    const [login, { isLoading }] = useLoginMutation()
    const dispatch = useDispatch()

    useEffect(() => {
        tagRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [tag])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            // 태그 검색
            navigate('/tagsearch')
        } catch (err) {
            if (!err?.originalStatus) {
                // isLoading: true until timeout occurs
                setErrMsg('No Server Response')
            } else if (err.originalStatus === 400) {
                setErrMsg('Missing tag')
            } else if (err.originalStatus === 401) {
                setErrMsg('Unauthorized')
            } else {
                setErrMsg(' Failed')
            }
            errRef.current.focus()
        }
    }

    function handleKeyDown(e) {
        if (e.key !== 'Enter') return
        const value = e.target.value
        console.log(value)
        if (!value.trim()) return // 좌우 공백 제거
        if (tags.includes(value)) {
            alert('이미 존재하는 태그 입니다.')
            e.target.value = ''
            return // 이미 포함하고 있으면 추가x
        }
        setTags([...tags, value])
        e.target.value = ''
    }
    function removeTag(index) {
        setTags(tags.filter((el, i) => i !== index))
    }
    function addTag(recTag) {
        setTags([...tags, recTag])
    }

    const content = isLoading ? (
        <h1>Loading...</h1>
    ) : (
        <section className="tagsearch">
            <p
                ref={errRef}
                className={errMsg ? 'errmsg' : 'offscreen'}
                aria-live="assertive"
            >
                {errMsg}
            </p>

            <PageTitle title="태그검색" />
            <div className="content">
                <label className="font-bold text-lg">태그 추가</label>
                <input
                    type="text"
                    id="tag"
                    ref={tagRef}
                    placeholder="태그를 입력하세요"
                    onKeyDown={handleKeyDown}
                    autoComplete="off"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {/* 선택된 태그들 */}
                <div>
                    {tags.map((tag, index) => (
                        <span
                            id="badge-dismiss-default"
                            key={index}
                            className="inline-flex items-center py-1 px-2 mr-2 m-1 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-200 dark:text-blue-800"
                        >
                            #{tag}
                            <button
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
                            </button>
                        </span>
                    ))}
                </div>
                <label className="font-bold text-lg">추천 태그</label>
                <div className="p-3 rounded-xl bg-gray-100">
                    {recommendTags.map((recTag, index) => (
                        <button
                            id="badge-dismiss-purple"
                            onClick={() => addTag(recTag)}
                            key={index}
                            className="inline-flex items-center py-1 px-2 mr-2 text-sm font-medium text-purple-800 bg-purple-100 rounded dark:bg-purple-200 dark:text-purple-800"
                        >
                            #{recTag}
                        </button>
                    ))}
                </div>
            </div>

            <form onSubmit={handleSubmit} className="content">
                <button className="bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-700 focus:outline-none focus:ring focus:ring-black-300 p-2 rounded-3xl">
                    검색
                </button>
                <label className="font-bold text-lg border-b border-gray-300 p-2">
                    태그 검색결과
                </label>
            </form>
        </section>
    )

    return content
}

export default TagSearchPages
