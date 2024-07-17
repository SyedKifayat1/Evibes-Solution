import React from 'react'
import './contact-us-details.css'
const ContactUsDetails = () => {
  return (
    <section className='contact-us-details'>
        <div className='contact-details-card'>
            <div className="contact-details-icon"><i class="fa-solid fa-2x fa-headset"></i></div>
            <h3>Help & Support</h3>
            <p>Email info@syedkifayat.online​ for help with a current product or service or refer to FAQs.</p>
        </div>
        <div className='contact-details-card'>
            <div className="contact-details-icon"><i class="fa-solid fa-2x fa-phone-volume"></i></div>
            <h3>Call Us</h3>
            <p>Call us to speak to a member of our team.</p>
            <span style={{color:"blue"}}>+92311 8120088</span>
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