import React from 'react'
import './Fb_icon.css'
import facebook from '../img/facebook.png'

const Fb_icon = () => {
  return (
    <div className='fb'>
        <a href="https://www.facebook.com/stephanseongjoo/" target="_blank" rel="noreferrer">
            <img src={facebook} alt="" className="fb-img" />
        </a>
    </div>
  )
}

export default Fb_icon