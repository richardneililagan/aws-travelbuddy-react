import React, { Fragment, useEffect, useState } from "react";
import CardTrial from "./CardTrial"
import Slider from "react-slick";
import * as testimonialData from "../data/testimonial.json"
import useWindowDimensions from "../function/useWindowDimensions";

const FlightSpecials = () => {

  const { height, width } = useWindowDimensions();
  const [numspad, setNumspad] = useState(2);

  useEffect(() => {
    function handleResize() {
      window.addEventListener("resize", handleResize);
    }

    handleResize();

    if (width > 1200) {
      setNumspad(2);
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

    return (
        <div className='flight-specials-div'> 
          <h3 className='landing-secondary-text'>Limited Deals for Unlimited Fun</h3>
            <h1 className="landing-main-text">FLIGHT SPECIALS</h1> 
            
              <Slider {...settings} className="slider-div">
                {testimonialData.features.map((testimonial) => (
                // <Col xs={12} sm={12} md={12}>
                  <CardTrial/>
                // </Col>
        ))}
              </Slider>
     </div>
    )
}
export default FlightSpecials;