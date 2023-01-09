import React, { useContext } from 'react'
import Boost from './components/Boost'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Statistics from './components/Statistics'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SignUpForm from './components/Auth/SignUpForm'
import AuthContext from './store/AuthContext'

function App() {
  const ctx = useContext(AuthContext)

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/sign-in" />} />
      {ctx.isLoggedIn && (
        <Route
          path="/homepage"
          element={
            <main>
              <HeroSection />
              <Statistics />
              <Boost />
              <Footer />
            </main>
          }
        />
      )}
      <Route path="/sign-in" element={<SignUpForm signedUp={false} />} />
      <Route path="/login" element={<SignUpForm signedUp={true} />} />
      <Route path="*" element={<Navigate to="/sign-in" />} />
    </Routes>
  )
}

export default App
