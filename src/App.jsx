import React from 'react'
import Home from './pages/Home/Home.jsx'
import Register from './pages/Register/Register.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login.jsx'
import Forgotpassword from './pages/Login/Forgotpassword.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
function App() {
  return (
    <div>
      <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<Forgotpassword/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="*" element={<h1>Not Found</h1>} />
        Route
      </Routes>
    </Router>
    </div>
  )
}

export default App