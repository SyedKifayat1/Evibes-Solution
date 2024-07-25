import React from 'react';
import './about-intro.css';
import IntroImg1 from '../../assets/about-1.webp';
import IntroImg2 from '../../assets/about-2.webp';

const AboutUsIntro = () => {
    return (
        <section className="about-us-intro">
            <div className='about-us-intro-img'>

                <img className='intro-first-img' src={IntroImg1} alt="Introduction 1" />
                <div className="image-wrapper bottom-image">
                    <img src={IntroImg2} alt="Introduction 2" />
                </div>
            </div>
            <div className="about-us-intro-content">
                <h4>WHAT WE DO</h4>
                <h1>We deliver revenue-generating digital marketing solutions.</h1>
                <h5>We’re a leader in tech-enabled digital marketing solutions.</h5>
                <p>Evibes Solutions is a tech-enabled digital marketing solutions provider, and we create custom strategies for each of our clients based on their needs and goals.</p>
            </div>
        </section>
    );
};

export default AboutUsIntro;
