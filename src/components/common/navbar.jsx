import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [openTab, setOpenTab] = React.useState(1)

    return (
        <>
            <div className="static">
                <div className="-mb-1 fixed z-10 bg-white bottom-0 w-full border-t border-gray-300 dark:border-gray-700">
                    <ul className="list-none flex-row flex -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <Link
                                to=""
                                className={
                                    'text-xs font-bold px-5 py-3 block ' +
                                    (openTab === 1
                                        ? 'text-gray-800'
                                        : 'text-gray-400')
                                }
                                onClick={(e) => {
                                    setOpenTab(1)
                                }}
                            >
                                <span className="material-symbols-rounded block">
                                    home
                                </span>
                                <label>홈</label>
                            </Link>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <Link
                                to="tagsearch"
                                className={
                                    'text-xs font-bold px-5 py-3 block ' +
                                    (openTab === 2
                                        ? 'text-gray-800'
                                        : 'text-gray-400')
                                }
                                onClick={(e) => {
                                    setOpenTab(2)
                                }}
                            >
                                <span className="material-symbols-rounded block">
                                    tag
                                </span>
                                <label>태그검색</label>
                            </Link>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <Link
                                to="mywebtoon"
                                className={
                                    'text-xs font-bold px-5 py-3 block ' +
                                    (openTab === 3
                                        ? 'text-gray-800'
                                        : 'text-gray-400')
                                }
                                onClick={(e) => {
                                    setOpenTab(3)
                                }}
                            >
                                <span className="material-symbols-rounded block">
                                    sentiment_satisfied
                                </span>
                                <label>My웹툰</label>
                            </Link>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <Link
                                to="more"
                                className={
                                    'text-xs font-bold px-5 py-3 block ' +
                                    (openTab === 4
                                        ? 'text-gray-800'
                                        : 'text-gray-400')
                                }
                                onClick={(e) => {
                                    setOpenTab(4)
                                }}
                            >
                                <span className="material-symbols-rounded block">
                                    grid_view
                                </span>
                                <label>더보기</label>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Navbar
{
    /* <div className="static">
    
    <div className="fixed z-10 bottom-0 items-center w-full border-t border-gray-300 bg-white lg:h-16" id="navbar">
        <ul className="flex flex-row justify-around mt-4 mb-4 font-semibold lg:space-x-8">
            <li className="items-center">
                <Link to="" id="homeLink" className="text-gray-800 block py-2 hover:border-b hover:border-gray-800 lg:hover:bg-transparent lg:border-0 lg:hover:text-violet-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                    <span className="material-symbols-rounded">home</span>
                    홈
                </Link>
            </li>
            <li>
                <Link to="tagsearch" className="text-gray-400 block py-2 hover:border-b hover:border-gray-800 lg:hover:bg-transparent lg:border-0 lg:hover:text-violet-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                    <span className="material-symbols-rounded">tag</span>
                    태그검색
                </Link>
            </li>
            <li>
                <Link to="mywebtoon" className="block py-2 text-gray-400 hover:border-b hover:border-gray-800 lg:hover:bg-transparent lg:border-0 lg:hover:text-violet-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                    <span className="material-symbols-rounded">sentiment_satisfied</span>
                    My웹툰
                </Link>
            </li>
            <li>
                <Link to="more" className="block py-2 text-gray-400 hover:border-b hover:border-gray-800 lg:hover:bg-transparent lg:border-0 lg:hover:text-violet-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                    <span className="material-symbols-rounded">grid_view</span>
                    더보기
                </Link>
            </li>

        </ul>
    </div>
</div> */
}
