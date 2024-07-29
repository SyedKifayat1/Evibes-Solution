import React from 'react'
import './custom-web.css'
import WebBoostImg from "../../../assets/10276838.jpg"
const CustomWeb = () => {
  return (
    <section className="web-boost">
      <div className="web-content">
        <h4 data-aos="flip-right" >Custom Websites Design & Development</h4>
        <h1 data-aos="fade-right" >Custom Websites Built To Convert</h1>
        <p data-aos="fade-right" >
          At Evibes Development, we work closely with you to understand your unique needs and build websites that are tailored to your specific goals. Our team of experienced developers and designers collaborate to create websites that are both visually stunning and deliver exceptional performance.
        </p>
        <ul data-aos="fade-right">
          <li>Customized Solutions</li>
          <li>Optimized Performance</li>
          <li>Enhanced User Experience</li>
        </ul>
        <button className="web-button" data-aos="fade-right">Get Custom Proposal</button>
      </div>
      <div className="web-image" data-aos="fade-right">
        <img src={WebBoostImg} alt="SEO Boost" />
      </div>
    </section>
  )
}

export default CustomWeb