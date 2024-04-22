import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero' 
import ImgSection from './components/ImgSection'
import NewSection from './components/NewSection'
import AnotherSection from './components/AnotherSection'
import KeepInTouch from './components/KeepInTouch'
import SayWhat from './components/SayWhat'
import TransformB from './components/TransformB'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
        <NavBar />
        <Hero />
        <ImgSection />
        <NewSection />
        <AnotherSection />
        <KeepInTouch />
        <SayWhat />
        <TransformB />
        <Footer />
    </div>
  )
}

export default App
