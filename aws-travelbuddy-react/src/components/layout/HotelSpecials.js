import React, { Fragment, useEffect, useState } from "react";
import HotelSpecialsCard from "./HotelSpecialsCard"
import Slider from "react-slick";
import * as testimonialData from "../data/testimonial.json"
import useWindowDimensions from "../function/useWindowDimensions";

const HotelSpecials = () => {

  const { height, width } = useWindowDimensions();
  const [numspad, setNumspad] = useState(3);

  useEffect(() => {
    function handleResize() {
      window.addEventListener("resize", handleResize);
    }

    handleResize();

    if (width > 1200) {
      setNumspad(3);
    } else {
      setNumspad(1);
    }
  });

  var settings = {
        dots: true,
        infinite: true,
        arrow: true,
        speed: 500,
        slidesToShow: numspad,
        slidesToScroll: 1,
      };

  var saleHotels = testimonialData.features.filter(testimonial => testimonial.special === true)


    return (
        <div style={{backgroundColor:'#F7F8FA', paddingTop:'25px'}}> 
        <div className='hotel-specials-div'> 
          <h3 className='landing-secondary-text'>Limited Deals for Unlimited Fun</h3>
            <h1 className="landing-main-text">HOTEL SPECIALS</h1> 
            
              <Slider {...settings} className="slider-div-hotel">
                {saleHotels.map((testimonial) => (
                  <HotelSpecialsCard
                  image = {testimonial.image}
                  special = {testimonial.special}
                  />
        ))}
              </Slider>
     </div>
     </div>
    )
}
export default HotelSpecials;