import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import Hero from '../components/hero'
import About from '../components/About'
import { ProjectContent } from '../components/Project'

createRoot(document.getElementById('heroSection')).render(
  <StrictMode>
    <Hero/>
  </StrictMode>,
)

createRoot(document.getElementById('cardContainer')).render(
  <About />
)

createRoot(document.getElementById('projectsContainer')).render(
  <>
      {/* <ProjectSectionTitle/> */}
      <ProjectContent 
        sectionTitle="Projects" 
        projectName="Cocktail DB" 
        videoSrc="src/assets/cocktaildb.mp4" 
        projectBlurb="Intuitive platform for exploring cocktail recipes using API integration"/>
      <ProjectContent 
        projectName="Venture Weavers" 
        videoSrc="src/assets/ventureweavers.mp4" projectBlurb="Increasing client visability with a polished presentation of services"/>
  </>
)