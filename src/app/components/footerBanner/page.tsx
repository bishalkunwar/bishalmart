"use client"

// import Link from 'next/link';
// import React from 'react';
// import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
// import Image from 'next/image';

// interface ImageReference {
//   _ref: string;
// }

// interface ImageAsset {
//   asset: ImageReference;
// }

// interface BannerItem {
//   buttonText: string;
//   product: string;
//   description: string;
//   smallText: string;
//   midText: string;
//   largeText: string;
//   largeText1: string;
//   largeText2: string;
//   discount: number;
//   saleTime: string;
//   image: ImageAsset;
// }

// interface FooterBannerProps {
//   footerData: BannerItem[];
// }

// const FooterBanner = ({ footerData }: FooterBannerProps) => {
//   const loadData = footerData.map((bannerData:any)=>{
//     <div className='footer-banner-container'>
//       <div className='banner-desc'>
//         <div className='left'>
//           <p>{bannerData.discount}</p>
//           <h3>{bannerData.largeText1}</h3>
//           <h3>{bannerData.largeText2}</h3>
//           <p>{bannerData.saleTime}</p>
//         </div>
//         <div className='right'>
//           <p>{bannerData.smallText}</p>
//           <h3>{bannerData.midText}</h3>
//           <p>{bannerData.description}</p>
//           <Link href={`/product/${bannerData.product}`}>
//             <button type='button'>{bannerData.buttonText}</button>
//           </Link>
//         </div>

//         {/* <Image src="https://images.unsplash.com/photo-1713781317896-75f337b2db2a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" alt='footerbannerimage'/> */}
//         {/* <Image src={`/product/${bannerData.image.asset._ref}`} alt='footer-banner-image' width={300} height={200} className='footer-banner-image' /> */}
//       </div>
//     </div>  
//   })
//   return (
//     <div>
//       {loadData}
//     </div>
//   );
// };

// export default FooterBanner;




import Link from 'next/link';
import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import Image from 'next/image';

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
  discount: number;
  saleTime: string;
  image: ImageAsset;
}

interface FooterBannerProps {
  footerData: BannerItem[];
}

const FooterBanner = ({ footerData }: FooterBannerProps) => {
  const loadData = footerData.map((bannerData:any) => (
    <div className='footer-banner-container' key={bannerData.largeText1}>
      <div className='banner-desc'>
        <div className='left'>
          <p>{bannerData.discount}</p>
          <h3>{bannerData.largeText1}</h3>
          <h3>{bannerData.largeText2}</h3>
          <p>{bannerData.saleTime}</p>
        </div>
        <div className='right'>
          <p>{bannerData.smallText}</p>
          <h3>{bannerData.midText}</h3>
          <p>{bannerData.description}</p>
          <Link href={`/product/${bannerData.product}`}>
            <button type='button'>{bannerData.buttonText}</button>
          </Link>
        </div>

        {/* Include your Image component here */}
        {/*   */}
      </div>
    </div>  
  ));

  return (
    <div>
      {loadData}
    </div>
  );
};

export default FooterBanner;
