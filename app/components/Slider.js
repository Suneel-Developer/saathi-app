"// components/SlickSlider.js"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,  // Show only one slide at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,  // Show only one slide at a time for large screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,  // Show only one slide at a time for small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full py-10 px-4">
      <Slider {...settings}>
        <div className="p-4">
          <img src="/images/slide1.jpg" alt="Slide 1" className="w-full h-auto rounded-lg"/>
        </div>
        <div className="p-4">
          <img src="/images/slide2.jpg" alt="Slide 2" className="w-full h-auto rounded-lg"/>
        </div>
        <div className="p-4">
          <img src="/images/slide3.jpg" alt="Slide 3" className="w-full h-auto rounded-lg"/>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default SlickSlider;
