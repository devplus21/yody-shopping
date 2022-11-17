import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../assets/images/banner.png';
import './styles.scss';

const Banner = () => {
  return (
    <div
      className="banner"
      style={{ margin: '0 auto', width: '75%', marginBottom: '35px' }}
    >
      <Link className="d-flex justify-content-center" to="/products">
        <img src={banner} alt="banner" style={{ borderRadius: '30px' }} />
      </Link>
    </div>
  );
};

export default Banner;
