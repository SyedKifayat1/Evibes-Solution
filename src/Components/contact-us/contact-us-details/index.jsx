import React from 'react'
import './contact-us-details.css'
const ContactUsDetails = () => {
  return (
    <section className='contact-us-details' data-aos="fade-up">
        <div className='contact-details-card'>
            <div className="contact-details-icon"><i class="fa-solid fa-2x fa-headset"></i></div>
            <h3>Help & Support</h3>
            <p>Email <a href="mailto:info@evibesdevelopment.com" style={{textDecoration:"none"}}>info@evibesdevelopment.com​ </a>for help with a current product or service or refer to FAQs.</p>
        </div>
        <div className='contact-details-card'>
            <div className="contact-details-icon"><i class="fa-solid fa-2x fa-phone-volume"></i></div>
            <h3>Call Us</h3>
            <p>Call us to speak to a member of our team.</p>
            <span style={{color:"blue"}}><a href="tel:+923269411582" style={{textDecoration:"none"}}>+923269411582</a></span>
        </div>
        <div className='contact-details-card'>
            <div className="contact-details-icon"><i class="fa-solid fa-2x fa-location-dot"></i></div>
            <h3>Location</h3>
            <p>Lahore Pakistan</p>
        </div>
    </section>
  )
}

export default ContactUsDetails