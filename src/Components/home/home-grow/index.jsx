import React from 'react';
import './home-grow.css';

const HomeGrow = () => {
    return (
        <section className='home-grow'>
            <div className='grow-intro'>
                <div>
                    <h1>We help you grow your business</h1>
                    <p>Boost visibility, leads, and revenue with our tailored digital strategy.</p>
                    <div className='features'>
                        <div className='feature'>
                            <span className='icon'><i className="fas fa-check"></i></span>
                            <h3>Develop Creative Websites</h3>
                        </div>
                        <div className='feature'>
                            <span className='icon'><i className="fas fa-check"></i></span>
                            <h3>Achieve Your Business Goals</h3>
                        </div>
                        <div className='feature'>
                            <span className='icon'><i className="fas fa-check"></i></span>
                            <h3>Powerful Digital Marketing</h3>
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
                    <p>Your website is your brand's first impression. Let's make it a memorable and impactful one.</p>
                    <button className='learn-more-btn'>LEARN MORE</button>
                </div>
                <div className='card'>
                    <div className='card-icon'><i class="fa-solid fa-2x fa-code"></i>
                    </div>
                    <h3>Web Development</h3>
                    <p>The initial digital impression of a business is vital, and we've mastered it with a SEAMLESS website.</p>
                    <button className='learn-more-btn'>LEARN MORE</button>
                </div>
                <div className='card'>
                    <div className='card-icon'><i class="fa-solid fa-2x fa-bullhorn"></i></div>
                    <h3>Digital Marketing</h3>
                    <p>Our customized digital marketing tactics are designed to establish enduring connections with your target audience.</p>
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



