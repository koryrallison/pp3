import React from 'react'
import './pages/Home.jsx'
import Home from './pages/Home.jsx'
import ContactUs from './pages/ContactUs.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  return (
    

      <Router>
        <Switch>
        <div className="App">

          <Route exact path="/"><Home /></Route>
          <Route path="/contactus"><ContactUs /></Route>
        </div>
        </Switch>
      </Router>
    
  )
}

export default App
