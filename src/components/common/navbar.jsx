import React from "react"
import { Link, useMatch } from "react-router-dom"

// 글자색 변경하느 코드.. 잘 안되네..
// const homeLink = document.getElementById("homeLink")
// console.dir(homeLink)
// homeLink.className += " text-gray-400"
// const matchHome = useMatch('')
// const matchTagSearch = useMatch('/tagsearch')
// const matchMyWebtoon = useMatch('/mywebtoon')
// const matchMore = useMatch('/more')

const Navbar = () => {


  return (
    <div className="static">
        <div className="absolute bottom-0 items-center w-full border-t border-gray-300 lg:h-16" id="navbar">
            <ul className="flex flex-row justify-around mt-4 mb-4 font-semibold lg:space-x-8">
                <li>
                    <Link to="" id="homeLink" className="block py-2 pr-4 pl-3 hover:border-b hover:border-gray-800 lg:hover:bg-transparent lg:border-0 lg:hover:text-violet-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">홈</Link>
                </li>
                <li>
                    <Link to="tagsearch" className="text-gray-400 block py-2 pr-4 pl-3 hover:border-b hover:border-gray-800 lg:hover:bg-transparent lg:border-0 lg:hover:text-violet-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">태그검색</Link>
                </li>
                <li>
                    <Link to="mywebtoon" className="block py-2 pr-4 pl-3 text-gray-400 hover:border-b hover:border-gray-800 lg:hover:bg-transparent lg:border-0 lg:hover:text-violet-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">My웹툰</Link>
                </li>
                <li>
                    <Link to="more" className="block py-2 pr-4 pl-3 text-gray-400 hover:border-b hover:border-gray-800 lg:hover:bg-transparent lg:border-0 lg:hover:text-violet-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">더보기</Link>
                </li>

            </ul>
        </div>
    </div>
  )
}
export default Navbar