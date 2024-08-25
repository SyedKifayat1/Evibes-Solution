import React, { useState, useEffect } from 'react';

import './web-process.css'
const WebProcess = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    // State to manage open/closed state for each accordion item
    const [openIndex, setOpenIndex] = useState(0);

    // Function to toggle accordion item
    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Data for accordion items
    const items = [
        { title: 'Site Architecture', content: 'Our Analytics-certified teams craft the optimal sitemap and architecture to ensure your site visitors follow a clear path to conversion. The end result is a site that is easy to navigate for both humans and Google crawlers.' },
        { title: 'Design', content: 'With our in-house conversion rate optimization experts, we lay out the frame of your website to funnel visitors directly to key conversion points. From there, our experienced designers take our strategic vision and make it a reality. The end result is a design that creates trust in your brand’s voice and expands your business.' },
        { title: 'Website Development', content: 'Your website’s design is coded to be mobile-friendly and search engine optimized, placing it in the best possible position for future customers to find you. Your content management system is also configured to be user-friendly and tightly secured.' },
        { title: 'Website Production', content: 'Our team migrates all of your existing web content and metadata to your new site making sure to preserve copy, images, and any other curated details.' },
        { title: 'Site Launch', content: 'After the development of a site transition plan and a thorough vetting for bugs and improvements, it’s time to break out the champagne and reveal your new and improved look.' },
    ];
    return (
        <div className='web-process'>
            <h1 data-aos="fade-right">Our Development Process</h1>
            <div className="accordion">
                <div className="accordion-titles"
                    data-aos="fade-right"
                >
                    {items.map((item, index) => (
                        <>
                            <div
                                key={index}
                                className={`accordion-title ${openIndex === index ? 'open' : ''}`}
                                onClick={() => toggleAccordion(index)}
                            >
                                {item.title}
                            </div>
                            {isSmallScreen && openIndex === index && (
                                <div className="accordion-content" data-aos="fade-up">
                                    <h3>{items[openIndex].title}</h3>
                                    <p>{item.content}</p>
                                </div>
                            )}
                        </>
                    ))}
                </div>
                {!isSmallScreen && openIndex !== null && (
                    <div className="accordion-content" data-aos="fade-up">
                        <h3>{items[openIndex].title}</h3>
                        <p>{items[openIndex].content}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default WebProcess