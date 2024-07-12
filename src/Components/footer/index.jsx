import React from 'react'
import './footer.css'
import Logo from '../assets/logo.png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-logo">
          <img src={Logo} alt="Company Logo" />
        </div>
        <div className="footer-section">
          <h1 className="footer-heading">Company</h1>
          <ul className="footer-list">
            <li>About us</li>
            <li>Services</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-section">
          <h1 className="footer-heading">Services</h1>
          <ul className="footer-list">
            <li>On-Page SEO</li>
            <li>Off-Page SEO</li>
            <li>Site Audit</li>
            <li>Technical SEO</li>
            <li>Social Media Marketing</li>
            <li>Google Ads</li>
            <li>SEO Content Writing</li>
          </ul>
        </div>
        <div className="footer-section">
          <h1 className="footer-heading">Follow Us</h1>
          <div className="social-icons">
            
           <div className='icon-box'> <i className="fab fa-facebook-f"></i></div>
           <div className='icon-box'> <i className="fab fa-twitter"></i></div>
           <div className='icon-box'> <i className="fab fa-instagram"></i></div>
           <div className='icon-box'>  <i className="fab fa-linkedin-in"></i></div>
          </div>
        </div>
      </div>
      <hr />
      <div className='footer-bottom'>
        
        <div>© 2024 Evibes Solution | All Rights Reserved</div>
      </div>
    </footer>
  )
}

export default Footer