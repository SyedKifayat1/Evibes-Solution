import React from 'react'
import './home.css'
import HomeIntro from './home-intro'
import HomeGrow from './home-grow'
import HomeFeatures from './home-features'
import HomeBoost from './home-boost'
import HomeEmpower from './home-empower'
import HomeTestimonials from './home-testimonial'
import HomeCard from './home-card'
const Home = () => {
  return (
    <div className=''>
      <HomeIntro />
      <HomeGrow />
      <HomeFeatures />
      <HomeBoost />
      <HomeEmpower/>
      <HomeTestimonials/>
      <HomeCard/>
    </div>

  )
}

export default Home;