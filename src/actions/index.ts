
"use server"
import { client } from '../../lib/client';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
// import { Image } from 'next/image';

// interface Image{
//     url:any;
//     width: number;
//     height:number;
//     alt:string;
// }

// // interface Slug{
// //     value:string;
// //     isGenerated:boolean;
// //     createdAt:Date;
// // }

// interface FormData{
//     image:Image;
//     name:string;
//     // slug:Slug;
//     // price:number;
//     // details:string;
// }

export async function createProduct(formState: {name:string}, formData:FormData) {
    try {
        // const {image, name} = formData;
        // const image = formData.get('image') as image;
        const name = formData.get('name') as string;
        // const slug = formData.get('slug') as Slug;
        // const price = formData.get('price')as number;
        // const details = formData.get('details') as string;

        console.log(name);

        if (!name) {
            return { message: 'Please provide a name for the product' };
          }

        // //|| image === null
        // if(typeof image !== 'object' ){
        //         return{ 
        //             message: "Image should be an object and cannot be null"
        //         }
        //     };   

        // // if(typeof name !== 'string' || name.length < 3){
        // //     return{
        // //         message: "Product name must be string and should more than 3 char."
        // //     };
        // // };

        // if (typeof name !== 'string' || name.trim().length === 0) {
        //     return { message: 'Product name must be a non-empty string' };
        // }

        // // if(typeof price !== 'number' || price.length <== 0){
        //     return{
        //         message: "should be number and atleast one length"
        //     };
        // };

        // if(typeof details !== 'string' || details.length <== 5){
        //     return{
        //         message: "should be string and cannot be less than length 5"
        //     };
        // };

        const newProduct = await client.create({
            // _type: 'product',
            // image,
            // name,

            _type: 'product',
            // image: { // Format the image data appropriately
            //     url: '', // Replace with the URL of the uploaded image
            //     width: 0, // Replace with the width of the uploaded image
            //     height: 0, // Replace with the height of the uploaded image
            //     alt: '', // Replace with alt text for the image
            // },
            //image:{...image},
            name,
          });
      
        return { message: 'Product created successfully', product: newProduct };

    } catch (error:unknown) {
        if(error instanceof Error){
            return{
                message:error.message,
            }
        }else{
            return{
                message:"sorry, something went wrong, could not create"
            }
        }
    }

    revalidatePath("/");
    redirect('/');
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