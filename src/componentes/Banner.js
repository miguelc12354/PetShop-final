import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import banner1 from '../imagens/Banner-01.jpg'
import banner2 from '../imagens/banner.jpg'
import banner3 from '../imagens/banho-e-tosa.png'


function Banner() {
  return (
    <Carousel>
      <Carousel.Item className='banner'>
        <img src={ banner1 } />
      </Carousel.Item>

      <Carousel.Item className='banner'>
      <img src={ banner2 } />
      </Carousel.Item>

      <Carousel.Item className='banner'>
      <img src={ banner3 } />
      </Carousel.Item>
    </Carousel>
    
  );
}

export default Banner;