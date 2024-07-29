import React from 'react';
import './home-boost.css';
import SeoImg from '../../assets/seo-analyze.webp';
// import SeoImg from '../../assets/home-boost-traffic.png';
import SeoVisitorImg from '../../assets/seo-visitors.webp';
import SeoLikeImg from '../../assets/seo-like.webp';

const HomeBoost = () => {
  return (
    <section className="home-boost">
      <div className="home-boost-text">
        <h1 data-aos="fade-right" >Unlock Website Growth with Powerful Analytics</h1>
        <p data-aos="fade-up" data-aos-delay='200'>Maximize your website’s potential and drive meaningful engagement with our targeted digital marketing strategies.</p>
        <p data-aos="fade-up" data-aos-delay='200'>We specialize in boosting your website traffic and employing sophisticated analytics to refine your marketing efforts and enhance user experience.</p>
        <button data-aos="fade-up" data-aos-delay='200'>Start Growing Today</button>
      </div>
      <div className="home-boost-images" data-aos="fade-up" data-aos-delay='200'>
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
