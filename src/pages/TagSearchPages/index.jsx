import { useRef, useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { setCredentials } from '../../store/slices/authSlice'
import { useLoginMutation } from '../../store/apis/authApiSlice'
import PageTitle from '../../components/common/pageTitle'


const TagSearchPages = () => {
  const tagRef = useRef()
  const errRef = useRef()
  const [tag, setTag] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const navigate = useNavigate()

  const [login, { isLoading }] = useLoginMutation()
  const dispatch = useDispatch()

  useEffect(() => {
    tagRef.current.focus()
  }, [])

  useEffect(() => {
      setErrMsg('')
  }, [tag])

  const handleSubmit = async (e) => {
      e.preventDefault()

      try { // 태그 검색

          navigate('/tagsearch')
      } catch (err) {
          if (!err?.originalStatus) {
              // isLoading: true until timeout occurs
              setErrMsg('No Server Response');
          } else if (err.originalStatus === 400) {
              setErrMsg('Missing tag');
          } else if (err.originalStatus === 401) {
              setErrMsg('Unauthorized');
          } else {
              setErrMsg(' Failed');
          }
          errRef.current.focus();
      }
  }

  const handleTagInput = (e) => setTag(e.target.value)


  const content = isLoading ? <h1>Loading...</h1> : (
      <section className="tagsearch">
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

          <PageTitle title="태그검색" />
          <form onSubmit={handleSubmit} className="content">
              <input
                  type="text"
                  id="tag"
                  ref={tagRef}
                  value={tag}
                  placeholder="태그를 입력하세요"
                  onChange={handleTagInput}
                  autoComplete="off"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
              />
              <button className="bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-700 focus:outline-none focus:ring focus:ring-black-300 p-2 rounded-3xl">
                  검색
              </button>
              <label className="font-bold text-lg border-b border-gray-300 p-2">태그 검색결과</label>

          </form>
      </section>
  )

  return content
  
}

export default TagSearchPages
