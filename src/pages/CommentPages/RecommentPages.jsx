import React, { useState } from 'react'
import LikeButton from '../../components/common/LikeButton'
import PageTitle from '../../components/common/PageTitle'

const RecommentPages = () => {
    // comment의 id로 recomments에서 해당 답글만 뽑아서 보여주기
    // 백엔드에서 해당되는 답글만 뽑아서 보내주겠지..?
    const comment = {
        id: 0,
        creator: '예린',
        content:
            '첫번째 댓글입니다. 안녕하세요. 어디까지 길어지면 다음줄로 넘어갈까요?',
        createdAt: '2023-01-01',
        reComs: 2,
        likes: 123,
    }

    const recomments = [
        {
            id: 0,
            commentid: 0,
            creator: '나민',
            content: '답글입니다.',
            createdAt: '2023-01-01',
            likes: 456,
            isDeleted: false,
        },
        {
            id: 1,
            commentid: 0,
            creator: '나민',
            content: '답글입니다.',
            createdAt: '2023-01-01',
            likes: 456,
            isDeleted: false,
        },
        {
            id: 2,
            commentid: 0,
            creator: '수진',
            content: '답글입니다.',
            createdAt: '2023-01-01',
            likes: 456,
            isDeleted: false,
        },
        {
            id: 3,
            commentid: 0,
            creator: '수진',
            content: '답글입니다.',
            createdAt: '2023-01-01',
            likes: 456,
            isDeleted: false,
        },
        {
            id: 4,
            commentid: 0,
            creator: '수진',
            content: '답글입니다.',
            createdAt: '2023-01-01',
            likes: 456,
            isDeleted: false,
        },
        {
            id: 5,
            commentid: 0,
            creator: '수진',
            content: '마지막 전 답글입니다.',
            createdAt: '2023-01-01',
            likes: 456,
            isDeleted: false,
        },
        {
            id: 6,
            commentid: 0,
            creator: '수진',
            content: '마지막 답글입니다.',
            createdAt: '2023-01-01',
            likes: 456,
            isDeleted: false,
        },
    ]

    const [isFocus, setIsFocus] = useState(false)
    function handleFocus() {
        setIsFocus(true)
    }
    function handleBlur() {
        setIsFocus(false)
    }
    return (
        <section className="static">
            <PageTitle />
            {/* root 댓글 */}
            <div className="grid grid-row gap-4 p-2 border-b border-gray-200">
                <div className="flex flex-row">
                    <label className="text-lg pr-2">{comment.creator}</label>
                    <label className="text-gray-400">{comment.createdAt}</label>
                    <label className="text-red-400 ml-auto">
                        {comment.likes}
                    </label>
                    <LikeButton />
                </div>
                {/* 댓글내용 */}
                <label className="text-gray-500">{comment.content}</label>
                {/* 답글 버튼, 개수 */}
                <button className="w-auto px-2 py-1 ml-auto border rounded-lg">
                    답글{comment.reComs}
                </button>
            </div>
            {/* 답글 */}
            <div className="bg-gray-100 pb-20 mb-20">
                {recomments.map((recomment, index) => (
                    <div
                        key={index}
                        className="grid grid-row gap-4 p-2 border-b border-gray-200"
                    >
                        <div className="flex flex-row">
                            <label className="text-lg pl-2 text-gray-300">
                                ㄴ &nbsp;
                            </label>
                            <label className="text-lg pr-2">
                                {recomment.creator}
                            </label>
                            <label className="text-gray-400">
                                {recomment.createdAt}
                            </label>
                            <label className="text-red-400 ml-auto">
                                {recomment.likes}
                            </label>
                            <LikeButton />
                        </div>
                        {/* 댓글내용 */}
                        <label className="text-gray-500 pb-2 pl-8">
                            {recomment.content}
                        </label>
                    </div>
                ))}
            </div>
            {/* 답글입력창, 하단고정 */}
            {/* focus시 배경 어둡게, textarea 높이 키우기 */}

            <div className="-mb-1 fixed py-1 bg-white bottom-14 w-full border-t border-gray-300 dark:border-gray-700">
                <textarea
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    type="search"
                    className={
                        (isFocus ? 'h-20 ' : 'h-10 ') +
                        'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 pr-12 resize-none focus:outline-none focus:ring-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    }
                />
                <button
                    className={
                        (isFocus ? 'show text-gray-700 ' : 'hidden ') +
                        'absolute right-5 top-5 text-sm font-bold'
                    }
                >
                    댓글
                    <br />
                    달기
                </button>
            </div>
        </section>
    )
}

export default RecommentPages
