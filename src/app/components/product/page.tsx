"use client"


import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ImageReference {
  _ref: string;
}

interface ImageAsset {
  asset: ImageReference;
}

interface ProductProps {
  _id: string;
  image: ImageAsset;
  name: string;
  price: number;
  details: string;
}

interface ProductPageProps {
  product: ProductProps[];
}

const ProductPage = ({ product }: ProductPageProps) => {
  return (  
    <div>
  
      <Link href={`/product/${product._id}`}>
        <div className='product-card'>
        {product.image && (
            <Image src={product.image.asset.url} alt="product-image" width={500} height={300} />
        )}
          <p className="product-name">{product.name}</p>
          <p className="product-price">${product.price}</p>
          <p className='product-details'>{product.details}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductPage;







































// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// interface ImageReference {
//   url: string;
// }

// interface ImageAsset {
//   asset: ImageReference;
// }

// interface ProductProps {
//   _id: string;
//   image: ImageAsset;
//   name: string;
//   price: number;
//   details: string;
// }

// interface ProductPageProps {
//   product: ProductProps[];
// }

// const ProductPage = ({ product }: ProductPageProps) => {
//   return(  
//     <div>
//       <Link href={`/product/${product._id}`}>
//         <div className='product-card'>
//           {product.image && (
//             <Image src={product.image.asset.url} alt="banner-image" width={500} height={300} />
//           )}
//           <p className="product-name">{product.name}</p>
//           <p className="product-price">${product.price}</p>
//           <p className='product-details'>{product.details}</p>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default ProductPage;














// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// interface ImageReference {
//   url: string;
// }

// interface ImageAsset {
//   asset: ImageReference;
// }

// interface ProductProps {
//   _id: string;
//   image: ImageAsset;
//   name: string;
//   price: number;
//   details: string;
// }

// interface ProductPageProps {
//   product: ProductProps;
// }

// const Product = ({ product }:ProductPageProps) => {
  
//   const productData = product.map((product:any)=>{
//     <div key={product._id}>
//       <Link href={`/product/product._id}`}>
//         <div className='product-card'>
//           {product.image && (
//             <Image src={product.image.asset.url} alt="banner-image" width={500} height={300} />
//           )}
//           <p className="product-name">{product.name}</p>
//           <p className="product-price">${product.price}</p>
//           <p className='product-details'>{product.details}</p>
//         </div>
//       </Link>
//     </div>
// })
  
//   return (
//     <div>{productData}</div>
    
//   );
// };

// export default Product;






// import React from 'react'
// import Link from 'next/link';
// import Image from 'next/image';
// import { urlFor } from '../../../../lib/client';

// interface ImageReference {
//   _ref: string;
// }

// interface ImageAsset {
//   asset: ImageReference;
// }

// interface productProps{
//   _id: string;
//   image:ImageAsset; 
//   name:string;
//   // slug:string;
//   price:number
//   details:string;
// }

// interface productsPropsPass {
//   product: productProps[];
// }



// const ProductPage = ({product}:productsPropsPass) => {
//   return (
//     <div>
//       <Link href={`/product/product._id`}>
//         <div className='product-card'>
//           {product.image && (
//             <Image src={product.image.asset.url} alt="products-image" width={500} height={300} />
//           )}
//           <p className="product-name">{product.name}</p>
//           <p className="product-price">${product.price}</p>
//           <p className='product-details'>{product.details}</p>
//         </div>
//       </Link>
//     </div>
//   )
// };

// export default ProductPage;