import React, { useState } from 'react'

const LikeButton = ({ type }) => {
    const [isLiked, setisLiked] = useState(false)
    function likeToggler() {
        {
            isLiked ? setisLiked(false) : setisLiked(true)
        }
    }
    if (type == null) {
        return (
            <button
                id="btn"
                onClick={likeToggler}
                className={
                    (isLiked ? 'text-red-400 ' : 'text-gray-300 ') +
                    'inline ml-3 mr-2'
                }
            >
                <span
                    className="material-symbols-rounded "
                    id={isLiked ? 'likeBtn' : ''}
                >
                    favorite
                </span>
            </button>
        )
    } else if (type == 'topRight') {
        return (
            <button
                id="btn"
                onClick={likeToggler}
                className={
                    (isLiked ? 'text-red-400 ' : 'text-white ') +
                    'inline ml-3 mr-2 absolute top-1 right-0'
                }
            >
                <span
                    className="material-symbols-rounded "
                    id={isLiked ? 'likeBtn' : ''}
                >
                    favorite
                </span>
            </button>
        )
    }
}

export default LikeButton
