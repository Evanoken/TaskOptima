import React from 'react'
import Home from './pages/Home/Home.jsx'
import Register from './pages/Register/Register.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login.jsx'
import Forgotpassword from './pages/Login/Forgotpassword.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Calendar from './pages/Calendar/Calendar.jsx'
import Tasks from './tasks.jsx'
import Settings from './pages/Settings/Settings.jsx'
import Projects from "./pages/Projects/Projects.jsx";
import Messages from "./pages/Messages/Messages.jsx";
import Members from './pages/Members/Members.jsx'
function App() {
  return (
    <div>
      <Router>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/messages" element={<Messages/>}/>
          <Route path="/members" element={<Members/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App