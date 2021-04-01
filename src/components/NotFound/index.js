import React from 'react';
import './style.scss';

function NotFound() {
  return (
    <div className="not-found__container">
      <div className="notFound">
        <div className="notFound--animTop">
          <h4 className="notFound--animTop--one">4</h4>
          <h4 className="notFound--animTop--two">0</h4>
          <h4 className="notFound--animTop--three">4</h4>
        </div>
        <p className="notFound--animTop--four">Not Found</p>
      </div>
    </div>
  );
}

export default NotFound;
