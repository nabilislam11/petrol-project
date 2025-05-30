import React from 'react'
import Container from '../layout/Container'
import { MdKeyboardArrowRight } from "react-icons/md";



const Blog = () => {
  return (
    < >
      <div className="bg-[#C4C4C4] ">
        <Container>
          <div className="pt-[160px] pb-[131px] ">
            <div className="flex  gap-[60px] ">
              <div className=" relative w-[35%] bg-[url(assets/blog1.png)] bg-cover bg-center bg-no-repeat pt-[75px] pb-[65px] px-[46px] after:content-[] after:absolute after:top-0  after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.6)] after:z-[-1] z-[99] ">
                <h3 className='font-bold   font-primary text-[24px] text-white pb-[62px] '>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h3>
                <a className='py-[13px] px-[30px] text-white bg-[rgba(250,250,250,.50)] ' href="">Read more</a>
              </div>
              <div className=" relative w-[35%] bg-[url(assets/blog2.png)] bg-cover bg-center bg-no-repeat pt-[75px] pb-[65px] px-[46px] after:content-[] after:absolute after:top-0  after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.6)] after:z-[-1] z-[99] ">
                <h3 className='font-bold   font-primary text-[24px] text-white pb-[62px] '>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h3>
                <a className='py-[13px] px-[30px] text-white bg-[rgba(250,250,250,.50)] ' href="">Read more</a>
              </div>
              <div className=" relative w-[35%] bg-[url(assets/blog3.png)] bg-cover bg-center bg-no-repeat pt-[75px] pb-[65px] px-[46px] after:content-[] after:absolute after:top-0  after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.6)] after:z-[-1] z-[99] ">
                <h3 className='font-bold   font-primary text-[24px] text-white pb-[62px] '>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h3>
                <a className='py-[13px] px-[30px] text-white bg-[rgba(250,250,250,.50)] ' href="">Read more</a>
              </div>

            </div>

            <div className="flex items-center justify-end">
              <p className='font-bold font-primary text-[16px] text-black pt-[29px] pl-[1px]'>MORE FROM THE BLLOG</p>
              <MdKeyboardArrowRight />

            </div>
          </div>

        </Container>
      </div>


    </>
  )
}

export default Blog