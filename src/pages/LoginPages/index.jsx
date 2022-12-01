import { useRef, useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { setCredentials } from '../../store/slices/authSlice'
import { useLoginMutation } from '../../store/apis/authApiSlice'

import PageTitle from '../../components/common/pageTitle'

const Login = () => {
    const userRef = useRef()
    const errRef = useRef()
    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const navigate = useNavigate()

    const [login, { isLoading }] = useLoginMutation()
    const dispatch = useDispatch()

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try { // 로그인 성공
            const userData = await login({ user, pwd }).unwrap()
            dispatch(setCredentials({ ...userData, user }))
            setUser('')
            setPwd('')
            navigate('/')
        } catch (err) {
            if (!err?.originalStatus) {
                // isLoading: true until timeout occurs
                setErrMsg('No Server Response');
            } else if (err.originalStatus === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.originalStatus === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    const handleUserInput = (e) => setUser(e.target.value)

    const handlePwdInput = (e) => setPwd(e.target.value)

    const content = isLoading ? <h1>Loading...</h1> : (
        <section className="login">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

            {/* title */}
            {/* <h1>로그인</h1> */}
            <PageTitle title="로그인" />

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    value={user}
                    placeholder="이메일 아이디"
                    onChange={handleUserInput}
                    autoComplete="off"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                />

                <input
                    type="password"
                    id="password"
                    value={pwd}
                    placeholder="비밀번호"
                    onChange={handlePwdInput}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                />
                <button className="bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-700 focus:outline-none focus:ring focus:ring-black-300">
                    로그인
                </button>
                {/* type="button" 으로 설정하면 submit을 막을 수 있다 */}
                <button type="button" className="bg-gray-100 text-black hover:bg-gray-200 active:bg-gray-200 focus:outline-none focus:ring focus:ring-black-200">
                    {/* block 속성으로 Link가 버튼 전체를 차지하도록함. 버튼 아무데나 눌러도 Link 동작 */}
                    <Link to="/signup" className="block bg-gray-100 text-black hover:bg-gray-200 active:bg-gray-200 focus:outline-none focus:ring focus:ring-black-200">
                        회원가입
                    </Link>
                </button>

            </form>

        </section>
    )

    return content
}
export default Login