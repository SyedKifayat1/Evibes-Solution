import React from 'react';
import './seo-boost.css';
import SEOBoostImg from '../../../assets/1231.jpg';

const SEOBoost = () => {
  return (
    <section className="seo-boost">
      <div className="seo-content">
        <h4 data-aos="fade-right" data-aos-delay='200'>Your SEO Partner</h4>
        <h1 data-aos="fade-right" data-aos-delay='200'>Boost Your Online Presence</h1>
        <p data-aos="fade-up" data-aos-delay='200'>At Evibes Development, we understand the importance of search engine optimization for businesses in today’s digital age. Our team of SEO experts stays up to date with the latest trends and techniques to provide you with the best results. Here’s why you should choose us for your SEO needs:</p>
        <ul data-aos="fade-up" data-aos-delay='200'>
          <li>Proven Results for Businesses of All Sizes</li>
          <li>Timely Results to Meet Your Business Goals</li>
          <li>Customized Approach for Your Unique Needs</li>
        </ul>
        <button className="seo-button" data-aos="fade-up" data-aos-delay='200'>Get Your Free SEO Audit Today</button>
      </div>
      <div className="seo-image" data-aos="fade-up">
        <img src={SEOBoostImg} alt="SEO Boost" />
      </div>
    </section>
  );
};

export default SEOBoost;
