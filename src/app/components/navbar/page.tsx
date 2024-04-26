"use client"

import React from 'react'
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
// import Cart from "../cart/CartPage";
// import {useStateContext} from "../context/StateContext";

const NavBar = () => {
  // const{showCart, setShowCart, totalQuantities} = useStateContext();
  return (
    <div className='navbar-container'>
      <p className='logo'><Link href="/">Bishal Headphones</Link></p>
      <button className='cart-icon' type='button' onClick={()=>console.log("hello world")}>
        {/* onClick={()=>setShowCart(true)} */}
        <AiOutlineShopping/>
        <span className='cart-item-quantity'>total quantities</span>
        {/* {totalQuantities} */}
      </button>
      {/* {showCart && <cart/>} */}
      <p>showcar plus cart</p>
    </div>
  )
};

export default NavBar;