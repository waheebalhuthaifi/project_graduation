import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import './components/Common/.env'
// import 'dotenv/config'
// import "@fortawesome/fontawesome-free/css/all.min.css";

import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
