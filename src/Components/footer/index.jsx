import React from 'react'
import './footer.css'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import useScrollToTop from '../ScrollToTop'
const Footer = () => {
  useScrollToTop();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-logo">
          <Link className="link" to="/"><img src={Logo} alt="Company Logo" /></Link>
          <p>Shaping technology for the future</p>
          <div className="social-icons">
            <div className='icon-box'> <i className="fab fa-facebook-f"></i></div>
            <div className='icon-box'> <i className="fab fa-twitter"></i></div>
            <div className='icon-box'> <i className="fab fa-instagram"></i></div>
            <div className='icon-box'>  <i className="fab fa-linkedin-in"></i></div>
          </div>
        </div>
        
        <div className="footer-section">
          <h2 className="footer-heading">Services</h2>
          <ul className="footer-list">
            <li><Link className="link" to="/web-dev">Web Development</Link></li>
            <li><Link className="link" to="/ui-ux">Ui & Ux</Link></li>
            <li><Link className="link" to="/ui-ux">Site Audit</Link></li>
            <li><Link className="link" to="/digital-marketing">Digital Marketing</Link></li>
            <li><Link className="link" to="/digital-marketing">Social Media Marketing</Link></li>
            <li><Link className="link" to="/digital-marketing">Google Ads</Link></li>
            <li><Link className="link" to="/seo-service">Technical SEO</Link></li>
            <li><Link className="link" to="/seo-service">SEO Content Writing</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2 className="footer-heading">Get in touch</h2>
          <ul className="footer-list">
            <li>+92 326 9411582</li>
            <li>info@evibessolutions.com</li>
            <hr />
            <li>Lahore, Pakistan</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2 className="footer-heading">Join Our Newsletter</h2>
          <div className='newsletter-btn'>
            <input type="email" placeholder='Email'/>
            <button>Submit</button>
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



