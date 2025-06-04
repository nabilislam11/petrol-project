import React from 'react'
import { MdSignalWifiConnectedNoInternet1 } from 'react-icons/md'
import slider1 from '../../assets/slider1.png'
import slider2 from '../../assets/slider2.png'
import slider3 from '../../assets/slider3.png'
import slider4 from '../../assets/slider4.png'


const Slider = () => {
  return (
    <><div className=" md:flex justify-center gap-[30px] overflow-hidden ">
        <img src={slider1} alt="" />
        <img src={slider2} alt="" />
        <img src={slider3} alt="" />
        <img src={slider4} alt="" />
    </div>
    </>
  )
}

export default Slider