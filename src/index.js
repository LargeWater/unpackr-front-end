import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import BottomNav from './components/BottomNav/BottomNav'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <BottomNav />
      <App />
    </Router>
  </React.StrictMode>
)
