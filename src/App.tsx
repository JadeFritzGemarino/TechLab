import './App.css'
import MainContent from './main-content.tsx'
import LoginPage from './login-page.tsx'
import SigninPage from './sign-in.tsx'
import { Link } from "react-router-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <nav className="bg-[#1C1C2E] shadow px-auto py-auto">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16"> 
            <div className="flex">
              <div className="shrink-0 flex items-center">
                <img className="w-30 h-20" src="/tech.png" alt="Hero" />
              </div>
            </div>
            <div className="flex items-center space-x-1 mt-2">
              <Link to="/" className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link to="/courses" className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
                Courses
              </Link>
              <Link to="/login" className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
                Login
              </Link>
                <Link to="/signin" className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
            <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/login" element={<LoginPage />} />
          <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App