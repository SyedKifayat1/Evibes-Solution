import React from 'react'
import './home.css'
import HomeIntro from './home-intro'
import HomeGrow from './home-grow'
import HomeFeatures from './home-features'
import HomeBoost from './home-boost'
import HomeEmpower from './home-empower'
import HomeTestimonials from './home-testimonial'
const Home = () => {
  return (
    <div className=''>
      <HomeIntro />
      <HomeGrow />
      <HomeFeatures />
      <HomeBoost />
      <HomeEmpower/>
      <HomeTestimonials/>
    </div>

  )
}

export default Home;