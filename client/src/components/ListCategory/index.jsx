import React from 'react';
import './styles.scss';
import { dataListProducts } from './data';
import { Link } from 'react-router-dom';

function ListCategory() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-3">
          <div className="text-tit">
            <h2>Hãy Khám phá nay thế giới mua sắm tại Shop Yody</h2>
          </div>
        </div>
        <div className="col-md-9 ">
          <h2>DANH MỤC SẢN PHẨM</h2>
          <div className="row">
            {dataListProducts.map((item) => {
              return (
                <Link to={item.path} className="col-md-2" key={item.id}>
                  <div className="listProductItem_container">
                    <img src={item.img} alt="category" />
                    <div className="listProductItem_title">{item.name}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListCategory;
