import React from 'react';
import './home-testimonials.css';
import TestimonialFirst from '../../assets/Pages-Testimonial-Image-1.webp';
import TestimonialSecond from '../../assets/Pages-Testimonial-Image-2.webp';
import TestimonialThird from '../../assets/Pages-Testimonial-Image-3.webp';

const HomeTestimonials = () => {
    return (
        <section className="home-testimonials">
            <h4 className="section-subtitle">Testimonials</h4>
            <h1 className="section-title">What People Say About Us</h1>
            <div className="testimonials-cards">
                <div className="testimonials-card">
                    <div className="card-header">
                        <div className="card-avatar"><img src={TestimonialFirst} alt="Testimonial" /></div>
                        <div className="avatar-icon"><i class="fa-solid fa-quote-right"></i></div>
                    </div>
                    <div className='testimonials-card-content'>
                        <p className="testimonial-text">Though wished merits or be. Alone visit use these smart rooms ham.</p>
                        <div className="small-line"></div>
                        <div className="avatar-name">Angela Taylor</div>
                        <div className="avatar-status">Marketing Manager</div>
                    </div>
                </div>
                <div className="testimonials-card">
                    <div className="card-header">
                        <div className="card-avatar"><img src={TestimonialSecond} alt="Testimonial" /></div>
                        <div className="avatar-icon"><i class="fa-solid fa-quote-right"></i></div>
                    </div>
                    <div className='testimonials-card-content'>
                        <p className="testimonial-text">Offended no concerns. Supply worthy warmth branch of no ye.</p>
                        <div className="small-line"></div>
                        <div className="avatar-name">Chris Harsh</div>
                        <div className="avatar-status">Marketing Manager</div>
                    </div>
                </div>
                <div className="testimonials-card">
                    <div className="card-header">
                        <div className="card-avatar"><img src={TestimonialThird} alt="Testimonial" /></div>
                        <div className="avatar-icon"><i class="fa-solid fa-quote-right"></i></div>
                    </div>
                    <div className='testimonials-card-content'>
                        <p className="testimonial-text">Voice tried known to as my to.</p>
                        <div className="small-line"></div>
                        <div className="avatar-name">Mike Taylor</div>
                        <div className="avatar-status">Marketing Manager</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeTestimonials;
