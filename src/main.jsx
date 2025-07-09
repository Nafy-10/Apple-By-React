import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './commonResource/css/bootstrap.css'
import './commonResource/css/styles.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
