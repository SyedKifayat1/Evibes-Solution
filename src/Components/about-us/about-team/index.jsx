import React from 'react'
import './about-team.css'
import Member1 from '../../assets/About-Us-Member-1.webp'
import Member2 from '../../assets/About-Us-Member-2.webp'
import Member3 from '../../assets/About-Us-Member-3.webp'
import Member4 from '../../assets/About-Us-Member-4.webp'
const AboutTeam = () => {
  return (
    <section className='about-team'>
        <div>
            <h4>WHO WE ARE</h4>
            <h1>Our Amazing Team</h1>
        </div>
        <div className='about-team-cards'>
            <div className='about-team-card'>
                <div className="about-team-card-img">
                    <img src={Member1} alt="" />
                </div>
                <h2>Claudia Arla</h2>
                <p>Chief Designer</p>
            </div>
            <div className='about-team-card'>
                <div className="about-team-card-img">
                    <img src={Member2} alt="" />
                </div>
                <h2>Phoebe Arla</h2>
                <p>Chief Designer</p>
            </div>
            <div className='about-team-card'>
                <div className="about-team-card-img">
                    <img src={Member3} alt="" />
                </div>
                <h2>Erik Genie</h2>
                <p>Chief Designer</p>
            </div>
            <div className='about-team-card'>
                <div className="about-team-card-img">
                    <img src={Member4} alt="" />
                </div>
                <h2>Alex Martinez</h2>
                <p>Chief Designer</p>
            </div>
            <h2>Our committed <u>staff members</u> are ready to help.</h2>
        </div>
    </section>
  )
}

export default AboutTeam