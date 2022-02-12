import React from 'react'
import './Gh_icon.css'
import github from '../img/github.png'

const Gh_icon = () => {
  return (
    <div className='gh'>
        <a href="https://github.com/seongjooy" target="_blank" rel="noreferrer">
            <img src={github} alt="" className="gh-img" />
        </a>
    </div>
  )
}

export default Gh_icon