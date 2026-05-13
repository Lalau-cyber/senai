import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrouwserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrouwserRouter>
     <App />
    </BrouwserRouter>
  </StrictMode>,
)
