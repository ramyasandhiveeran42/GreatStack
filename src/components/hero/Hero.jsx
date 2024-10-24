import React from 'react'
import './Hero.css'
import darkArrow from'../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1 className='ac'>We Ensure Better Education for a better world !</h1>
        <p className='ac'>Education is the process of acquiring knowledge, skills, values, and understanding through learning and teaching. It helps individuals grow intellectually, socially, and emotionally, preparing them for personal and professional life.</p>
        <div className='ac'>
        <button className='btn'>Explore More <img src={darkArrow} alt='no arrow image'/></button>
        </div>
      </div>
    </div>
  )
}

export default Hero
