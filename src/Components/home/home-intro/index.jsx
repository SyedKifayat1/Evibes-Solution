// import React from 'react'
// import './home-intro.css'
// import HeroImg from '../../assets/seo-hero.webp'
// import HeroTraffic from '../../assets/seo-traffic.webp'
// import HeroStatistic from '../../assets/seo-statistics.webp'
// const HomeIntro = () => {
//     return (
//         <section className='intro'>
//             <div className='intro-text container'>
//                 <h1 className="heading">Get the traction your product/service deserves</h1>
//                 <div className='sub-heading'>
//                     <p>By leveraging the most of digital landscape</p>
//                     <p>Your digital consultant awaits!</p>
//                 </div>
//                 <div className='intro-btn'><button>Shedule free 30 min call</button></div>
//             </div>

//             <div className='intro-img'>
//                 <img src={HeroImg} alt="hero img" className="main-img" />
//                 <div className="overlay-images">
//                     <div className='img-body traffic'>
//                         <img src={HeroTraffic} alt="hero traffic" className="overlay-img" />
//                     </div>
//                     <div className='img-body statistic'>
//                         <img src={HeroStatistic} alt="hero statistic" className="overlay-img" />
//                     </div>
//                 </div>
//             </div>

//         </section>
//     )
// }

// export default HomeIntro


import React from 'react'
import './home-intro.css'
import HeroImg from '../../assets/seo-hero.webp'
import HeroTraffic from '../../assets/seo-traffic.webp'
import HeroStatistic from '../../assets/seo-statistics.webp'
import BannerVedio from "../../assets/banner-video.mp4"

const HomeIntro = () => {
    return (
        <section className='intro'>
            <video autoPlay muted loop id="background-video">
                <source src={BannerVedio} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='intro-text container'>
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

            {/* <div className='intro-img'>
                <img src={HeroImg} alt="hero img" className="main-img" />
                <div className="overlay-images">
                    <div className='img-body traffic'>
                        <img src={HeroTraffic} alt="hero traffic" className="overlay-img" />
                    </div>
                    <div className='img-body statistic'>
                        <img src={HeroStatistic} alt="hero statistic" className="overlay-img" />
                    </div>
                </div>
            </div> */}
        </section>
    )
}

export default HomeIntro
