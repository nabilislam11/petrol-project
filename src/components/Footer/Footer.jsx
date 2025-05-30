import React from 'react'
import footer from '../../assets/footer.png'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import Container from '../layout/Container';
import { LuMapPinned } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";





const Footer = () => {
  return (
    <div className='flex bg-black pt-[148px] pb-[170px] '>
      <Container>
        <div className="w-[30%] ">
          <img className='pb-[33px] ' src={footer} alt="" />
          <div className="flex items-center pb-[15px] ">
            <a className=' text-white  mr-[5px] ' href=""><MdOutlineMarkEmailUnread /></a>
            <h2 className='text-white  font-reguler    font-primary text-[14px]'>mail@yourcompany.com</h2>
          </div>
          <div className=" flex items-center  pb-[15px]">
            <a className='text-white mr-[5px]' href=""><FiPhoneCall /> </a>
            <h3 className='text-white font-reguler    font-primary text-[14px]'>+896 120 5889 (Toll free)</h3>
          </div>
          <div className=" flex items-center  pb-[34px]">
            <a className='text-white mr-[5px]' href=""><LuMapPinned />
            </a>
            <h3 className='text-white font-reguler    font-primary text-[14px]'>+896 120 5889 (Toll free)</h3>
          </div>

          <div className="flex gap-3 ">
            <div className=" w-[29px] h-[29px] rounded-full bg-[#F40404]  flex justify-center items-center  ">
              <a className='text-white' href=""><FaFacebookF /></a>

            </div>
            <div className=" w-[29px] h-[29px] rounded-full bg-[#F40404]  flex justify-center items-center  ">
              <a className='text-white' href=""><FaTwitter />
              </a>

            </div>
            <div className=" w-[29px] h-[29px] rounded-full bg-[#F40404]  flex justify-center items-center  ">
              <a className='text-white' href=""><TiSocialLinkedin />

              </a>

            </div>
            <div className=" w-[29px] h-[29px] rounded-full bg-[#F40404]  flex justify-center items-center  ">
              <a className='text-white' href=""><FaInstagram />
              </a>

            </div>



          </div>

        </div>
        <div className="w-[70%] ">
          <div className=" flex text-white">
            <div className=""></div>
          </div>










        </div>
      </Container>
    </div>
  )
}

export default Footer