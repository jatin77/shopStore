import React from 'react';
import heroImg from './new_arrival.jpg';
import './hero.css';
function Hero() {
  return (
    <div className='hero-img'>
      <img src={heroImg} alt='' />
    </div>
  );
}

export default Hero;
