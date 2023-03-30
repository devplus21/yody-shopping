import React from 'react';
import ListCategory from '../../components/ListCategory';

import Policy from '../../components/Policy';
import SlideHome from '../../components/SlideHome';
import './styles.scss';

const Home = () => {
  return (
    <div className="home">
      <SlideHome />
      <ListCategory />
      <Policy />
    </div>
  );
};

export default Home;
