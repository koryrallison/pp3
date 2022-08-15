import React from 'react'
import './pages/Home.jsx'
import Home from './pages/Home.jsx'
import ContactUs from './pages/ContactUs.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    

      <Router>
        
        <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </div>
        
      </Router>
    
  )
}

export default App
