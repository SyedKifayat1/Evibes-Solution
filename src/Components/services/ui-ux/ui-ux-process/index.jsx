import { useState, useEffect } from 'react';

import './ui-ux-process.css'
const UiUxProcess = () => {
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
        { title: 'In-Depth Research', content: 'We dive deep into understanding your target audience, their behaviors, and pain points to create designs that resonate.' },
        { title: 'Wireframing & Prototyping', content: 'We create detailed wireframes and interactive prototypes to visualize and refine the user flow and interactions.' },
        { title: 'Visual Design & Branding', content: 'Our talented designers bring your brand’s identity to life through captivating visuals and consistent design elements.' },
        { title: 'User Testing & Iteration', content: 'We conduct rigorous user testing to gather feedback and iterate on the designs until they exceed expectations.' },
        { title: 'Development & Implementation', content: 'We collaborate closely with our development team to ensure seamless integration and flawless execution of the final design.' },
    ];
  return (
    <div className='ui-uxprocess'>
    <h1 data-aos="flip-right">Our Design Process</h1>
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

export default UiUxProcess