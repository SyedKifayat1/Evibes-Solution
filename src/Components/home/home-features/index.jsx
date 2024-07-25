import React from 'react';
import './home-features.css';
import ContentImg from '../../assets/content-writing.png';
import MarketingImg from '../../assets/marketing.png';
import ColorsImg from '../../assets/colors.png';
const HomeFeatures = () => {
  return (
    <section className="home-features">
      <h1>More Ways Evibes Development Can Help You|</h1>
      <div className="features-cards">
        <div className="features-card">
          <div className="card-icon" style={{backgroundColor:'#D9FAFD'}}>
            <img src={ContentImg} alt="Content Writing" />
          </div>
          <h2>Content Writing</h2>
          <p>We write engaging, SEO-optimized content that tells your brand's story and drives results. Our expert writers craft compelling copy that captivates your audience and turns readers into customers.</p>
        </div>
        <div className="features-card">
          <div className="card-icon" style={{backgroundColor:'#E4E7FF'}}>
            <img src={ColorsImg} alt="Content Writing" />
          </div>
          <h2>Branding & Design</h2>
          <p>Our branding and design services create unique visual identities that capture your brand's essence and resonate with your audience. From logos to complete visual systems, we ensure your brand stands out and drives results.</p>
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
