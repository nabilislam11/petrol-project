import React from 'react'

const Service = () => {
    return (
        <>
            <div className="mt-7">           
                 <div className="flex">
                <div className=" w-[50%] flex justify-end  ">
                    <div className="mr-[61px] mt-[131px] ">
                        <h2 className='font-bold font-primary text-[64px] text-black w-[509px]'>Our Services</h2>
                        <p className='font-medium  font-primary text-[16px] text-[#6C6C6C] w-[405px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.

                        </p>
                    </div>

                </div>
                <div className=" relative w-[50%] bg-[url(assets/service2.png)] bg-cover bg-center bg-no-repeat py-[160px] pl-[116px] after:content-[] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.6)] after:z-[-1] z-[99]  ">
                    <h2 className='font-bold font-primary text-[36px] text-white pb-[19px]'>Modern natural oil and gas refineries.</h2>
                    <button className='py-[13px] px-[30px] text-white bg-[#F40404] font-semibold   font-primary text-[16px] '>Learn More</button>
                </div>
            </div>
                <div className="flex">
                    <div className="relative w-[50%]  bg-[url(assets/service3.png)] bg-center bg-cover bg-no-repeat py-[160px] pl-[116px] after:content-[] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.6)] after:z-[-1] z-[99] ]  ">
                        <h2 className='font-bold font-primary text-[36px] text-white pb-[19px]'>Supply of national industries.</h2>
                        <button className='py-[13px] px-[30px] text-white bg-[#F40404] font-semibold   font-primary text-[16px]'>Learn More</button>

                    </div>
                    <div className="relative w-[50%]  bg-[url(assets/service4.png)] bg-center bg-cover bg-no-repeat py-[160px] pl-[116px] after:content-[] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.6)] after:z-[-1] z-[99]  ">
                        <h2 className='font-bold font-primary text-[36px] text-white pb-[19px]'>Supply of national industries.</h2>
                        <button className='py-[13px] px-[30px] text-white bg-[#F40404] font-semibold   font-primary text-[16px]'>Learn More</button>
                    </div>
                </div></div>

        </>
    )
}

export default Service