import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPages from './pages/LoginPages'
import Signup from './pages/SignupPages'
import HomePages from './pages/HomePages'
import TagSearchPages from './pages/TagSearchPages'
import MyWebtoonPages from './pages/MyWebtoonPages'
import MorePages from './pages/MorePages'
import Welcome from './pages/WelcomePages'

import RequireAuth from './components/common/RequireAuth'
import Header from './components/common/header'
import Navbar from './components/common/navbar'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          {/* public routes */}
          <Route path="login" element={<LoginPages />} />
          <Route path="signup" element={<Signup />} />
          <Route path="/*" element={<HomePages />} />
          <Route path="tagsearch" element={<TagSearchPages />} />
          <Route path="mywebtoon" element={<MyWebtoonPages />} />
          <Route path="more" element={<MorePages />} />

          {/* protected routes */}
            <Route path="welcome" element={<Welcome />} />
          {/* <Route element={<RequireAuth />}>
          </Route> */}

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
