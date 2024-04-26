import React from 'react'
import HeroBanner from './components/heroBanner/page';
import FooterBanner from './components/footerBanner/page';
import Product from "./components/product/page"; // Import the Product component
import { client } from '../../lib/client';

export default async function ShowData() {
  try {
    // Fetch data from Sanity
    const bannerQuery = `*[_type == "banner"] | order(_createdAt desc){
      _id,
      image{
        asset->{
          url
        }
      },
      smallText, midText, largeText, product, buttonText

    }`;
    const banner = await client.fetch(bannerQuery);

    // console.log(JSON.stringify(banner.image));

    const productQuery = '*[_type == "product"]';
    const products = await client.fetch(productQuery);

    return (
      <div>
        <HeroBanner rData={banner}/>
        <div className="text-center my-10 text-blue-800">
          <h2 className='text-4xl font-extrabold'>Best Selling Products</h2>
          <p className='text-xs font-extralight'>Speaker there are many variations passages</p>
        </div>

        <div className='product-container'>
          {/* Map over products and render Product component for each product */}
          {products.map((product:any) => (
            <Product key={product._id} product={product}/>
          ))}
        </div>

        <FooterBanner footerData = {banner}/>
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return error;
  }
};
