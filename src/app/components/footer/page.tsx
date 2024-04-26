"use client"

import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const FooterPage = () => {
  return (
    <div className='footer-container'>
      <p> &#169;2024 Bishal mart all right reserved</p>
      <p className='icons'>
        <AiFillInstagram/>
        <AiOutlineTwitter/>
      </p>
    </div>
  )
};

export default FooterPage;