import React from 'react'
import Container from '../layout/Container'
import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.png'
import logo3 from '../../assets/logo3.png'
import logo4 from '../../assets/logo4.png'

const Logo = () => {
  return (
<>
<Container>
    <div className="flex  gap-[26px] py-[116px] ">
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
    </div>
</Container>
</>
  )
}

export default Logo