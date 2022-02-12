import React from 'react'
import "./Products.css"
import model from '../../img/model.png'

const Products = () => {
  return (
    <div className='p'>
        <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
        </div>
        <a href="https://instagram.com/_seongjoo" target="_blank" rel="noreferrer">
            <img src={model} alt="" className="p-img" />
        </a>
    </div>
  )
}

export default Products