"use client"

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beasts-solo'>Small Text</p>
        <h3>Mid Text</h3>
        <Image src='' alt='headphones' className='hero-banner-image'/>

        <div>
          <Link href="/product/productID">
            <button type='button'>Button Text</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>description</p>
          </div>
        </div>
      </div>  
    </div>
  )
};

export default HeroBanner;