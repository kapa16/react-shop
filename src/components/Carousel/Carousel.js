import React from 'react';
import CarouselItem from "../CarouselItem/CarouselItem";
import classes from './Carousel.module.sass';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/actionCreators';
import PropTypes from "prop-types";

const carouselData = [
  {imgSrc: '/img/prod1.jpg', imgAlt: 'product 1'},
  {imgSrc: '/img/prod2.jpg', imgAlt: 'product 2'},
  {imgSrc: '/img/prod3.jpg', imgAlt: 'product 3'},
  {imgSrc: '/img/prod2.jpg', imgAlt: 'product 4'}

];

const Carousel = ({currentItem, nextItem, prevItem, chooseItem}) => {

  const maxItemNumber = carouselData.length;
  const carouselId = 'mainCarousel';

  const indicatorsEl = carouselData.map((value, index) => {
    return <li
      key={index}
      data-target={carouselId}
      data-slide-to={index + 1}
      onClick={() => chooseItem(index + 1)}
      className={currentItem === index + 1 ? 'active' : ''}
    />
  });

  return (
    <section className={classes.carousel}>
      <div className='container carousel slide' id={carouselId}>
        <CarouselItem carouselData={carouselData[currentItem - 1]}/>
        <ol className="carousel-indicators">
          {indicatorsEl}
        </ol>
        <a
          className='carousel-control-prev'
          href={`#${carouselId}`}
          onClick={() => prevItem(maxItemNumber)}>
          <span className="carousel-control-prev-icon" aria-hidden="true"/>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className='carousel-control-next'
          href={`#${carouselId}`}
          onClick={() => nextItem(maxItemNumber)}>
          <span className="carousel-control-next-icon" aria-hidden="true"/>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
  )
};

Carousel.propTypes = {
  currentItem: PropTypes.number,
  nextItem: PropTypes.func,
  prevItem: PropTypes.func,
  chooseItem: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    currentItem: state.reducerCarousel.currentItem
  };
};

export default connect(mapStateToProps, actions)(Carousel);