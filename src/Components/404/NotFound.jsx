import React from 'react';
import stl from './NotFound.module.css';

const NotFound = ({ history }) => {
  return (
    <div className={stl.card}>
      <h1 style={{ fontSize: '10rem', textAlign: 'center' }}>
        404 <p style={{ fontSize: '5rem' }}>Page not found :(</p>
        <button className={stl.btn} onClick={() => history.replace('/')}>
          GO BACK TO THE HOMEPAGE
        </button>
      </h1>
      <img
        src="https://spikeandfreak.com/wp-content/uploads/2019/03/img-404.gif"
        alt=""
      />
    </div>
  );
};

export default NotFound;
