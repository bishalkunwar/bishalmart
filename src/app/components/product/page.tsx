"use client"

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '../../../../lib/client';

interface productProps{
  image:string; 
  name:string;
  slug:string;
  price:number
}

const ProductPage = ({product}:productProps) => {
  return (
    <div>
      <Link href={`/product/${product._id}`}>
        <div className='product-card'>
          <Image  
            src={urlFor(product.image)} 
            alt='product1/2/3'
            width={250}
            height={250}
            className="product-image"/>
            <p className="product-name">{product.name}</p>
            <p className="product-price">${product.price}</p>
        </div>
      </Link>
    </div>
  )
};

export default ProductPage;