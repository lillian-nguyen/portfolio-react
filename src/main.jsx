import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Hero from '../components/hero'
import About from '../components/About'
import { ProjectContent } from '../components/Project'

createRoot(document.getElementById('heroSection')).render(
  <StrictMode>
    <Hero/>
  </StrictMode>,
)

createRoot(document.getElementById('cardContainer')).render(
  <About 
    sectionTitle="Hi! I'm Lillian"
    showSelfie={true}
    paragraph1="I’m a full-stack software engineer dedicated to building websites and applications that serve my local community. My background in biology and healthcare brings a strong foundation in analytical thinking, problem-solving, and collaboration to every project. I develop client solutions that blend accessibility, aesthetics, and engaging user experiences, primarily using HTML, CSS, and JavaScript."
    paragraph2="When I'm not coding, you can find me baking sweet treats, going for a run, or diving into a good book - all of which spark joy and fuel my creativity. Let's connect and bring your vision to life!"
    classification="about"/>
)

createRoot(document.getElementById('projectsContainer')).render(
  <>
      <ProjectContent 
        sectionTitle="Projects" 
        projectName="Cocktail DB" 
        videoSrc="src/assets/cocktaildb.mp4" 
        projectBlurb="Intuitive platform for exploring cocktail recipes using API integration"
        technologies={[
          {imgSrc: 'src/assets/css-icon.svg', name: 'CSS'},
          {imgSrc: 'src/assets/js-icon.svg', name: 'Javascript'}
        ]}
        />
       
      <ProjectContent 
        projectName="Venture Weavers" 
        videoSrc="src/assets/ventureweavers.mp4" 
        projectBlurb="Increasing client visability with a polished presentation of services"
        technologies={[
          {imgSrc: 'src/assets/css-icon.svg', name: 'CSS'},
          {imgSrc: 'src/assets/js-icon.svg', name: 'Javascript'}
        ]}
        />
  </>
)

createRoot(document.getElementById('contactSection')).render(
  <About 
    sectionTitle="Thanks for stopping by!"
    paragraph1="Feel free to reach out with questions or simply say hi! I am currently open to potential collaborations or projects and look forward to connecting with you."
    buttonText="Send a message"
    classification="contact"
    />
)