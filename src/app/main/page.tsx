// import React from 'react'
// import HeroBanner from '@/app/components/heroBanner/page';
// import FooterBanner from '@/app/components/footerBanner/page';
"use server"
import { client } from '../../../lib/client';

interface ShowData{
    params:{
        smallText:string
    }
}


export default async function ShowData(props:ShowData) {
    try {
        // Fetch data from Sanity
        const productQuery = '*[_type == "product"]';
        const products = await client.fetch(productQuery);

        const bannerQuery = '*[_type == "banner"]';
        const bannerData = await client.fetch(bannerQuery);

        // Return data as props
        return {
            props: {
                products,
                bannerData
            }
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            props: {
                products: [],
                bannerData: []
            }
        };
    }
};
































// const HomePage = ({ products, bannerData}) => {
  
//     // // Log the fetched data
//     console.log('Products:', products);
//     console.log('Banner Data:', bannerData);

//     return (
//     <div>
//        {console.log(bannerData)}

//         <HeroBanner HeroBanner={HeroBanner}/>
        
//         <div className='product-heading'>
//             <h2>Best Seller Products</h2>
//             <p>Some Variations with our headphone beats</p>
//         </div>

//         <div className='product-container'>

//             <p>product 1</p>
//             {products?.map((product)=>{
//                 console.log(product.name);
//             })}
//         </div>

//         <FooterBanner/>
//     </div>
//   )
// };

// export default async function getServerSideProps = async () => {
//     try {
//         // Fetch data from Sanity
//         const productQuery = '*[_type == "product"]';
//         const products = await client.fetch(productQuery);

//         const bannerQuery = '*[_type == "banner"]';
//         const bannerData = await client.fetch(bannerQuery);

//         // Return data as props
//         return {
//             props: {
//                 products,
//                 bannerData
//             }
//         };
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         return {
//             props: {
//                 products: [],
//                 bannerData: []
//             }
//         };
//     }
// };


// export default HomePage;