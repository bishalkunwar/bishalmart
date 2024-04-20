import React from 'react'
import HeroBanner from '../src/app/components/heroBanner/page';
import ProductPage from '../src/app/components/product/page';
import FooterBanner from '../src/app/components/footerBanner/page';
import { client } from '../lib/client';


// interface HeroBannerData {
//     smallText: string;
//     midText: string;
//     image: string;
//     // Add other properties as needed
//   }

//   interface HomePageProps {
//     products: string[];
//     bannerData: HeroBannerData[];
//   }

const HomePage = ({products, bannerData}) => {
  
    {console.log(bannerData)}
    return (
    <div>
        <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
        
        <div className='product-heading'>
            <h2>Best Seller Products</h2>
            <p>Some Variations with our headphone beats</p>
        </div>

        <div className='product-container'>
            {products?.map((product:any)=>
                <div key={product.name}>{product.name}</div>
            )}
        </div>

        <FooterBanner/>
    </div>
  )
};

export const getServerSideProps = async() => {
    const productQuery = '*[_type == "product"]';
    const products = await client.fetch(productQuery);

    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);

    return{
        props: {products, bannerData}
    }
}

export default HomePage