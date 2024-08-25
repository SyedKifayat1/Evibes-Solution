import { useState } from 'react';
import './about-experience.css';

const AboutExperience = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className='about-experience'>
            <div className='about-experience-wrapper'>
                <div className='about-experience-content' data-aos="fade-right">
                    <h4>INDUSTRY EXPERIENCES</h4>
                    <h1>Digital solutions for your online business.</h1>
                    <p>Evibes Development is dedicated to delivering comprehensive digital solutions that support your business’s growth.</p>
                </div>
                <div className='about-experience-drop-downs' data-aos="fade-up">
                    {dropDownData.map((item, index) => (
                        <div
                            key={index}
                            className={`about-experience-drop-down ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => handleToggle(index)}
                            
                        >
                            <div className='drop-down-heading'>
                                <h3 className="drop-down-title">
                                    {item.title}
                                </h3>
                                <div className="drop-down-icon"></div>
                            </div>
                            <div className='drop-down-description'>
                                {item.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const dropDownData = [
    {
        title: 'The Social Media Agency',
        description: 'We’re one of the few advertising/marketing agencies focused solely on social media. All of us are digital natives with decades of life lived online, ready to help you leverage the power of the biggest network ever built.'
    },
    {
        title: 'World-class Clients',
        description: 'Our work rises to the level of our clients. We create social media content for globally recognized brands, those with names carrying years and years of consumer recognition.'
    },
    {
        title: 'Results Driven',
        description: 'Focused social media campaigns require studying the results. Strategies developed specifically for your audience will return highly specific results we utilize to refine the process. Everything we do is built on results.'
    }
];

export default AboutExperience;
