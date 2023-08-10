import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Cliente from './views/cliente/index'
import Dashboard from './views/dashboard/index'
import PageNotFound from './views/404/index'
import AuthService from "./auth-service"

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const [ setCurrentUser] = useState(null)
  const location = useLocation()


  useEffect(() => {
    const user = AuthService.getCurrentUser()

    if (user) {
      setCurrentUser(user)
    }
  }, [location, setCurrentUser])


  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      const user = JSON.parse(storedUser)
      setCurrentUser(user)
    }
  },
  )




  return (
    <>
      <Routes>
        <Route path="/" element={<Cliente.Home />} />
        <Route path="/login" element={<Cliente.Login />} />
        <Route path="/dashboard/*" element={<Dashboard.Home />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App