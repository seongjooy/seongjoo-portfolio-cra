import React from 'react'
import './Body.css'
import profile from '../../img/profile.png'
import Li_icon from '../../li_icon/Li_icon'
import Fb_icon from '../../fb_icon/Fb_icon'
import Ig_icon from '../../ig_icon/Ig_icon'
import Gh_icon from '../../gh_icon/Gh_icon'

const Body = () => {
  return (
    <div className='b'>
        <div className="b-left">
            <div data-aos="fade-down-right" className="b-left-wrapper-top">
                <h2>About</h2>
            </div>

            <div data-aos="fade-up-right" className="b-left-wrapper-bot">
                <h2>Contact</h2>
                <div className="b-left-wrapper-bot-wrapper">
                    <Fb_icon/>
                    <Gh_icon/>
                    <Ig_icon/>
                    <Li_icon/>
                </div>
            </div>
        </div>

        <div data-aos="slide-up" data-aos-duration="1500" className="b-center">
            <img src={profile} alt="" className="profile-img"/>
            <h1>About Me</h1>
            <p>Hi! I'm a student at the University of Toronto 
                pursuing a major in Electrical and Computer Engineering.
                <br/><br />
                I'm currently a machine learning research assistant
                at Spass Co. Ltd., which develops AI-driven solutions
                in the medical sector.
                <br/><br />
                I'm undecided on which technical area I wish to focus in,
                so I'm looking to touch up on many other areas.
            </p>
        </div>

        <div className="b-right">
            <div data-aos="fade-down-left" className="b-right-wrapper-top">
                <h2>Experiences</h2>
            </div>

            <div data-aos="fade-up-left" className="b-right-wrapper-bot">
                <h2>My Work</h2>
            </div>

        </div>
    
    
    </div>
  )
}

export default Body