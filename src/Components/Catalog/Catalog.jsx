import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import stl from './Catalog.module.css';

import Spinner from '../Spinner/Spinner';
import Product from './Product/Product';
import { ProductContext } from '../../Util/ProductContext';

const Catalog = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { value } = useContext(ProductContext);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        if (value) {
          value.id += res.data.length;
          setItems([value, ...res.data]);
        } else {
          setItems(res.data);
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });

    return () => {
      setItems([]);
    };
  }, [value]);

  return (
    <>
      <h1 className={stl.text}>React store</h1>
      <div className={stl.cardContainer}>
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <h1 className={stl.error}>
            Unexpected error occurred :(
            <p>Please refresh the page and try again.</p>
          </h1>
        ) : (
          items.map((i) => <Product key={i.id} {...i} />)
        )}
      </div>
    </>
  );
};

export default Catalog;
