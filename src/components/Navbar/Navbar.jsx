import React, { useState } from 'react'
import Container from '../layout/Container'
import logo from '../../assets/logo.png'
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { ImCross } from "react-icons/im";

const Navbar = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="bg-[#F40404] ">
                <Container>
                    <div className="lg:flex items-center py-[27px]">
                        <div className="flex justify-between items-center lg:w-[30%] lg:justify-between ">
                            <img src={logo} alt="" />

                            <div className="block lg:hidden">
                                {
                                    show ? <ImCross onClick={() => setShow(!show)} />
                                        : <MdOutlineFormatListBulleted onClick={() => setShow(!show)} />
                                }
                            </div>
                        </div>
                        {show && (
                            <>      <div className=" flex md:w-[50%] ">
                                <ul className='  md:flex justify-end gap-[47px] font-semibold font-primary text-[16px] text-white '>
                                    <li className='pt-1' ><a href="">Home</a> </li>
                                    <li className='pt-1'><a href="#about">About</a> </li>
                                    <li className='pt-1'><a href="">Services</a> </li>
                                    <li className='pt-1'><a href="">Gallery</a> </li>
                                    <li className='pt-1'><a href="">Blog</a> </li>
                                </ul>
                            </div>
                                <div className="w-[100%] text-end">
                                    <button className='py-[13px] px-[32px] bg-transparent text-white border-2 border-white
                            font-semibold font-primary text-[16px] ' >CONTACT</button>
                                </div>
                            </>
                        )
                        }


                        <div className="hidden md:flex w-[50%]">
                            <ul className=' lg:flex justify-end gap-[47px] font-semibold font-primary text-[16px] text-white '>
                                <li><a href="">Home</a> </li>
                                <li><a href="#about">About</a> </li>
                                <li><a href="">Services</a> </li>
                                <li><a href="">Gallery</a> </li>
                                <li><a href="">Blog</a> </li>


                            </ul>
                        </div>
                        <div className="hidden  md:block w-[20%] text-end">
                            <button className='py-[13px] px-[32px] bg-transparent text-white border-2 border-white
                            font-semibold font-primary text-[16px] ' >CONTACT</button>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Navbar