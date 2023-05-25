import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ResetStyle from './style/ResetStyle.jsx'
import GlobalStyle from './style/GlobalStyle.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />

    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
