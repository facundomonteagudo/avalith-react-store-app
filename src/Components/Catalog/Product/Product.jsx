import React from 'react';
import stl from './Product.module.css';

const Product = ({ title, description, price, category, image }) => {
  return (
    <div className={stl.card}>
      <dir className={stl.imgContainer}>
        <img src={image} alt={title} className={stl.img} />
      </dir>

      <div className={stl.infobox}>
        <h2 className={stl.title}>{title}</h2>

        <p className={stl.cat}>{`Category : ${category}`}</p>

        <div className={`${stl.tag} ${stl.price}`}>{`Price : $${price}`}</div>

        <div className={` ${stl.desc}`}>
          {`${
            description.length < 300
              ? description
              : description.substring(0, 300) + '...'
          }`}
        </div>

        <button className={stl.btn}>BUY NOW !</button>
      </div>
    </div>
  );
};

export default Product;
