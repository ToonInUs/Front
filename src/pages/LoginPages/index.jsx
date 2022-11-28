import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { setCredentials } from '../../store/slices/authSlice'
import { useLoginMutation } from '../../store/apis/authApiSlice'

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
            <h1>로그인</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="username">ID:</label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    value={user}
                    placeholder="이메일"
                    onChange={handleUserInput}
                    autoComplete="off"
                    required
                />

                <label htmlFor="password">PW:</label>
                <input
                    type="password"
                    id="password"
                    value={pwd}
                    placeholder="비밀번호"
                    onChange={handlePwdInput}
                    required
                />
                <button class="bg-black-900 hover:bg-black-800 active:bg-black-700 focus:outline-none focus:ring focus:ring-black-300 ...">
                    로그인
                </button>
            </form>
        </section>
    )

    return content
}
export default Login