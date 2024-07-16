import React from 'react';
import './ui-ux-service.css';
import BasicImg from '../../../assets/audit.png';
import WireframImg from '../../../assets/prototype.png';
import UiRefreshImg from '../../../assets/ui-ux.png';
import UserPersonaImg from '../../../assets/buyer.png';
import PrototypeImg from '../../../assets/design.png';
import BasicUsabilityImg from '../../../assets/user-interface.png';

const UiUxService = () => {
  const services = [
    {
      img: BasicImg,
      title: 'Basic UX Audit',
      description: 'A quick and affordable evaluation of your website or app’s user experience. We’ll identify the main pain points and provide actionable recommendations to improve usability and user satisfaction.',
    },
    {
      img: WireframImg,
      title: 'Wireframe Design',
      description: 'Get a clear visual representation of your product’s structure and layout. Wireframes help streamline the design process and ensure everyone is on the same page before moving to more detailed visuals.',
    },
    {
      img: UiRefreshImg,
      title: 'UI Refresh',
      description: 'Breathe new life into your existing interface with a modern and visually appealing update. We’ll refresh your UI elements, typography, and color scheme to create a cohesive and engaging user experience.',
    },
    {
      img: UserPersonaImg,
      title: 'User Persona Development',
      description: 'Understand your target audience on a deeper level. We’ll create detailed user personas that represent your ideal customers, helping you tailor your product to their specific needs.',
    },
    {
      img: PrototypeImg,
      title: 'Prototype Creation',
      description: 'Bring your design concepts to life with an interactive prototype. This allows you to test your product’s functionality and gather valuable feedback before investing in development.',
    },
    {
      img: BasicUsabilityImg,
      title: 'Basic Usability Testing',
      description: 'Conduct usability tests to identify user issues and make informed design improvements, ensuring a seamless and intuitive user experience.',
    },
  ];

  return (
    <section className="ui-ux-service">
      <div className="ui-ux-header">
        <h1>Custom UI/UX Services</h1>
        <p>100% Unique, Professional Website Design for Your Business</p>
      </div>
      <div className="ui-ux-service-cards">
        {services.map((service, index) => (
          <div key={index} className="ui-ux-service-card">
            <div className="ui-ux-card-icon"><img src={service.img} alt={service.title} /></div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UiUxService;
