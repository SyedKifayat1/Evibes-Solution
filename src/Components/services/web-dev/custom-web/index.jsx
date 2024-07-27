import React from 'react'
import './custom-web.css'
import WebBoostImg from "../../../assets/10276838.jpg"
const CustomWeb = () => {
  return (
    <section className="web-boost">
      <div className="web-content">
        <h4 data-aos="fade-right" data-aos-delay='200'>Custom Websites Design & Development</h4>
        <h1 data-aos="fade-right" data-aos-delay='200'>Custom Websites Built To Convert</h1>
        <p data-aos="fade-up" data-aos-delay='200'>
          At Evibes Development, we work closely with you to understand your unique needs and build websites that are tailored to your specific goals. Our team of experienced developers and designers collaborate to create websites that are both visually stunning and deliver exceptional performance.
        </p>
        <ul data-aos="fade-up" data-aos-delay='200'>
          <li>Customized Solutions</li>
          <li>Optimized Performance</li>
          <li>Enhanced User Experience</li>
        </ul>
        <button className="web-button" data-aos="fade-up" data-aos-delay='200'>Get Custom Proposal</button>
      </div>
      <div className="web-image" data-aos="fade-left" data-aos-delay='200'>
        <img src={WebBoostImg} alt="SEO Boost" />
      </div>
    </section>
  )
}

export default CustomWeb