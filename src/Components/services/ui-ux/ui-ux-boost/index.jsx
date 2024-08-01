import './ui-ux-boost.css'
import UiUxImg from '../../../assets/ui-ux-design-concept_86047-227-transformed.jpeg'
const UiUxBoost = () => {
  return (
    <section className="ui-ux-boost">
      <div className="ui-ux-content">
        <h4 data-aos="fade-right">Intuitive UI/UX Design</h4>
        <h1 data-aos="fade-right">Elevate Your User Experience with Evibes Development</h1>
        <p data-aos="fade-right">At Evibes Development, we specialize in UI/UX design services. We aim to create user-friendly digital experiences that stand out. Furthermore, we focus on combining creativity with thorough research to ensure every interface we design is intuitive and engaging.</p>
        <ul data-aos="fade-up">
          <li>User-Friendly Experiences</li>
          <li>Creative and Research-Driven Approach</li>
          <li>Enhanced Usability</li>
        </ul>
        <button className="ui-ux-button" data-aos="fade-up">Get Your Free SEO Audit Today</button>
      </div>
      <div className="ui-ux-image" data-aos="fade-up">
        <img src={UiUxImg} alt="SEO Boost" />
      </div>
    </section>
  )
}

export default UiUxBoost