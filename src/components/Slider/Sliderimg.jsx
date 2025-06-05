import React from 'react'
import { MdSignalWifiConnectedNoInternet1 } from 'react-icons/md'
import slider1 from '../../assets/slider1.png'
import slider2 from '../../assets/slider2.png'
import slider3 from '../../assets/slider3.png'
import slider4 from '../../assets/slider4.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Sliderimg = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: true,
          speed: 500,
          autoplaySpeed: 500,
          cssEase: "linear",
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (

    <div className="slider-container w-full  ">
      <Slider {...settings}>
        <div  >
          <img src={slider1} alt="" />
        </div>
        <div>
          <img src={slider2} alt="" />
        </div>
        <div >
          <img src={slider3} alt="" />
        </div>
        <div >
          <img src={slider4} alt="" />
        </div>
        <div >
          <img src={slider1} alt="" />
        </div>
        <div >
          <img src={slider2} alt="" />
        </div>
        <div >
          <img src={slider3} alt="" />
        </div>
        <div >
          <img src={slider4} alt="" />
        </div>
      </Slider>
    </div>

  );
}

export default Sliderimg