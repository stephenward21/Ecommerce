import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
      <div >
        <Slider {...settings}>
          <div><img src="/images/ferrari.jpg"/></div>
          <div><img src="/images/train1.jpg"/></div>
          <div><img src="/images/schooner.jpg"/></div>
          <div><img src="/images/lamb.jpg"/></div>
        </Slider>
      </div>
      
    );
  }
}

export default SimpleSlider;