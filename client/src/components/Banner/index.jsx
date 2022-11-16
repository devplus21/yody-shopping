import React from 'react';
import { Link } from 'react-router-dom';
import imgLogo from '../../assets/images/banner.webp';
import freeship from '../../assets/images/freeship.jpg';
import './styles.scss';

const Banner = () => {
  return (
    <div className="banner">
      <Link className="d-flex justify-content-center" to="/products">
        <img src={freeship} alt="banner" />
      </Link>
    </div>
  );
};

export default Banner;
