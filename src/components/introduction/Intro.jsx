import React from 'react'
import "./Intro.css"
import model from "../../img/model.png"

const Intro = () => {
  return (
    <div className='i'>
        <div data-aos= "fade-down-left" className='i-left'>
            <div className="i-left-wrapper">
                <h2 className='i-intro'>Hello my name is </h2>
                <h1 className='i-name'>John Burton </h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">UI/UX Designer</div>
                        <div className="i-title-item">Contents Creator</div>
                        <div className="i-title-item">Writer</div>
                        <div className="i-title-item">Fencer</div>
                    </div>
                </div>
                <p className="i-description"> 
                    I develop products for customers.
                </p>
            </div>
            
        </div>
        <div data-aos="fade-down-left" className='i-right'>
            <div className="i-bg"></div>
            <img src={model} alt="" className="i-img" />
        </div>
    </div>
  )
}

export default Intro