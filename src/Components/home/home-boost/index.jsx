import React from 'react';
import './home-boost.css';
import SeoImg from '../../assets/seo-analyze.webp';
import SeoVisitorImg from '../../assets/seo-visitors.webp';
import SeoLikeImg from '../../assets/seo-like.webp';

const HomeBoost = () => {
  return (
    <section className="home-boost">
      <div className="home-boost-text">
        <h1>Boost Traffic and Insights with Website Analytics</h1>
        <p>Maximize your website’s potential and drive meaningful engagement with our targeted digital marketing strategies.</p>
        <p>We specialize in boosting your website traffic and employing sophisticated analytics to refine your marketing efforts and enhance user experience.</p>
        <button>Start Growing Today</button>
      </div>
      <div className="home-boost-images">
        <img src={SeoImg} alt="seo analyze img" className="analyze-img" />
        <div className="side-images">
          <div className="side-image visitor">
            <img src={SeoVisitorImg} alt="seo visitor img" className='side-img'/>
          </div>
          <div className="side-image like">
            <img src={SeoLikeImg} alt="seo like img" className='side-img'/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeBoost;
