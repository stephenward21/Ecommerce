import React, { Component } from 'react';
import Slider from 'react-slick';


class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div><img src="http://files1.porsche.com/filestore/image/multimedia/none/991-2nd-tu-detail-concept-character-xle/preview/9f659197-71a8-11e5-b52e-0019999cd470/porsche-preview.jpg"/></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Slider>
      </div>
      
    );
  }
}

export default SimpleSlider;