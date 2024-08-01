import React from 'react';
import './contact-us-card.css';

const ContactUsCard = () => {
    return (
        <section className='contact-us-card'>
            <div className='contact-info' data-aos="fade-right">
                <div>
                    <h2>Contact Information</h2>
                    <p>We’ll create high-quality linkable content and build at least 40 high-authority.</p>
                </div>
                <div>
                    <ul>
                        <li>
                            <a href="tel:+923269411582">
                                <div className="contact-info-icon call-icon">
                                    <i class="fa-solid fa-phone-volume"></i>
                                </div>
                                <p>+923269411582</p>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:info@evibesdevelopment.com">
                                <div className="contact-info-icon mail-icon">
                                    <i class="fa-solid fa-envelope"></i>

                                </div>
                                <p>info@evibesdevelopment.com</p>
                            </a>
                        </li>
                        <li>
                            <div className="contact-info-icon location-icon">
                                <i class="fa-solid fa-location-dot"></i>

                            </div>
                            <p>Lahore, Pakistan</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='contact-form' data-aos="fade-up">
                <form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message"></textarea>
                    </div>
                    <div>
                        <button type="submit">Send Message</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default ContactUsCard;
