import { useSelector } from 'react-redux'
import {
    selectCurrentUser,
    selectCurrentToken,
} from '../../store/slices/authSlice'
import { Link } from 'react-router-dom'

const Welcome = () => {
    const user = useSelector(selectCurrentUser)
    const token = useSelector(selectCurrentToken)

    const welcome = user ? `Welcome ${user}!` : 'Welcome!'
    const tokenAbbr = `${token.slice(0, 9)}...`

    const content = (
        <section className="welcome">
            <h1>{welcome}</h1>
            <p>Token: {tokenAbbr}</p>
            <button>
                <Link to="/edittag">취향태그 설정하러 가기</Link>
            </button>
        </section>
    )

    return content
}
export default Welcome
