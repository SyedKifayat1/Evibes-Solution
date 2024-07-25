import React from 'react';
import './seo-boost.css';
import SEOBoostImg from '../../../assets/1231.jpg';

const SEOBoost = () => {
  return (
    <section className="seo-boost">
      <div className="seo-content">
        <h4>Your SEO Partner</h4>
        <h1>Boost Your Online Presence</h1>
        <p>At Evibes Solutions, we understand the importance of search engine optimization for businesses in today’s digital age. Our team of SEO experts stays up to date with the latest trends and techniques to provide you with the best results. Here’s why you should choose us for your SEO needs:</p>
        <ul>
          <li>Proven Results for Businesses of All Sizes</li>
          <li>Timely Results to Meet Your Business Goals</li>
          <li>Customized Approach for Your Unique Needs</li>
        </ul>
        <button className="seo-button">Get Your Free SEO Audit Today</button>
      </div>
      <div className="seo-image">
        <img src={SEOBoostImg} alt="SEO Boost" />
      </div>
    </section>
  );
};

export default SEOBoost;
