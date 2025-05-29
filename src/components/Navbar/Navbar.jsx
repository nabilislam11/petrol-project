import React from 'react'
import Container from '../layout/Container'
import logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <>
            <div className="bg-[#F40404] ">
                <Container>
                    <div className="flex items-center py-[27px]">
                        <div className="w-[30%] ">
                            <img src={logo} alt="" />
                        </div>


                        <div className="w-[50%] ">
                            <ul className='flex justify-end gap-[47px] font-semibold font-primary text-[16px] text-white '> 
                                <li><a href="">Home</a> </li>
                                <li><a href="">About</a> </li>
                                <li><a href="">Services</a> </li>
                                <li><a href="">Gallery</a> </li>
                                <li><a href="">Blog</a> </li>
                               
                              
                            </ul>
                        </div>
                        <div className="w-[20%] text-end">
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