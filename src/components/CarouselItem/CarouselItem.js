import React from 'react';
import classes from './CarouselItem.module.sass';
import PropTypes from 'prop-types';

const CarouselItem = ({carouselData:{imgSrc, imgAlt}}) => {
  return (
    <div className={classes.carousel__item}>
      <img className={classes["carousel__item-img"]} src={imgSrc} alt={imgAlt}/>
    </div>
  )
};

CarouselItem.propTypes = {
  carouselData: PropTypes.shape({
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string
  })
};

export default CarouselItem;