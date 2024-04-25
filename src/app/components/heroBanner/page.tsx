"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '../../../../lib/client';
// import { urlFor } from '../../../../lib/client';

interface ImageReference {
  _ref: string;
}

interface ImageAsset {
  asset: ImageReference;
}
interface BannerItem {
  buttonText: string;
  product: string;
  description: string;
  smallText: string;
  midText: string;
  largeText: string;
  largeText1: string;
  largeText2: string;
  discount: string;
  saleTime: string;
  image:ImageAsset;
}

interface HeroBannerProps {
  rData: BannerItem[];
}

const HeroBanner = ({ rData }: HeroBannerProps) => {
  const loadedData = rData.map((bdata: any) => (
    <div className='hero-banner-container' key={bdata.smallText}>
      <div>
        <p className='beats-solo'>{bdata.smallText}</p>
        <h3>{bdata.midText}</h3>
        <h1>{bdata.largeText}</h1>
        <img src="https://images.unsplash.com/photo-1713781317896-75f337b2db2a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" alt='bannerimage' className='hero-banner-image'/>
        {/* <img src={urlFor(bdata.image)} alt='bannerimage' className='hero-banner-image'/> */}
        {/* {bdata.image && bdata.image.asset && bdata.image.asset._ref && (
          <Image
            src={urlFor(bdata.image.asset._ref).toString()}
            alt='bannerimage'
            className='hero-banner-image'
            width={500}
            height={300}
          />
        )} */}

        <div>
          <Link href={`/product/${bdata.product}`}>
            <button type='button'>{bdata.buttonText}</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>{bdata.description}</p>
          </div>
        </div>
      </div>

    </div>
  ));

  return <div>{loadedData}</div>;
};

export default HeroBanner;