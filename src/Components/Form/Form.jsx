import React, { useState, useContext } from 'react';
import axios from 'axios';
import stl from './Form.module.css';

import useForm from '../../Util/useForm';
import Spinner from '../Spinner/Spinner';
import { ProductContext } from '../../Util/ProductContext';
import AddProduct from './AddProduct/AddProduct';

const Form = ({ history }) => {
  const [inputValues, handleChanges] = useForm();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { setValue } = useContext(ProductContext);

  const sendProduct = (e) => {
    e.preventDefault();

    setLoading(true);

    axios
      .post('https://fakestoreapi.com/products', {
        ...inputValues
      })
      .then((res) => {
        setValue(res.data);
        setLoading(false);
        history.replace('/avalith-react-store-app');
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <h1 className={stl.error}>
          Unexpected error occurred :(
          <p>Please refresh the page and try again.</p>
        </h1>
      ) : (
        <>
          <h1 className={stl.text}>React store</h1>

          <form onSubmit={sendProduct} className={stl.card}>
            <h1>ADD A NEW PRODUCT</h1>

            <AddProduct
              inputValues={inputValues}
              handleChanges={handleChanges}
            />
            <button type="submit" className={stl.btn}>
              Upload new product
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default Form;
