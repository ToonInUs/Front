import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPages from './pages/LoginPages'
import Signup from './pages/SignupPages'
import HomePages from './pages/HomePages'
import TagSearchPages from './pages/TagSearchPages'
import SearchPages from './pages/SearchPages'
import MyWebtoonPages from './pages/MyWebtoonPages'
import MorePages from './pages/MorePages'
import Welcome from './pages/WelcomePages'
import Rename from './pages/RenamePages'

import RequireAuth from './components/common/RequireAuth'
import Header from './components/common/Header'
import Navbar from './components/common/Navbar'
import NoticePage from './pages/MorePages/NoticePage'
import SettingPage from './pages/MorePages/SettingPage'
import DetailPages from './pages/DetailPages'
import EditTagPages from './pages/EditTagPages'

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
                    <Route
                        path="tagsearch/:tagid"
                        element={<TagSearchPages />}
                    />
                    <Route path="search" element={<SearchPages />} />
                    <Route path="search/:text" element={<SearchPages />} />
                    <Route path="mywebtoon" element={<MyWebtoonPages />} />
                    <Route path="edittag" element={<EditTagPages />} />
                    <Route path="more" element={<MorePages />} />
                    <Route path="more/notice" element={<NoticePage />} />
                    <Route path="more/setting" element={<SettingPage />} />
                    <Route path="webtoon/:id" element={<DetailPages />} />

                    {/* protected routes */}
                    <Route path="welcome" element={<Welcome />} />
                    <Route path="more/username" element={<Rename />} />
                    {/* <Route element={<RequireAuth />}>
          </Route> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
