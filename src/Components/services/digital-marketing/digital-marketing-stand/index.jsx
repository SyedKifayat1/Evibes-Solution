import React from 'react';
import './digital-marketing-stand.css';
import SocialImg from '../../../assets/2150063134.jpg';
import GoogleImg from '../../../assets/4c95a69ec3ca35289d99b3770500c2ff.jpg';
import BrandImg from '../../../assets/204e5dff4b8dfa86dc59f5df2b70c949.jpg';

const DigitalMarketingStand = () => {
    return (
        <section className="digital-marketing-stand">
            <div className="digital-marketing-stand-header">
                <h4>Stand Out</h4>
                <h1>Experience the Digital Advantage with Evibes Services</h1>
            </div>
            <div className='digital-marketing-stand-cards'>
                <div className="digital-marketing-stand-card">
                    <div className="image-container">
                        <img src={SocialImg} alt="Social Media Marketing" />
                    </div>
                    <div className="content-container">
                        <h3>Social Media Marketing</h3>
                        <p>Our team of social media experts will take the reins of your social media accounts, crafting and posting content that resonates with your target audience.</p>
                        <button><a href="#social-media">Learn More</a></button>
                    </div>
                </div>
                <div className="digital-marketing-stand-card">
                    <div className="image-container">
                        <img src={GoogleImg} alt="Google Ads / PPC" />
                    </div>
                    <div className="content-container">
                        <h3>Google Ads / PPC</h3>
                        <p>Our team of Google Ads specialists will handle your PPC campaigns, optimizing your ads for maximum visibility, clicks, and conversions. We'll create compelling ads.</p>
                        <button><a href="#google-ads">Learn More</a></button>
                    </div>
                </div>
                <div className="digital-marketing-stand-card">
                    <div className="image-container">
                        <img src={BrandImg} alt="Branding & Growth" />
                    </div>
                    <div className="content-container">
                        <h3>Branding & Growth</h3>
                        <p>Our team of branding experts will manage your brand growth, crafting engaging content that resonates with your target audience.<br/><br/></p>
                        <button><a href="#brand-growth">Learn More</a></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DigitalMarketingStand;
