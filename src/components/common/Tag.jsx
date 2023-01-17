import React from 'react'
import { Link } from 'react-router-dom'

const Tag = ({ tag, index }) => {
    // return (
    //     <Link
    //         to={`/tagsearch/${tag.id}`}
    //         className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300"
    //     >
    //         #{tag.content}
    //     </Link>
    // )

    return (
        <Link to={`/tagsearch/${tag.id}`}>
            <span
                id="badge-dismiss-default"
                key={index}
                className="inline-flex items-center py-1 px-2 mr-2 m-1 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-200 dark:text-blue-800"
            >
                #{tag.content}
            </span>
        </Link>
    )
}

export default Tag
