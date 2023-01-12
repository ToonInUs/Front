import { Link } from 'react-router-dom'
import LikeButton from './LikeButton'

const WebtoonImage = ({ webtoon }) => {
    return (
        <div className="flex flex-col relative">
            <Link to="/" className="relative">
                <img className="rounded-xl" src="../../../img/poster.jpg" />
            </Link>
            <LikeButton type="topRight" />
            {/*  absolute top-0 right-0 */}
            <label className="text-sm">{webtoon.title}</label>
            <label className="text-sm text-gray-400">{webtoon.creator}</label>
        </div>
    )
}

export default WebtoonImage
