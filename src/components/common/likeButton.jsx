import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
            className={(isLiked ? 'text-red-400 ' : '') + 'inline ml-3 mr-2'}
        >
            <span
                className="material-symbols-rounded"
                id={isLiked ? 'likeBtn' : ''}
            >
                favorite
            </span>
        </button>
    )
}

export default LikeButton
