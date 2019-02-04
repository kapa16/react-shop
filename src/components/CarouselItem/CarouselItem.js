import React from 'react';
import classes from './CarouselItem.module.sass';

const CarouselItem = ({caruselData: {imgSrc, imgAlt}}) => {
  return (
    <div>
      <img className={classes.carousel__item} src={imgSrc} alt={imgAlt}/>
    </div>
  )
};

export default CarouselItem;