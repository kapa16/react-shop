import React from 'react';
import CarouselItem from "../CarouselItem/CarouselItem";
import classes from './Carousel.module.sass';
import {connect} from 'react-redux';
import * as actions from '../../redux/actionCreators';


const Carousel = ({currentItem, nextItem, prevItem}) => {

  const carouselData = [
    {imgSrc: '../../img/prod1.jpg', imgAlt: 'product 1'},
    {imgSrc: '/img/prod2.jpg', imgAlt: 'product 2'},
    {imgSrc: '/img/prod3.jpg', imgAlt: 'product 3'}
  ];

  const cls = [classes.carousel];
  cls.push('carousel');

  return (
    <section className={cls.join(' ')}>
      <div className='container'>
        <CarouselItem caruselData={carouselData[currentItem - 1]}/>
      </div>
    </section>
  )
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, actions)(Carousel);