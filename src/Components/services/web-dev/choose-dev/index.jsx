import React from 'react';
import './choose-dev.css'; // Import your CSS for styling

const ChooseWeb = () => {
    return (
        <section className="choose-web-section">
            <div className="choose-web-content">
                <h4 data-aos="fade-right" data-aos-delay='200'>Your Website, Your Way</h4>
                <h1 data-aos="flip-right" data-aos-delay='200'>Why Choose Evibes Solution for Your Web Development Needs?</h1>
                <p data-aos="fade-up" data-aos-delay='200'>Are you looking for a website that not only looks great but also performs exceptionally? Look no further than Evibes Solution! Our team specializes in custom web development that is built to convert. We work closely with you to develop a strategy tailored to your unique needs and business goals, ensuring that your website stands out from the competition. With a focus on SEO best practices and conversion rate optimization, we’re committed to delivering exceptional results.</p>
            </div>
            <div className="choose-web-cards">
                <div className="choose-web-card" data-aos="fade-right-up" data-aos-delay='200'>
                    <h3>SEO-Focused</h3>
                    <p>We Build Your Site with SEO in Mind, ensuring that your website is easily found by your target audience.</p>
                </div>
                <div className="choose-web-card" data-aos="fade-up" data-aos-delay='200'>
                    <h3>Customized</h3>
                    <p>Customization is Key, and we craft a unique strategy tailored to your business goals and brand voice.</p>
                </div>
                <div className="choose-web-card" data-aos="fade-up" data-aos-delay='200'>
                    <h3>Responsive</h3>
                    <p>Your website will be responsive, ensuring an optimal viewing experience across a wide range of devices.</p>
                </div>
                <div className="choose-web-card" data-aos="fade-left-up" data-aos-delay='200'>
                    <h3>Results-Driven</h3>
                    <p>We Focus on Results, with a team of conversion rate optimization experts to ensure your website generates leads.</p>
                </div>
            </div>
        </section>
    );
};

export default ChooseWeb;
