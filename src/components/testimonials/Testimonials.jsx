import React, { useState } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user1 from '../../assets/user-1.png';
import user2 from '../../assets/user-2.png';
import user3 from '../../assets/user-3.png';
import user4 from '../../assets/user-4.png';

const Testimonials = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Eleven Patrick",
      location: "Edusity, USA",
      message: "The quality of their service exceeded my expectations, and they completed everything on time. I highly recommend [Company Name] to anyone looking for reliable and top-notch service. I look forward to working with them again in the future!",
      image: user1,
    },
    {
      name: "Smith John",
      location: "Edusity, USA",
      message: "The quality of their service exceeded my expectations, and they completed everything on time. I highly recommend [Company Name] to anyone looking for reliable and top-notch service. I look forward to working with them again in the future!",
      image: user2,
    },
    {
      name: "Rebecca William",
      location: "Edusity, USA",
      message: "The quality of their service exceeded my expectations, and they completed everything on time. I highly recommend [Company Name] to anyone looking for reliable and top-notch service. I look forward to working with them again in the future!",
      image: user3,
    },
    {
      name: "Harris John",
      location: "Edusity, USA",
      message: "The quality of their service exceeded my expectations, and they completed everything on time. I highly recommend [Company Name] to anyone looking for reliable and top-notch service. I look forward to working with them again in the future!",
      image: user4,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className='testimonials'>
      <img src={next_icon} alt='Next' className='next-btn' onClick={nextTestimonial} />
      <img src={back_icon} alt='Back' className='back-btn' onClick={prevTestimonial} />
      
      <div className="sliders">
        <ul style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 0.5s ease-in-out' }}>
          {testimonials.map((testimonial, index) => (
            <li key={index}>
              <div className="slide">
                <div className="userinfo">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div>
                    <h3>{testimonial.name}</h3>
                    <span>{testimonial.location}</span>
                  </div>
                  <p>{testimonial.message}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
