import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img3 from '/Carosel/1.jpg';
import img1 from '/Carosel/2.jpg';
import img2 from '/Carosel/3.jpg';

// Sample data for the carousel
const carouselData = [
  {
    id: 1,
    imgSrc: img1,
    // altText: 'Product 1',
  },
  {
    id: 2,
    imgSrc: img2,
    // altText: 'Product 2',
  },
  {
    id: 3,
    imgSrc: img3,
    // altText: 'Product 3',
  },
  // Add more items as needed
];

const Carousel = () => {
  // Slider settings
  const settings = {
    dots: false,  // Disable dots navigation
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    appendDots: () => null,  // Prevent default dots rendering
    customPaging: () => null, // Prevent custom dots rendering
  };

  return (
    <div className="carousel-container w-full my-8 px-4">
      <Slider {...settings}>
        {carouselData.map(item => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg shadow-lg"
          >
            <img
            style={{}}
              src={item.imgSrc}
            //   alt={item.altText}
              className="w-full h-auto max-h-[400px] object-cover transition-transform duration-500 ease-in-out hover:scale-105"

            />
          
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
