import React from 'react'
import Container from '../layout/Container'


function Banner  () {
  return (
    <>
    <div className=" bg-[url(assets/banner.png)]  bg-center bg-cover bg-no-repeat   ">
    <Container>
        <div className="w-full py-12  md:w-[30%px] md:py-[257px]">
                <h1 className=' font-bold font-primary text-[25px] md:text-[64px] text-white mb-[27px]  md:mb-[44px] md:pr-[219px]' >We exist since 1975 on the oil and gas industry.</h1> 
                <a  className='py-[12px] md:py-[13px]  px-[24px] md:px-[41px] bg-[#F40404] text-white font-semibold   font-primary text-[16px]'  href="">LEARN MORE</a> 
        </div>
    </Container>
    </div>
    </>
  )
}

export default Banner