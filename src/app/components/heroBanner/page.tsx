"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '../../../../lib/client';
// import { urlFor } from '../../../../lib/client';
import {useNextSanityImage} from "next-sanity-image";

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
    <div className='hero-banner-container' key={bdata._id}>
      <div>
        <p className='beats-solo'>{bdata.smallText}</p>
        <h3>{bdata.midText}</h3>
        <h1>{bdata.largeText}</h1>
        {bdata.image && (
            <Image src={bdata.image.asset.url} alt="banner-image" width={500} height={300} />
        )}
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