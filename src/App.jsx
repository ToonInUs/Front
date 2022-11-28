import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePages from './pages/HomePages'
import LoginPages from './pages/LoginPages'
import Welcome from './pages/WelcomePages'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* public routes */}
        <Route path="/*" element={<HomePages />} />
        <Route path="login" element={<LoginPages />} />

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="welcome" element={<Welcome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
