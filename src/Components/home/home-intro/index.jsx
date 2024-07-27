import React from 'react'
import './home-intro.css'
import BannerVedio from "../../assets/banner-video.mp4"

const HomeIntro = () => {
    return (
        <section className='intro'>
            <video autoPlay muted loop id="background-video">
                <source src={BannerVedio} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='intro-text container' data-aos="fade-left">
                <h1 className="heading">Get the traction your product/service deserves</h1>
                <div className='sub-heading'>
                    <p>By leveraging the most of digital landscape</p>
                    <p>Your digital consultant awaits!</p>
                </div>
                <div className='intro-btn'>
                    <a className='whatsapp-btn' target='_blank' href="http://wa.me/923269411582">
                        <button>Schedule free 30 min call</button>
                    </a>
                </div>
            </div>

        </section>
    )
}

export default HomeIntro
