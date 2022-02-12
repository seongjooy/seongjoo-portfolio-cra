import React from 'react'
import './Li_icon.css'
import linkedin from '../img/linkedin.png'

const Li_icon = () => {
  return (
    <div className='li'>
        <a href="https://www.linkedin.com/in/seong-joo-y-2456b8103/?originalSubdomain=ca" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="" className="li-img" />
        </a>
    </div>
  )
}

export default Li_icon