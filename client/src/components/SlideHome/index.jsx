import React from 'react';
import Slider from 'react-slick';
import './styles.scss';
import banner01 from '../../assets/images/banner-01.jpg';
import banner02 from '../../assets/images/banner-02.jpg';
import banner03 from '../../assets/images/banner-03.jpg';
import banner04 from '../../assets/images/banner-04.png';
import '../SlideHome/style.css';

function SlideHome() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="SlideHomeContainer container">
      <div className="slider-home">
        <Slider {...settings}>
          <div>
            <img
              src={banner01}
              alt="First slide"
              style={{ borderRadius: '2px' }}
            />
          </div>
          <div>
            <img
              src={banner02}
              alt="Second slide"
              style={{ borderRadius: '2px' }}
            />
          </div>
          <div>
            <img
              src={banner03}
              alt="Second slide"
              style={{ borderRadius: '2px' }}
            />
          </div>
          <div>
            <img
              src={banner04}
              alt="Second slide"
              style={{ borderRadius: '2px' }}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default SlideHome;
