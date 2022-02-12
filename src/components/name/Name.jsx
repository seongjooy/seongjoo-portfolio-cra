import React from 'react'
import './Name.css'
import email from '../../img/email.png'

const Name = () => {
  return (
    <div data-aos="fade-down" className='n'>
      <div className='n-name'>
        Seong Joo Yoon
        <div className="n-name-line"></div>
      </div>

      <div className="n-email">
        {/* <h1></h1> */}
        <img src={email} alt="" className="n-email-icon" />
        seongjooyoon@gmail.com
      </div>




    </div>
    
  )
}

export default Name