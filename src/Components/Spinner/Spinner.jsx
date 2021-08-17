import React from 'react';
import stl from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={stl['lds-dual-ring']}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
