import { client } from '../../lib/client';
import React from 'react'
import HeroBanner from './components/heroBanner/page';
// import HomePage from '../../pages'

export default async function ShowData() {
  try {
      // Fetch data from Sanity
      const productQuery = '*[_type == "product"]';
      const products = await client.fetch(productQuery);

      const renderedData = products.map((product:any)=>{
        return(
          <div key={product.name}>
              {product.name}
          </div>
        )
      })
      // console.log(renderedData);
      return(
        <div>
          <HeroBanner rData={renderedData}/>
        </div>
      )
  } catch (error) {
      console.error('Error fetching data:', error);
      return  error;
  }

};





