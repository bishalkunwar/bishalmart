"use client"
// import { useFormState } from "react-dom"
// import {CreateProduct} from "@/actions";

// export default function CreateProductPage() {

//     const[formState, action] = useFormState(CreateProduct, {message:''})

//     return (
//         <form action={action}>
//         <h3 className='font-bold m-3 '>Lets Create a Product</h3>
//         <div className='flex flex-col gap-4'>
//             <div className='flex gap-4'>
//                 <label className='w-12' htmlFor='image'>Image: </label>
//                 <input
//                     type='image'
//                     className='border rounded p-2 w-full' 
//                     id='image'
//                     name='image'
//                 />
//             </div>
//             <div className='flex gap-4'>
//                 <label className='w-12 h-16' htmlFor='name'>Code: </label>
//                 <input
//                     type="text"
//                     id='name'
//                     name='name'
//                     className='border rounded p-2 w-full'
//                 />
//             </div>

//             <div>
//                 {formState.message ? (<div className='my-2 p-2 bg-red-200 border rounded border-red-400'>{formState.message}</div>):null}
//             </div>

//             <button type='submit' className='rounded p-2 bg-blue-200' >
//                 Create
//             </button>
//         </div> 
//     </form>
//     )
// }

import React from 'react';
import { useFormState } from 'react-dom';
import { createProduct } from '@/actions';

// const reducer = async (state, formData:any) => {
//   try {
//     const result = await CreateProduct(formData);
//     return result;
//   } catch (error) {
//     return { message: 'Failed to create product' };
//   }
// };

export default function CreateProductPage() {
    //const [formState, action] = useFormState(reducer, { message: '' });
    //   const [formState, action] = useFormState(createProduct, {message:''});


    const [formState, action] = useFormState(createProduct, { message: '' });

    const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
        const result = await createProduct(formData.get('name') as string, formData.get('image') as File, formData);
        console.log(result); // Log the result or handle it as needed
    } catch (error) {
        console.error('Error creating product:', error);
    }
    };

return (
    <form onSubmit={(event) => handleSubmit(event)} enctype="multipart/form-data">
        <h3 className='font-bold m-3 '>Lets Create a Product</h3>
        <div className='flex flex-col gap-4'>
            <div className='flex gap-4'>
                <label className='w-12' htmlFor='image'>Image: </label>
                <input
                    type='file'
                    className='border rounded p-2 w-full' 
                    id='image'
                    name='image'
                    accept='image/*'
                />
            </div>
            <div className='flex gap-4'>
                <label className='w-12 h-16' htmlFor='name'>name: </label>
                <input
                    type="text"
                    id='name'
                    name='name'
                    className='border rounded p-2 w-full'
                />
            </div>

            <div>
            {formState.message && (
                <div className='my-2 p-2 bg-red-200 border rounded border-red-400'>{formState.message}</div>
            )}
            </div>

            <button type='submit' className='rounded p-2 bg-blue-200' >
                Create
            </button>
        </div> 
    </form>
  );
}



