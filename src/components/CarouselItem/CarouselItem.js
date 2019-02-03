import React from 'react';
import classes from './CarouselItem.module.sass';

const CarouselItem = () => {
  return (
    <div>
      <img className={classes.carousel__item} src="http://lorempixel.com/1200/600/fashion" alt="product photo"/>
    </div> 
  )
};

export default CarouselItem;