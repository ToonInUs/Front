import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const a = b
    return (
        <header>
            <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
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
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="login"
                            className="text-white dark:text-white hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                        >
                            Log in
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
