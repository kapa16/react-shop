import React from 'react';
import CarouselItem from "../CarouselItem/CarouselItem";
import classes from './Carousel.module.sass';

const Carousel = () => {

  const cls = [classes.carousel];
  cls.push('carousel');

  return (
    <section className={cls.join(' ')}>
      <div className='container'>
        <CarouselItem/>
      </div>
    </section>
  )
};

export default Carousel;