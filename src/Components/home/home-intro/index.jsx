import React from 'react'
import './home-intro.css'
import HeroImg from '../../assets/seo-hero.webp'
const HomeIntro = () => {
    return (
        <section className='intro'>
            <div className='intro-text container'>
                <h1 className="heading">Get the traction your product/service deserves</h1>
                <div className='sub-heading'>
                    <p>By leveraging the most of digital landscape</p>
                    <p>Your digital consultant awaits!</p>
                </div>
                <div className='intro-btn'><button>Shedule free 30 min call</button></div>
            </div>
            <div className='intro-img'>
                <img src={HeroImg} alt="" />
            </div>
        </section>
    )
}

export default HomeIntro