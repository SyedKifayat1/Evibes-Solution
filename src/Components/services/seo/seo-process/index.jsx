import { useState, useEffect } from 'react';
import './seo-process.css'; // Import your CSS for styling

const SEOProcess = () => {
    
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
        { title: 'Perform an SEO review of your website', content: 'We will do a detailed site walkthrough from an architectural and contextual perspective to look for critical issues and improvement opportunities. This includes reviewing user experience, conversion funnels, and technical items such as sitemaps, robots .txt, Schema, javascript, folder structure, and more.' },
        { title: 'Identify top keywords and phrases', content: 'Our team will identify a site’s most valuable keywords and the most lucrative opportunities to pursue in our work at the outset of a campaign. We’ll familiarize ourselves with the client’s core visibility, competitor visibility, and key visibility gaps and will use those insights to create a meaningful short and long -term plan for the site.' },
        { title: 'Conduct competitor research', content: 'We’ll audit competitors ranking for your target keywords to determine why they’re successful in search and what insights we can use to make our campaign more successful. We also audit competitor backlink profiles, featured snippet captures, and Schema use.' },
        { title: 'Recommend and implement optimizations', content: 'After establishing baseline data and determining the most meaningful initiatives, it’s time to begin the work. Our team will send clear, actionable recommendations and work closely with your team to ensure they are implemented correctly.' },
        { title: 'Examine analytics for further refinement', content: 'We look at the progress of our initiatives using several data sources. We think critically about results and adjust our strategies accordingly. An SEO team must be able to pivot in an ever-changing search landscape, and as a forward-thinking agency, this is an area where Go Fish Digital excels.' },
    ];

    return (
        <div className='seo-process'>
            <h1 data-aos="fade-right" >Our SEO Process</h1>
            <div className="accordion">
                <div className="accordion-titles">
                    {items.map((item, index) => (
                        <>
                        <div
                            key={index}
                            className={`accordion-title ${openIndex === index ? 'open' : ''}`}
                            onClick={() => toggleAccordion(index)}
                            data-aos="fade-right" 
                        >
                            {item.title}
                        </div>
                        {isSmallScreen && openIndex === index && (
                            <div className="accordion-content" data-aos="fade-up" >
                                <h3>{items[openIndex].title}</h3>
                                <p>{item.content}</p>
                            </div>
                         )}
                        </>
                    ))}
                </div>
                {!isSmallScreen && openIndex !== null && (
                    <div className="accordion-content" data-aos="fade-up" >
                        <h3>{items[openIndex].title}</h3>
                        <p>{items[openIndex].content}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SEOProcess;


