import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import Hero from '../components/hero'
import About from '../components/About'

createRoot(document.getElementById('heroSection')).render(
  <StrictMode>
    <Hero/>
  </StrictMode>,
)

createRoot(document.getElementById('cardContainer')).render(
  <About />
)