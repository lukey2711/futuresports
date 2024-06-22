import React from 'react';
//Import Carousel package
import { Carousel } from 'react-responsive-carousel';
//Import CSS for carousel
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const ImageCarousel = () => {
  return (
    <Carousel>
    <div>
      <img src={`${process.env.PUBLIC_URL}/Images/cricket-724616_1920.jpg`} alt="Cricket 1" />
    </div>
    <div>
      <img src={`${process.env.PUBLIC_URL}/Images/cricket-724618_1920.jpg`} alt="Cricket 2" />
    </div>
    <div>
      <img src={`${process.env.PUBLIC_URL}/Images/ball-3381339_1920.jpg`} alt="Cricket 3" />
    </div>
  </Carousel>
);
};

export default ImageCarousel;
