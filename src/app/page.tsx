
import React from 'react'
import Link from 'next/link'
import CartPage from './components/cart/page'

const page = () => {
  return (
    <div>
      Hero Banner 
      
      <div> 
        <h2>Best Selling Products</h2>
        <p>Speaker of many variations</p>
        <Link href="/components/cart">Cart</Link>
        <Link href="/components/footer">Footer</Link>
      </div>
      <CartPage/>
      Footer
    </div>
  )
}

export default page
