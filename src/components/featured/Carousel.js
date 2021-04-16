
import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide_one from "../../resources/images/sh_2.jpeg"
import slide_two from "../../resources/images/sh_1.jpeg"
import slide_three from "../../resources/images/sh_3.jpeg"


const Carousel = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay:false,

        // slidesToShow: 1,
        // slidesToScroll: 1
      };

    return (
        <div className="carousel_wrapper" style={{ height:`${window.innerHeight}px`,width:`${window.innerWidth}px` }}>
            <Slider {...settings}>

                <div>
                    <div className="carrousel_image"
                        style={{ 
                            background:`url(${slide_one})`, 
                            height:`${window.innerHeight}px`,
                            width:`${window.innerWidth}px`
                         }}
                    >

                    </div>
                </div>

                <div>
                <div className="carrousel_image"
                        style={{ 
                            background:`url(${slide_two})`, 
                            height:`${window.innerHeight}px`,
                            width:`${window.innerWidth}px`
                         }}
                    >

                    </div>
                </div>

                <div>
                <div className="carrousel_image"
                        style={{ 
                            background:`url(${slide_three})`, 
                            height:`${window.innerHeight}px`,
                            width:`${window.innerWidth}px`
                         }}
                    >

                    </div>
                </div>

            </Slider>
        </div>
    )
}

export default Carousel
