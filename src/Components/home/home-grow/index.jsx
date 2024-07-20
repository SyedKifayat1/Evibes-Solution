import React from 'react';
import './home-grow.css';

const HomeGrow = () => {
    return (
        <section className='home-grow'>
            <div className='grow-intro'>
                <div>
                    <h1>We help you grow your business</h1>
                    <p>Your presence on digital platforms to get more traffic, leads and sales for your company with our customised digital marketing solution.</p>
                    <div className='features'>
                        <div className='feature'>
                            <span className='icon'><i className="fas fa-check"></i></span>
                            <h3>We Build Innovative Websites</h3>
                        </div>
                        <div className='feature'>
                            <span className='icon'><i className="fas fa-check"></i></span>
                            <h3>Effective Digital Marketing</h3>
                        </div>
                        <div className='feature'>
                            <span className='icon'><i className="fas fa-check"></i></span>
                            <h3>We Drive Buying Decisions</h3>
                        </div>
                        <div className='feature'>
                            <span className='icon'><i className="fas fa-check"></i></span>
                            <h3>Fulfill Your Business Objectives</h3>
                        </div>
                    </div>
                    <button className='get-started-btn'>Get Started</button>
                </div>
            </div>
            <div className='cards'>
                <div className='card'>
                    <div className='card-icon'><i aria-hidden="true" class="fas fa-2x fa-tablet-alt"></i></div>
                    <h3>Web Design</h3>
                    <p>Website is the digital face of your company. Let’s make it look awesome and user friendly</p>
                    <button className='learn-more-btn'>LEARN MORE</button>
                </div>
                <div className='card'>
                    <div className='card-icon'><i class="fa-solid fa-2x fa-code"></i>
                    </div>
                    <h3>Web Development</h3>
                    <p>Seamless technology to help you build your website with responsiveness and user friendly design.</p>
                    <button className='learn-more-btn'>LEARN MORE</button>
                </div>
                <div className='card'>
                    <div className='card-icon'><i class="fa-solid fa-2x fa-bullhorn"></i></div>
                    <h3>Digital Marketing</h3>
                    <p>The effective digital marketing strategies that tap emotions and drive buying decisions.</p>
                    <button className='learn-more-btn'>LEARN MORE</button>
                </div>
                <div className='card'>
                    <div className='card-icon'><i class="fa-solid fa-2x fa-arrow-up-right-dots"></i></div>
                    <h3>Brand Growth</h3>
                    <p>Let’s craft strategy that deeply resonates with your audience and boost you KPIs.</p>
                    <button className='learn-more-btn'>LEARN MORE</button>
                </div>
            </div>
        </section>
    );
};

export default HomeGrow;



