import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';

const Navbar = () => {

  const [sticky , setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(()=>{
       window.addEventListener('scroll',()=>{
         window.scrollY > 100 ? setSticky(true) : setSticky(false)
       })
  },[])

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <img src={logo} className='logo' alt='No Image is there'/>
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                &#9776; {/* Hamburger icon */}
            </div>
        <ul className={menuOpen ? 'show' : ''}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-230} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li><Link to='campus' smooth={true} offset={-270} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-250} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-300} duration={500} className='btn'>Contact Us</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
