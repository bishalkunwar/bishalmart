import { client } from '../../lib/client';
import React from 'react'
import HeroBanner from './components/heroBanner/page';
import FooterBanner from './components/footerBanner/page';
import Product from '../../bmartsanity/schemas/product';
// import HomePage from '../../pages'

export default async function ShowData() {
  try {
      // Fetch data from Sanity
      const bannerQuery = '*[_type == "banner"]';
      const banner = await client.fetch(bannerQuery);

      const productQuery = '*[_type == "product"]';
      const products = await client.fetch(productQuery);

      return(
        <div>
          <HeroBanner rData={banner}/>
          <div className="text-center my-10 text-blue-800">
            <h2 className='text-4xl font-extrabold'>Best Selling Products</h2>
            <p className='text-xs font-extralight'>Speaker there are many variations passages</p>
          </div>

          <div className='product-container'>
            {products.map((product:any)=>{
              <Product key={product._id} product={product}/>
            })}
          </div>

          <FooterBanner/>
        </div>
      )
  } catch (error) {
      console.error('Error fetching data:', error);
      return  error;
  }

};



// import { client } from '../../lib/client';
// import React, { useState, useEffect } from 'react';
// import HeroBanner from './components/heroBanner/page';

// const ShowData = () => {
//   const [banner, setBanner] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const bannerQuery = '*[_type == "banner"]';
//         const bannerData = await client.fetch(bannerQuery);
//         setBanner(bannerData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <HeroBanner rData={banner} />
//     </div>
//   );
// };

// export default ShowData;
