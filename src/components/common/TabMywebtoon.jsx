import React from 'react'
import Button from './Button'
import LikeButton from './LikeButton'
import WebtoonImage from './WebtoonImage'

const TabMywebtoon = () => {
    const [openTab, setOpenTab] = React.useState(1)

    const recentWebtoons = [
        { title: '제목1', creator: '작가1' },
        { title: '제목1', creator: '작가1' },
        { title: '제목1', creator: '작가1' },
        { title: '제목1', creator: '작가1' },
        { title: '제목1', creator: '작가1' },
    ]
    const likedWebtoons = []
    const tagedWebtoons = []
    const myComments = [
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
                                    'font-bold py-3 block ' +
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
                                최근감상
                            </a>
                        </li>
                        <li className=" mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    'font-bold py-3 block ' +
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
                                관심웹툰
                            </a>
                        </li>
                        <li className="mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    'font-bold py-3 block ' +
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
                                내가 태그 단 웹툰
                            </a>
                        </li>
                        <li className="mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    'font-bold py-3 block ' +
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
                                내 댓글
                            </a>
                        </li>
                    </ul>
                    {/* contents */}
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div
                                    className={
                                        openTab === 1 ? 'block' : 'hidden'
                                    }
                                    id="link1"
                                >
                                    <label className="font-bold text-lg">
                                        최근감상
                                    </label>
                                    <div className="grid grid-cols-3 gap-4">
                                        {recentWebtoons.map(
                                            (recentWebtoon, index) => (
                                                <WebtoonImage
                                                    webtoon={recentWebtoon}
                                                    key={index}
                                                />
                                            ),
                                        )}
                                    </div>
                                </div>
                                <div
                                    className={
                                        openTab === 2 ? 'block' : 'hidden'
                                    }
                                    id="link2"
                                >
                                    <label className="font-bold text-lg">
                                        관심웹툰
                                    </label>
                                    {}
                                </div>
                                <div
                                    className={
                                        openTab === 3 ? 'block' : 'hidden'
                                    }
                                    id="link3"
                                >
                                    <label className="font-bold text-lg">
                                        내가 태그 단 웹툰
                                    </label>
                                    <p>내가 태그 단 웹툰</p>
                                </div>
                                <div
                                    className={
                                        openTab === 4 ? 'block' : 'hidden'
                                    }
                                    id="link4"
                                >
                                    <label className="font-bold text-lg">
                                        내 댓글
                                    </label>
                                    {myComments.map((comment, index) => (
                                        <div
                                            key={index}
                                            className="grid grid-row gap-4 p-2 mt-2 border-b border-gray-200"
                                        >
                                            <label className="text-gray-500">
                                                {comment.content}
                                            </label>
                                            <Button
                                                text={
                                                    <>
                                                        <label className="align-middle text-sm text-gray-400">
                                                            {}제목
                                                        </label>
                                                        <span className="align-middle material-symbols-rounded text-sm text-gray-400">
                                                            arrow_forward_ios
                                                        </span>
                                                    </>
                                                }
                                                link="/webtoon/{}"
                                            />
                                            <div className="flex flex-row items-center">
                                                <button className="w-auto px-2 py-1 ml-0 border rounded-lg">
                                                    답글{comment.reComs}
                                                </button>
                                                <LikeButton />
                                                <label className="text-red-400 mr-auto">
                                                    {comment.likes}
                                                </label>
                                                <label className="text-gray-400 mx-2">
                                                    {comment.createdAt}
                                                </label>
                                                <button className="text-gray-300">
                                                    삭제
                                                </button>
                                            </div>
                                        </div>
                                    ))}
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
