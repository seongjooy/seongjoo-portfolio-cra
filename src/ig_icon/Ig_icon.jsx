import React from 'react'
import './Ig_icon.css'
import instagram from '../img/instagram.png'

const Ig_icon = () => {
  return (
    <div className='ig'>
        <a href="https://instagram.com/_seongjoo" target="_blank" rel="noreferrer">
            <img src={instagram} alt="" className="ig-img" />
        </a>
    </div>
  )
}

export default Ig_icon