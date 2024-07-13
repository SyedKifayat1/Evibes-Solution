import React from 'react'
import './home.css'
import HomeIntro from './home-intro'
import HomeGrow from './home-grow'
import HomeFeatures from './home-features'
import HomeBoost from './home-boost'
const Home = () => {
  return (
    <div className=''>
      <HomeIntro />
      <HomeGrow />
      <HomeFeatures />
      <HomeBoost />
    </div>

  )
}

export default Home;