import React from 'react';

const InfoBox = ({ icon, title, children }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="ihbox-style">
        <div className="ihbox-icon">
          <i className={`fa ${icon}`}></i>
        </div>
        <div className="ihbox-content">
          <h4>{title}</h4>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
