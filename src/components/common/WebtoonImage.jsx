import { Link } from 'react-router-dom'
import LikeButton from './LikeButton'

const WebtoonImage = ({ webtoon }) => {
    return (
        <div className="flex flex-col">
            <Link to="/">
                <img className="rounded-xl" src="../../../img/poster.jpg" />
            </Link>
            <LikeButton />
            <label className="text-sm">{webtoon.title}</label>
            <label className="text-sm text-gray-400">{webtoon.creator}</label>
        </div>
    )
}

export default WebtoonImage
