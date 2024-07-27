import React from 'react';
import './home-testimonials.css';
import TestimonialFirst from '../../assets/Pages-Testimonial-Image-1.webp';
import TestimonialSecond from '../../assets/Pages-Testimonial-Image-2.webp';
import TestimonialThird from '../../assets/Pages-Testimonial-Image-3.webp';

const HomeTestimonials = () => {
    return (
        <section className="home-testimonials">
            <h4 className="section-subtitle" data-aos="fade-right" data-aos-delay='200'>Testimonials</h4>
            <h1 className="section-title" data-aos="flip-right" data-aos-delay='200'>What People Say About Us</h1>
            <div className="testimonials-cards">
                <div className="testimonials-card" data-aos="fade-right" data-aos-delay='200'>
                    <div className="card-header">
                        <div className="card-avatar"><img src={TestimonialFirst} alt="Testimonial" /></div>
                        <div className="avatar-icon"><i class="fa-solid fa-quote-right"></i></div>
                    </div>
                    <div className='testimonials-card-content' >
                        <p className="testimonial-text">Evibes Development created a website that exceeded our expectations. We're seeing great results and highly recommend their services!</p>
                        <div className="small-line"></div>
                        <div className="avatar-name">Angela Taylor</div>
                        <div className="avatar-status">Marketing Manager</div>
                    </div>
                </div>
                <div className="testimonials-card" data-aos="fade-up" data-aos-delay='200'>
                    <div className="card-header">
                        <div className="card-avatar"><img src={TestimonialSecond} alt="Testimonial" /></div>
                        <div className="avatar-icon"><i class="fa-solid fa-quote-right"></i></div>
                    </div>
                    <div className='testimonials-card-content'>
                        <p className="testimonial-text">Great experience working with Evibes Development. They delivered a website that's beautiful, user-friendly, and drives traffic.</p>
                        <div className="small-line"></div>
                        <div className="avatar-name">Chris Harsh</div>
                        <div className="avatar-status">Marketing Manager</div>
                    </div>
                </div>
                <div className="testimonials-card" data-aos="fade-left" data-aos-delay='200'>
                    <div className="card-header">
                        <div className="card-avatar"><img src={TestimonialThird} alt="Testimonial" /></div>
                        <div className="avatar-icon"><i class="fa-solid fa-quote-right"></i></div>
                    </div>
                    <div className='testimonials-card-content'>
                        <p className="testimonial-text">Evibes Development helped us create engaging content that's boosted our website traffic and brand awareness. We're very happy with their work!</p>
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
