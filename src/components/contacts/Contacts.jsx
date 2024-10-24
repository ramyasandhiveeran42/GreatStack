import React, { useState } from 'react'
import './Contacts.css'
import msg_icon from '../../assets/msg-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import location_icon from '../../assets/location-icon.png'
import whiteArrow from '../../assets/white-arrow.png'


const Contacts = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "ae84d0dd-e9ca-40b1-8801-a284ff584656");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className='contact'>
        <div className="contact-col">
          <h3>Send us a Message <img src={msg_icon} alt='' className='h3img'/></h3>
          <p>We would love to hear from you! Whether you have questions about our programs, need assistance, or just want to provide feedback, our team is here to help. Please feel free to reach out to us using the contact form below or through our social media channels.Thank you for considering us, and we look forward to connecting with you soon!</p>
          <ul>
            <li className='contact-item'><img src={phone_icon} alt=''/>contact@gmail.com</li>
            <li className='contact-item'><img src={mail_icon}/>+1 654 345 765</li>
            <li className='contact-item'><img src={location_icon}/>Ticel Park taramani</li>
          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type='text' name='name' placeholder='Enter Your Name' required/>
            <label>Phone Number</label>
            <input type='number' name='phone' placeholder='Enter Your Mobile Number' required/>
            <label>Write your Messages here</label>
            <textarea name='message' rows='6' placeholder='Enter Your Message' required></textarea>
            <button type='submit' className='btn dark-btn margin'>Submit Now <img src={whiteArrow} alt=''/></button>
          </form>
          <span>{result}</span>
        </div>
    </div>
  )
}

export default Contacts
