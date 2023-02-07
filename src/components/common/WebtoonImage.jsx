import { Link } from 'react-router-dom'
import LikeButton from './LikeButton'

const WebtoonImage = ({ likeExist, webtoon }) => {
    if (likeExist == true) {
        return (
            <div className="flex flex-col relative">
                <Link to={`/webtoon/${webtoon.id}`} className="relative">
                    {/* "../../../img/poster.jpg" */}
                    <img className="rounded-lg" src={webtoon.header_img} />
                </Link>
                <LikeButton type="topRight" like={webtoon.like} />
                {/*  absolute top-0 right-0 */}
                <label className="text-sm">{webtoon.title}</label>
                <label className="text-xs text-gray-300">
                    {webtoon.creator}
                </label>
            </div>
        )
    } else {
        return (
            <div className="flex flex-col">
                <Link to={`/webtoon/${webtoon.id}`} className="relative">
                    <img className="rounded-lg" src="../../../img/poster.jpg" />
                </Link>
                {/*  absolute top-0 right-0 */}
                <label className="text-sm">{webtoon.title}</label>
                <label className="text-xs text-gray-300">
                    {webtoon.creator}
                </label>
            </div>
        )
    }
}

export default WebtoonImage
