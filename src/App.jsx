import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/title/Title'
import About from './components/About/About'
import Campus from './components/campus/Campus'
import Testimonials from './components/testimonials/Testimonials'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'
import Videoplayer from './components/videoPlayer/Videoplayer'

const App = () => {
  const[playstate , setPlaystate] = useState(false)
  return (
    <div>
      < Navbar/>
      <Hero/>
      <div className='container'>
      <Title subTitle ='Our Program' Title='What We Offer'/>
      <Programs/>
      <About setPlaystate={setPlaystate}/>
      <Title subTitle ='Gallery' Title='Campus Photos'/>
      <Campus/>
      <Title subTitle ='Testimonials' Title='What Student Says?'/>
      <Testimonials/>
      <Title subTitle ='Contact Us' Title='Get in Touch'/>
      <Contacts/>
      <Footer/>
      </div>
      <Videoplayer playstate={playstate} setPlaystate={setPlaystate}/>
    </div>
  )
}

export default App
