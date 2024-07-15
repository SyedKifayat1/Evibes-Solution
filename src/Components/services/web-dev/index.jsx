import React from 'react'
import CustomWeb from './custom-web'
import ChooseWeb from './choose-dev'
import WebProcess from './web-process'
import HomeCard from '../../home/home-card'
const WebDev = () => {
  return (
    <div>
        <CustomWeb/>  
        <ChooseWeb/> 
        <WebProcess/>
        <HomeCard/>
    </div>
  )
}

export default WebDev