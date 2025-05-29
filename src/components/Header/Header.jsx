import React from 'react'

import { MdOutlineMarkEmailUnread } from "react-icons/md";
import Container from '../layout/Container';
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";






const Header = () => {
  return (
    <>
    <div className="bg-[#282828]  border-b-4 border-[#FFB800]">
            <Container>
              <div className=" flex justify-between pt-[15px] pb-[11px]">
                       <div className="flex items-center gap-x-[22px] ">
          <div className="flex items-center gap-[5px] ">
            <a className=' text-white  ' href=""><MdOutlineMarkEmailUnread /></a>
            <h2 className='text-white '>mail@yourcompany.com</h2>

          </div>
          <div className="h-[16px] w-[1px] bg-[#5C6A92] "></div>
          <div className="flex items-center  gap-[5px]">
            <a className='text-white' href=""><FiPhoneCall /> </a>
            <h3 className='text-white'>+896 120 5889 (Toll free)</h3>
          </div>
        </div>


        <div className=" flex text-white gap-[19px]">
          <a href=""><FaFacebookF /></a>
          <a href=""><FaTwitter /> </a>
          <a href=""><FaLinkedinIn /></a>
          <a href=""><FaInstagram /></a>
        </div>
              </div>
 
      </Container>

    </div>


    </>
  )
}

export default Header