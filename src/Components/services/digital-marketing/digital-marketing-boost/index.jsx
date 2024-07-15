import React from 'react'
import './digital-marketing-boost.css'
import DigitalMarketingImg from "../../../assets/15917681.jpg"
const DigitalMarketingBoost = () => {
  return (
    <section className="digital-marketing-boost">
      <div className="digital-marketing-content">
        <h4>Elevate Your Brand</h4>
        <h1>Elevate Your Digital Presence</h1>
        <p>At Mostly Digital, we specialize in creating user-friendly websites tailored to meet your needs. Our team of experienced developers and designers work collaboratively to craft websites that not only look amazing but also deliver exceptional performance.</p>
        <ul>
          <li>Innovative techniques to stay ahead</li>
          <li>Tailored solutions for your business needs</li>
          <li>Proven strategies for maximum impact</li>
        </ul>
        <button className="digital-marketing-button">Unock Your Digital Potential</button>
      </div>
      <div className="digital-marketing-image">
        <img src={DigitalMarketingImg} alt="SEO Boost" />
      </div>
    </section>
  )
}

export default DigitalMarketingBoost