import React from 'react'
import HeroBanner from '../components/heroBanner/page';
import ProductPage from '../components/product/page';
import FooterBanner from '../components/footerBanner/page';

const HomePage = () => {
  return (
    <div>
        <HeroBanner/>
        
        <div className='product-heading'>
            <h2>Best Seller Products</h2>
            <p>Some Variations with our headphone beats</p>
        </div>

        <div className='product-container'>
            <p>product 1</p>
            <p>Product 2</p>
        </div>

        <FooterBanner/>
    </div>
  )
}

export default HomePage