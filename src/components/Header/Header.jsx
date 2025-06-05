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
    <div className="bg-[#282828] border-b-4 border-[#FFB800]">
            <Container>
              <div className="lg:flex lg:justify-between pt-[15px] pb-[11px]">
                       <div className=" flex gap-1 pb-1.5  lg:flex lg:flex-row lg:items-center lg:gap-x-[22px] lg:pl-[0px] lg:pb-0">
          <div className=" flex pb-[5px] gap-[3px] lg:flex items-center lg:gap-[5px] lg:pb-0 ">
            <a className=' text-white ' href=""><MdOutlineMarkEmailUnread /></a>
            <h2 className='text-[11px] text-white font-reguler font-primary lg:text-[12px]'>mail@yourcompany.com</h2>

          </div>
          <div className="hidden lg:block h-[16px] w-[1px] bg-[#5C6A92]"></div>
          <div className="flex pb-[5px] lg:flex items-center gap-[5px] lg:pb-0 ">
            <a className='text-white' href=""><FiPhoneCall /> </a>
            <h3 className='text-[11px] text-white font-reguler font-primary lg:text-[12px]'>+896 120 5889 (Toll free)</h3>
          </div>
        </div>


        <div className="flex  pl-[101px] gap-3.5 lg:flex text-white lg:gap-[19px] lg:pl-[0px]">
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