import React from 'react'
import "./ProductList.css"
import Products from '../products/Products'
import Ig_icon from '../../ig_icon/Ig_icon'
import Fb_icon from '../../fb_icon/Fb_icon'
import Gh_icon from '../../gh_icon/Gh_icon'
import Li_icon from '../../li_icon/Li_icon'

const ProductList = () => {
  return (
    <div data-aos="flip-left" className='pl'>
        <div className="pl-texts">
            <h1 className="p-title">
            Product Title Goes Here
            </h1>
            <p className='p-desc'>
            Product Description Goes Here{"\n"}
            Product  Goes Here
            </p>
        </div>
        <div className="pl-list">           
            <Products/>
            <Products/>
        </div>
    </div>
  )
}

export default ProductList