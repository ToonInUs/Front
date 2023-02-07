import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    const [isBlured, setisBlured] = useState(true)
    const [search, setSearch] = useState('')
    const navigate = useNavigate()
    function handleSubmit() {
        navigate(`/search/${search}`)
    }

    function handleBlur() {
        setisBlured(true)
    }
    function handleFocus() {
        setisBlured(false)
    }
    const handleSearchInput = (e) => setSearch(e.target.value)

    return (
        <header>
            <section>
                <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                    {/*  justify-between */}
                    <div className="flex flex-wrap items-center mx-auto max-w-screen-xl">
                        <Link to="" className="flex items-center">
                            <img
                                src="../../tooninus_logo.png"
                                className="mr-3 h-6 sm:h-9"
                                alt="Flowbite Logo"
                            />
                            <span className="self-center text-white text-xl font-semibold whitespace-nowrap dark:text-white">
                                ToonUnUs
                            </span>
                        </Link>
                        <div className="flex ml-auto">
                            <form onSubmit={handleSubmit}>
                                <label
                                    htmlFor="search"
                                    className="mb-2 text-sm font-medium text-gray-800 sr-only dark:text-white"
                                >
                                    Search
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg
                                            aria-hidden="true"
                                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <input
                                        type="search"
                                        id="search"
                                        onChange={handleSearchInput}
                                        value={search}
                                        onBlur={handleBlur}
                                        onFocus={handleFocus}
                                        className="w-20 focus:w-40 p-2 pl-10 pr-14 text-sm text-gray-800 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="제목, 작가...검색"
                                    />
                                    <button
                                        type="submit"
                                        className="text-gray-800 absolute right-1.5 bg-none focus:font-bold focus:outline-none font-medium rounded-3xl text-sm px-2 py-2"
                                    >
                                        검색
                                    </button>
                                    {/* x */}
                                </div>
                            </form>
                            <div
                                className={
                                    (isBlured ? 'show' : 'hidden') +
                                    ' flex items-center lg:order-2'
                                }
                            >
                                <Link
                                    to="login"
                                    className="text-white dark:text-white hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                                >
                                    Log in
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>
        </header>
    )
}

export default Header
