import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import AppNavbar from './AppNavbar.jsx'
import { BrowserRouter } from 'react-router-dom'
import './assets/all.scss'
import './app.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <AppNavbar />
    </BrowserRouter>

  </React.StrictMode>,
)
