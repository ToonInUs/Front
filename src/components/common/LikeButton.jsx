import React, { useState } from 'react'

const LikeButton = () => {
    const [isLiked, setisLiked] = useState(false)
    function likeToggler() {
        {
            isLiked ? setisLiked(false) : setisLiked(true)
        }
    }
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
}

export default LikeButton
