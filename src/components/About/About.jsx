import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlaystate}) => {
  return (
    <div className='about'>
       <div className="about-left">
          <img src={about_img} alt='no video playing image' className='about-img'/>
          <img src={play_icon} alt='no play icon' className='play-icon' onClick={()=>{setPlaystate(true)}}/>
       </div>
       <div className="about-right">
         <h3>ABOUT UNIVERSITY</h3>
         <h2>Nurturing Tomorrow's Leaders Today</h2>
         <p>At [University Name], we prioritize academic excellence and encourage a culture of inquiry and research. Our faculty comprises accomplished scholars and industry experts who are passionate about teaching and mentoring students. </p>
         <p> Through internships, workshops, and research programs, we equip our students with practical skills that enhance their employability and prepare them for a competitive job market.</p>
         <p>Beyond academics, [University Name] emphasizes the importance of community engagement and global citizenship. We encourage students to participate in various extracurricular activities, including clubs, sports, and volunteer programs, fostering a sense of belonging and teamwork.</p>
       </div>
    </div>
  )
}

export default About
