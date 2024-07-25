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
            <div className='icon-box'><a href="" style={{textDecoration:"none", color:'#fff'}}> <i className="fab fa-facebook-f"></i></a></div>
            <div className='icon-box'> <a href="" style={{textDecoration:"none", color:'#fff'}}><i className="fab fa-twitter"></i></a></div>
            <div className='icon-box'> <a href="" style={{textDecoration:"none", color:'#fff'}}><i className="fab fa-instagram"></i></a></div>
            <div className='icon-box'> <a href="" style={{textDecoration:"none", color:'#fff'}}> <i className="fab fa-linkedin-in"></i></a></div>
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
            <li><a href="tel:+923269411582"><i class="fa-solid fa-phone"></i><span>+92 326 9411582</span></a></li>
            <li><a href="mailto:info@evibesdevelopment.com"><i class="fa-regular fa-envelope"></i><span>info@evibesdevelopment.com</span></a></li>
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



