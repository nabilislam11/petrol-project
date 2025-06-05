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
import certificate1 from '../../assets/certificate1.png'
import certificate2 from '../../assets/certificate2.png'





const Footer = () => {
  return (
<>
    <div className='flex bg-black pt-[44px] md:pt-[148px] pb-[40px] md:pb-[170px]'>
      <Container>
        <div className="md:flex justify-between">
          <div className="md:w-[30%] flex flex-col items-center md:items-start">
            <img className='pb-[33px]' src={footer} alt="" />
            <div className="flex items-center pb-[15px]  ">
              <a className=' text-white mr-[5px] ' href=""><MdOutlineMarkEmailUnread /></a>
              <h2 className='text-white font-reguler font-primary text-[14px]'>mail@yourcompany.com</h2>
            </div>
            <div className=" flex items-center pb-[15px]">
              <a className='text-white mr-[5px]' href=""><FiPhoneCall /> </a>
              <h3 className='text-white font-reguler font-primary text-[14px]'>+896 120 5889 (Toll free)</h3>
            </div>
            <div className=" flex items-center pb-[34px]">
              <a className='text-white mr-[5px]' href=""><LuMapPinned />
              </a>
              <h3 className='text-white font-reguler font-primary text-[14px]'>+896 120 5889 (Toll free)</h3>
            </div>

            <div className="flex gap-3">
              <div className="w-[29px] h-[29px] rounded-full bg-[#F40404] flex justify-center items-center">
                <a className='text-white' href=""><FaFacebookF /></a>

              </div>
              <div className="w-[29px] h-[29px] rounded-full bg-[#F40404] flex justify-center items-center">
                <a className='text-white' href=""><FaTwitter />
                </a>

              </div>
              <div className="w-[29px] h-[29px] rounded-full bg-[#F40404] flex justify-center items-center ">
                <a className='text-white' href=""><TiSocialLinkedin />

                </a>

              </div>
              <div className="w-[29px] h-[29px] rounded-full bg-[#F40404] flex justify-center items-center">
                <a className='text-white' href=""><FaInstagram />
                </a>

              </div>



            </div>

          </div>
          <div className=" md:w-[60%] ">
            <div className=" flex flex-wrap justify-center md:justify-between text-white items-center  text-center md:items-start  md:text-start mt-[25px] md:mt-0 ">
              <div className="w-[50%] md:w-[20%] ">
                <ul className='  '> 
                  <li className='font-bold font-primary text-[16px] text-white pb-[10px] md:pb-[21px]'>Company</li>
                  <li className='font-reguler font-primary text-[14px] text-white pb-[7px] md:pb-[15px]' >Home</li>
                  <li className='font-reguler font-primary text-[14px] text-white pb-[7px] md:pb-[15px]' >About</li>
                  <li className='font-reguler font-primary text-[14px] text-white pb-[7px] md:pb-[15px]'>'Company'</li>
                  <li className='font-reguler font-primary text-[14px] text-white pb-[7px] md:pb-[15px]'>Gallery</li>
                  </ul>
              </div>
              <div className=" w-[50%] md:w-[20%]">
                   <ul className='  '> 
                  <li className='font-bold font-primary text-[16px] text-white pb-[10px] md:pb-[21px]'>Others</li>
                  <li className='font-reguler font-primary text-[14px] text-white pb-[7px] md:pb-[15px]' >Blog</li>
                  <li className='font-reguler font-primary text-[14px] text-white pb-[7px] md:pb-[15px]' >Contact</li>
                  <li className='font-reguler font-primary text-[14px] text-white pb-[7px] md:pb-[15px]'>'Terms & Conditions'</li>
                  <li className='font-reguler font-primary text-[14px] text-white pb-[7px] md:pb-[15px]'>Privacy Policy</li>
                  </ul>
              </div>
              <div className="md:w-[30%] pt-[10px] md:pt-0 text-center md:text-start ">
                <p className='font-bold font-primary text-[16px] text-white pb-[21px]'>Certificate</p>
                <div className="flex gap-[5px] ">
                  <img src={certificate1} alt="" />
                  <img src={certificate2} alt="" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </div>
        <div className="bg-[#282828] ">
      <Container>
        <p className='font-medium font-primary text-[16px] text-[#6C6C6C] py-[42px]'> © Copyright 2024 by AltDesain Studio – All right reserved.</p>
      </Container>
    </div>
</>
  )
}

export default Footer