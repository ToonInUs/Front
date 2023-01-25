import { Link } from 'react-router-dom'
import LikeButton from './LikeButton'

const WebtoonImage = ({ webtoon }) => {
    return (
        <div className="flex flex-col">
            <Link to={`/webtoon/${webtoon.id}`} className="relative">
                <img className="rounded-lg" src="../../../img/poster.jpg" />
            </Link>
            <LikeButton type="topRight" like={webtoon.like} />
            {/*  absolute top-0 right-0 */}
            <label className="text-sm">{webtoon.title}</label>
            <label className="text-xs text-gray-300">{webtoon.creator}</label>
        </div>
    )
}

export default WebtoonImage
