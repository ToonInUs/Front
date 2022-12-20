import { useRef, useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { setCredentials } from '../../store/slices/authSlice'
import { useLoginMutation } from '../../store/apis/authApiSlice'

import PageTitle from '../../components/common/PageTitle'

const Rename = () => {
    const userRef = useRef()
    const errRef = useRef()
    const [user, setUser] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const navigate = useNavigate()

    const [login, { isLoading }] = useLoginMutation()
    const dispatch = useDispatch()

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            //

            setUser('')
            navigate('/more')
        } catch (err) {
            if (!err?.originalStatus) {
                // isLoading: true until timeout occurs
                setErrMsg('No Server Response')
            } else if (err.originalStatus === 400) {
                setErrMsg('Missing Username')
            } else if (err.originalStatus === 401) {
                setErrMsg('Unauthorized')
            } else {
                setErrMsg(' Failed')
            }
            errRef.current.focus()
        }
    }

    const handleUserInput = (e) => setUser(e.target.value)

    const content = isLoading ? (
        <h1>Loading...</h1>
    ) : (
        <section className="rename">
            <p
                ref={errRef}
                className={errMsg ? 'errmsg' : 'offscreen'}
                aria-live="assertive"
            >
                {errMsg}
            </p>

            <PageTitle title="프로필 수정" />

            <form onSubmit={handleSubmit}>
                <label className="font-bold text-lg">{} 님</label>
                <label>변경할 닉네임을 입력해주세요.</label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    value={user}
                    placeholder="숫자, 영문 조합 8~30자"
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
                <button className="bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-700 focus:outline-none focus:ring focus:ring-black-300 p-2 rounded-3xl">
                    변경하기
                </button>
            </form>
        </section>
    )

    return content
}
export default Rename
