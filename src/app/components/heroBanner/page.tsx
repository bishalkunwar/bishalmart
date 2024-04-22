"use client"

// import React from 'react'
// import Image from 'next/image';
// import Link from 'next/link';

// const HeroBanner = ({bannerData}) => {
//   return (
//     <div className='hero-banner-container'>
//       <div>
//         <p className='beasts-solo'>small text</p>
//         <p className='beasts-solo'>{bannerData.smallText}</p>
//         <h3>Mid Text</h3>
//         <Image src='' alt='headphones' className='hero-banner-image'/>

//         <div>
//           <Link href="/product/productID">
//             <button type='button'>Button Text</button>
//           </Link>
//           <div className='desc'>
//             <h5>Description</h5>
//             <p>description</p>
//           </div>
//         </div>
//       </div>  
//     </div>
//   )
// };

// export default HeroBanner;



import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '../../../../lib/client';
interface dataInterface{
  rData:any
}

const HeroBanner = ({rData}:dataInterface) => {
 
  // const loadedData = rData.map((data:any)=>{
  //   return(
  //     <div key={data.smallText}>
  //       {data.smallText}
  //     </div>
  //   )
  // })

  // console.log(loadedData);
  return (

    <div className='hero-banner-container'>
      <div>        
      <div className='hero-banner-container'>
      {rData.map((data:any, index:any) => (
        <div key={index}>
          {data}
        </div>
      ))}
    </div>
        {/* <Image src={bannerData?.image} alt='headphones' className='hero-banner-image' /> */}
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
  );
};

export default HeroBanner;
