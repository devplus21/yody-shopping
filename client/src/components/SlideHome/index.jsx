import React from 'react';
import Slider from 'react-slick';
import './styles.scss';
import banner01 from '../../assets/images/banner-01.jpg';
import banner02 from '../../assets/images/banner-02.jpeg';
import banner03 from '../../assets/images/banner-03.avif';
import banner04 from '../../assets/images/banner-04.avif';
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
      <div className="row">
        <div className="col-md-4 SlideHome_Right">
          <div className="ci-m66-feature-teaser-container">
            <h2 className="ci-m66-feature-title">Polo Nam Pima cao cấp </h2>
            <div className="ci-m66-feature-intro-text">
              <span className="ci-richtext ci-richtext-text-alignment-left">
                <p>
                  Nhắc đến sự đẳng cấp là không thể không nhắc đến dòng vải
                  pima. Nó tạo nên chất lượng tốt nhất cho bất kỳ sản phẩm thời
                  trang nào. Sợi vải pima dài và dày hơn sợi cotton thông thường
                  gấp đôi nhờ công nghệ dệt tân tiến.
                </p>{' '}
              </span>
            </div>
            <div className="btn" style={{ padding: '17px 72px' }}>
              TOP MOTHER'S DAY GIFTS
            </div>
          </div>
        </div>
        <div className="col-md-8 slider-home">
          <Slider {...settings}>
            <div>
              <img
                src={banner01}
                alt="First slide"
                style={{ borderRadius: '50px' }}
              />
            </div>
            <div>
              <img
                src={banner02}
                alt="Second slide"
                style={{ borderRadius: '50px' }}
              />
            </div>
            <div>
              <img
                src={banner03}
                alt="Second slide"
                style={{ borderRadius: '50px' }}
              />
            </div>
            <div>
              <img
                src={banner04}
                alt="Second slide"
                style={{ borderRadius: '50px' }}
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default SlideHome;
