import React from 'react'
import './digital-marketing-boost.css'
import DigitalMarketingImg from "../../../assets/15917681.jpg"
const DigitalMarketingBoost = () => {
  return (
    <section className="digital-marketing-boost">
      <div className="digital-marketing-content">
        <h4>Elevate Your Brand</h4>
        <h1>Elevate Your Digital Presence</h1>
        <p>Evibes Solutions helps you unlock the power of digital marketing to reach your target audience, build brand awareness, and drive results. We develop data-driven strategies, create engaging content, and leverage the latest technologies to ensure your campaigns are effective and impactful. Let us help you achieve your online goals and grow your business.</p>
        <ul>
          <li>We provide Strategic Planning</li>
          <li>Data-Driven Optimization</li>
          <li>Engaging Audience</li>
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