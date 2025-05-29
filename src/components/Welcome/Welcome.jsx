import React from 'react'
import Container from '../layout/Container'

const Welcome = () => {
    return (
        <>
            <Container>
                <div className="pt-[78px] pb-[100px] flex ">

                    <div className="w-[30%]">
                        <h1 className='font-bold font-primary text-[48px] leading-[72px] text-black '>The biggest
                            supplier on
                            the country</h1>
                    </div>
                    <div className="w-[70%] font-medium  font-primary text-[16px] text-[#6C6C6C] py-[61px] pl-[178px] "><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.
                        </p>
                        </div>
                </div>
            </Container>
        </>
    )
}

export default Welcome