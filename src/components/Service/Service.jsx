import React from 'react'

const Service = () => {
    return (
        <>
            <div className="text-center md:text-start  px-0 mt-7">           
                 <div className="md:flex">
                <div className=" md:w-[50%] md:flex justify-end  ">
                    <div className="  px-[20px] md:px-0  mb-[36px] md:mb-0  md:mr-[61px] mt-[61px] md:mt-[131px] ">
                        <h2 className='font-bold font-primary text-center   text-[60px] md:text-[64px] text-black md:w-[509px] md:text-start  '>Our Services</h2>
                        <p className='font-medium  font-primary text-[16px] text-[#6C6C6C] md:w-[405px] pt-[16px] md:pt-0 '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.

                        </p>
                    </div>

                </div>
                <div className="   relative  md:w-[50%] bg-[url(assets/service2.png)] bg-cover bg-center bg-no-repeat py-[29px] md:py-[160px] md:pl-[116px] after:content-[] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.6)] after:z-[-1] z-[99]  ">
                    <h2 className='font-bold font-primary text-[36px] text-white pb-[19px]'>Modern natural oil and gas refineries.</h2>
                    <button className='py-[13px] px-[30px] text-white bg-[#F40404] font-semibold   font-primary text-[16px] '>Learn More</button>
                </div>
            </div>
                <div className=" md:flex">
                    <div className="relative  md:w-[50%]  bg-[url(assets/service3.png)] bg-center bg-cover bg-no-repeat py-[160px] md:pl-[116px] after:content-[] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.6)] after:z-[-1] z-[99] ]  ">
                        <h2 className='font-bold font-primary text-[36px] text-white pb-[19px]'>Supply of national industries.</h2>
                        <button className='py-[13px] px-[30px] text-white bg-[#F40404] font-semibold   font-primary text-[16px]'>Learn More</button>

                    </div>
                    <div className="relative md:w-[50%]  bg-[url(assets/service4.png)] bg-center bg-cover bg-no-repeat py-[160px] md:pl-[116px] after:content-[] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.6)] after:z-[-1] z-[99]  ">
                        <h2 className='font-bold font-primary text-[36px] text-white pb-[19px]'>Supply of national industries.</h2>
                        <button className='py-[13px] px-[30px] text-white bg-[#F40404] font-semibold   font-primary text-[16px]'>Learn More</button>
                    </div>
                </div></div>

        </>
    )
}

export default Service