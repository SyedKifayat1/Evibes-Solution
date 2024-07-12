import React from 'react';
import './home-features.css';
import ContentImg from '../../assets/content-writing.png';
import MarketingImg from '../../assets/marketing.png';
import ColorsImg from '../../assets/colors.png';
const HomeFeatures = () => {
  return (
    <section className="home-features">
      <h1>Further Services at Mostly Digital</h1>
      <div className="features-cards">
        <div className="features-card">
          <div className="card-icon" style={{backgroundColor:'#D9FAFD'}}>
            <img src={ContentImg} alt="Content Writing" />
          </div>
          <h2>Content Writing</h2>
          <p>Enhance your digital presence with our SEO-optimized content writing. Our experts craft engaging content that captivates and converts, tailoring every word to your brand’s unique story.</p>
        </div>
        <div className="features-card">
          <div className="card-icon" style={{backgroundColor:'#E4E7FF'}}>
            <img src={ColorsImg} alt="Content Writing" />
          </div>
          <h2>Branding & Design</h2>
          <p>Stand out with our distinctive branding and design services. Our team delivers creative solutions that ensure your brand makes a memorable impression, from logo creation to complete visual identity.</p>
        </div>
        <div className="features-card">
          <div className="card-icon" style={{backgroundColor:'#FEE3E6'}}>
            <img src={MarketingImg} alt="Content Writing" />
          </div>
          <h2>Digital PR</h2>
          <p>Increase your online presence with our targeted Digital PR strategies. We focus on creating impactful campaigns that elevate your brand’s visibility and credibility through innovative digital channels.</p>
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
