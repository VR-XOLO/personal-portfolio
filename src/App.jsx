import React from 'react'
import Intro from './components/Intro/Intro'
import "./app.scss"
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
const App = () => {
  return (
    <>
     <Intro/>
     <Skills/>
      <Portfolio/>
      <Contact />
      <Footer/>
    </>
  )
}

export default App