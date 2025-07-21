// src/components/HeaderInfo.jsx

import React from 'react';

const HeaderInfo = ({ headerInfo }) => {
  return (
    <div className="header-info">
      <div className="photo">
        <img src={headerInfo.photo} alt="photo" width="100%" height="auto" />
      </div>
      <div className="name">{headerInfo.name}</div>
      <div className="contact">
        <div className="contact-item">{headerInfo.phone}</div>
        <div className="contact-item">{headerInfo.email}</div>
      </div>
    </div>
  );
};

export default HeaderInfo;