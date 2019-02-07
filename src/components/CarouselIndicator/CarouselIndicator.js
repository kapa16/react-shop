import React from 'react';
import PropTypes from "prop-types";

const CarouselIndicator = ({carouselData, carouselId, currentItem, chooseItem}) => {

  const indicatorsEl = carouselData.map((value, index) => {
    return <li
      key={value.id}
      data-target={carouselId}
      data-slide-to={index + 1}
      onClick={() => chooseItem(index + 1)}
      className={currentItem === index + 1 ? 'active' : ''}
    />
  });

  return (
    <ol className="carousel-indicators">
      {indicatorsEl}
    </ol>
  )
};

CarouselIndicator.propTypes = {
  carouselData: PropTypes.array,
  carouselId: PropTypes.string,
  currentItem: PropTypes.number,
  chooseItem: PropTypes.func
};

export default CarouselIndicator;