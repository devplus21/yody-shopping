import React from 'react';

import imgAbout from '../../assets/images/imgabout.png';
import './style.scss';
import { PhoneOutlined } from '@ant-design/icons';

function About() {
  return (
    <div
      style={{ marginTop: '126px', marginBottom: '100px' }}
      className="container"
    >
      <div className="row">
        <div className="col-md-6 About_left">
          <img
            src={imgAbout}
            alt=""
            style={{ width: '80%', borderRadius: '25px' }}
          />
        </div>
        <div className="col-md-6">
          <div className="infoContent">
            <h1
              style={{
                fontWeight: '700',
                fontSize: '48px ',
                fontStyle: 'normal',
                textTransform: 'none',
                margin: '0 auto 0 0',
              }}
            >
              Về chúng tôi
            </h1>
            <div> </div>
            <div
              style={{
                letterSpacing: '0px',
                lineHeight: '2',
                fontSize: '1rem',
                margin: '43px 0 0',
              }}
            >
              {' '}
              Tự hào là thương hiệu Việt, không chỉ mang đến những sản phẩm đẹp
              mà còn trao gửi những Giá trị thật - Hạnh phúc đích thực đến tận
              tay khách hàng.
            </div>
            <div
              style={{
                letterSpacing: '0px',
                lineHeight: '2',
                fontSize: '1rem',
                margin: '43px 0 0',
                fontWeight: '700',
              }}
            >
              {' '}
              Liên hệ chúng tôi qua
            </div>
            <div
              className="phoneNumber"
              style={{
                display: 'flex',
                fontSize: '40px',
                alignItems: 'center',
              }}
            >
              <PhoneOutlined
                style={{ marginRight: '5px ', color: '#ea8496 !important' }}
              />
              <p style={{ margin: '0', fontWeight: '700' }}>+84 382 567 8910</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
