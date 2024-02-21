import React from 'react'
import cloud from "../../images/cloud.png"
import cloudSoft from "../../images/cloud-soft.png"
import "./style.scss"
import Navigation from './Navigation/Navigation'
import IntroContent from './Intro-content/IntroContent'
const Intro = () => {
  return (
    <>
      <div className="Intro-section" id="Intro-section">
        <div  className="vector-bg" id="parallex">

        </div>
        <img src={cloud} className='cloud-soft' />
        <img src={cloudSoft} className='cloud-soft' />
        <div className="content">
          <Navigation />
          <IntroContent/>
        </div>
      </div>
    </>
  )
}

export default Intro