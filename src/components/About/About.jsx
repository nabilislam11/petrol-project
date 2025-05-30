import React from 'react'
import Container from '../layout/Container'

const About = () => {
  return (
    <>
      <div id='about'>
        <Container>
          <div className=" flex py-[136px]">
            <div className="w-[30%]  bg-[#F40404] py-[100px] pl-[74px] ">
              <h1 className='font-bold font-primary text-[36px] text-white'>Learn more about our company</h1>
            </div>
            <div className="w-[70%] bg-[url(assets/about.png)] bg-cover bg-center bg-no-repeat pt-[182px] pb-[55px] text-center  ">
              <button className='py-[13px] px-[30px] text-[#F40404] bg-white font-semibold   font-primary text-[16px] '>Learn More</button>
            </div>
          </div>
        </Container>
      </div>

    </>
  )
}

export default About