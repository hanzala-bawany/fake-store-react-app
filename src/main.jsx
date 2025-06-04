import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import NavBar from "./components/NavBar"
import NavBar2 from "./components/NavBar2"

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>

      < NavBar />
      < NavBar2/>

      <App />

    </BrowserRouter>
  </StrictMode>

)
