import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import About from './components/About'
import Contact from './components/Contact.jsx'
import Education from './components/Education'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Tech from './components/Tech'
import Works from './components/Work'
import { StarsCanvas } from './components/canvas'

function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-center bg-no-repeat'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Education />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>

      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
