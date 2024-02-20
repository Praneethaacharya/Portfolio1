
import style from './App.module.css'
import About from './components/About/About.jsx'
import Experience from './components/Experience/Experience.jsx'
import Hero from './components/Hero/Hero.jsx'
import Navbar from './components/Navbar/Navbar'
import Skills from './components/Skills/skills.jsx'
import Projects from './components/Projects/projects'
import Contact from './components/contact/contact.jsx'

function App() {

  return (
    <div className={style.App} >
      <Navbar />
      <Hero/>
      <About/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
