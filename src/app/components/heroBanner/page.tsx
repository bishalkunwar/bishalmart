// "use client"

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

interface BannerData {
  smallText: string;
  midText: string;
  image: string;
}

interface HeroBannerProps {
  bannerData: BannerData;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ bannerData }) => {
 
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beasts-solo'>{bannerData?.smallText}</p>
        <h3>{bannerData?.midText}</h3>
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
