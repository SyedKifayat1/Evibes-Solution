import React from 'react';
import './home-empower.css';
import GrayImg from '../../assets/seo-gray-bg.webp';
import BlanckImg from '../../assets/seo-blank.webp';
import AvatarImg from '../../assets/seo-avatar.webp';
import ExperienceImg from '../../assets/seo-experience.webp';

const HomeEmpower = () => {
    return (
        <section className="home-empower">
            <div className="empower-content">
                <h1>Empower Your Brand with Strategic Digital Marketing</h1>
                <p>Unlock your brand’s full potential and escalate your market presence with our expert digital marketing strategies.</p>
                <div className="empower-cards">
                <div className="empower-card">
                        <div className='empower-icon'><i className="fas fa-check"></i></div>
                        <div>
                            <h3>Enhance Customer Engagement</h3>
                            <p>Connect with your audience through customized campaigns that resonate and build lasting relationships.</p>
                        </div>
                    </div>
                    <div className="empower-card">
                        <div className='empower-icon'><i className="fas fa-check"></i></div>
                        <div>
                            <h3>Boost Your Sales Performance</h3>
                            <p>Leverage our advanced analytics tools to refine your marketing tactics and drive substantial growth in sales.</p>
                        </div>
                    </div>
                    <div className="empower-card">
                        <div className='empower-icon'><i className="fas fa-check"></i></div>
                        <div>
                            <h3>Accelerate Your Market Reach</h3>
                            <p>Expand your visibility and capture new markets with our proven digital strategies that put you ahead of the competition.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="empower-images">
                <img src={GrayImg} alt="Gray background" className="empower-main-img" />
                <div className="empower-side-images">
                    <div className="empower-side-image experience">
                        <img src={ExperienceImg} alt="Experience" />
                    </div>
                    <div className="empower-side-image blank">
                        <img src={BlanckImg} alt="Blanck" />
                    </div>
                    <div className="empower-side-image avatar">
                        <img src={AvatarImg} alt="Avatar" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeEmpower;
