import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { setCredentials } from '../../store/slices/authSlice'
import { useSignupMutation } from '../../store/apis/authApiSlice'

import PageTitle from '../../components/common/PageTitle'

const Signup = () => {
    const userRef = useRef()
    const errRef = useRef()
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [repwd, setRepwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const navigate = useNavigate()

    const [signup, { isLoading }] = useSignupMutation()
    const dispatch = useDispatch()

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])

    // 비밀번호 재입력 확인
    // https://velog.io/@zlekfl0311/Web-React13Controlled-Component 유효성검사 onBlur

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            // 회원가입 성공
            signup({ email: email, username: user, password: pwd })
            // const userData = await signup({ user, pwd }).unwrap()
            // dispatch(setCredentials({ ...userData, user }))
            setUser('')
            setEmail('')
            setPwd('')
            setRepwd('')
            navigate('/welcome') // welcome 페이지로 이동 후 관심태그 설정하도록 유도
        } catch (err) {
            if (!err?.originalStatus) {
                // isLoading: true until timeout occurs
                setErrMsg('No Server Response')
            } else if (err.originalStatus === 400) {
                setErrMsg('Missing Username or Password') // ?
            } else if (err.originalStatus === 401) {
                setErrMsg('Unauthorized')
            } else {
                setErrMsg('signup Failed')
            }
            errRef.current.focus()
        }
    }

    const handleUserInput = (e) => setUser(e.target.value)

    const handleEmailInput = (e) => setEmail(e.target.value)

    const handlePwdInput = (e) => setPwd(e.target.value)

    const handleRepwdInput = (e) => {
        setRepwd(e.target.value)
    }

    const handleRepwdCheck = (e) => {
        if (pwd == repwd) {
            return
        } else {
            alert('비밀번호가 다릅니다.')
        }
    }

    const content = isLoading ? (
        <h1>Loading...</h1>
    ) : (
        <section className="signup">
            <p
                ref={errRef}
                className={errMsg ? 'errmsg' : 'offscreen'}
                aria-live="assertive"
            >
                {errMsg}
            </p>

            {/* title */}
            <PageTitle title="회원가입" />

            <form onSubmit={handleSubmit}>
                <label
                    htmlFor="username"
                    className="text-gray-900 dark:text-white"
                >
                    닉네임🔸
                </label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    value={user}
                    placeholder="닉네임"
                    onChange={handleUserInput}
                    autoComplete="off"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                />
                <button
                    type="button"
                    className="text-sm w-18 bg-gray-200 ml-auto p-2 rounded-3xl hover:bg-gray-300 active:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-100"
                >
                    중복확인
                </button>
                <label
                    htmlFor="username"
                    className="text-gray-900 dark:text-white"
                >
                    아이디🔸
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    placeholder="이메일"
                    onChange={handleEmailInput}
                    autoComplete="off"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                />
                <button
                    type="button"
                    className="text-sm w-18 bg-gray-200 ml-auto p-2 rounded-3xl hover:bg-gray-300 active:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-100"
                >
                    중복확인
                </button>
                <label
                    htmlFor="password"
                    className="text-gray-900 dark:text-white"
                >
                    비밀번호🔸
                </label>
                <input
                    type="password"
                    id="password"
                    value={pwd}
                    placeholder="숫자, 영문 조합 8~30자"
                    onChange={handlePwdInput}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                />
                <input
                    type="password"
                    value={repwd}
                    placeholder="비밀번호 재입력"
                    onChange={handleRepwdInput}
                    onBlur={handleRepwdCheck}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                />

                {/* 약관동의 */}
                <ul>
                    <li>
                        [필수]약관1
                        <a
                            href=""
                            target="_blank"
                            className="border-b border-gray-800"
                        >
                            자세히보기
                        </a>
                    </li>
                    <li>
                        [필수]약관2
                        <a
                            href=""
                            target="_blank"
                            className="border-b border-gray-800"
                        >
                            자세히보기
                        </a>
                    </li>
                    <li>[필수]약관3</li>
                </ul>

                <button className="bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-700 focus:outline-none focus:ring focus:ring-black-300 p-2 rounded-3xl">
                    회원가입
                </button>
            </form>
        </section>
    )

    return content
}

export default Signup
