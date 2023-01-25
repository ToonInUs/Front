import React from 'react'
import { Link } from 'react-router-dom'
import LikeButton from '../../components/common/LikeButton'

const CommentPages = () => {
    const comments = [
        {
            id: 0,
            creator: '예린',
            content:
                '첫번째 댓글입니다. 안녕하세요. 어디까지 길어지면 다음줄로 넘어갈까요?',
            createdAt: '2023-01-01',
            reComs: 2,
            likes: 123,
        },
        {
            id: 1,
            creator: '예린',
            content: '두번째 댓글',
            createdAt: '2023-01-01',
            reComs: 2,
            likes: 123,
        },
    ]

    return (
        <div>
            <textarea
                type="search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full h-20 p-2.5 pr-12 resize-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <button className="absolute right-5 top-10 text-gray-800 text-sm font-bold">
                댓글
                <br />
                달기
            </button>

            {comments.map((comment, index) => (
                <div
                    key={index}
                    className="grid grid-row gap-4 p-2 border-b border-gray-200"
                >
                    <div className="flex flex-row">
                        <label className="text-lg pr-2">
                            {comment.creator}
                        </label>
                        <label className="text-gray-400">
                            {comment.createdAt}
                        </label>
                        <label className="text-red-400 ml-auto">
                            {comment.likes}
                        </label>
                        <LikeButton />
                    </div>
                    {/* 댓글내용 */}
                    <label className="text-gray-500">{comment.content}</label>
                    {/* 답글 버튼, 개수 */}
                    <Link
                        to={`recomment`}
                        className="w-auto px-2 py-1 ml-auto border rounded-lg"
                    >
                        답글{comment.reComs}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default CommentPages
