import React from 'react';
import stl from './AddProduct.module.css';

const AddProduct = ({ inputValues, handleChanges }) => {
  return (
    <>
      <div className={stl.formGroup}>
        <input
          className={stl.formField}
          type="text"
          name="title"
          value={inputValues.title || ''}
          onChange={handleChanges}
          placeholder="Title"
          required
        />
        <label htmlFor="title" className={stl.formLabel}>
          Name
        </label>
      </div>

      <div className={stl.formGroup}>
        <input
          className={stl.formField}
          type="text"
          name="category"
          value={inputValues.category || ''}
          onChange={handleChanges}
          placeholder="Category"
          required
        />
        <label htmlFor="category" className={stl.formLabel}>
          Category
        </label>
      </div>

      <div className={stl.formGroup}>
        <input
          className={stl.formField}
          type="number"
          name="price"
          value={inputValues.price || ''}
          onChange={handleChanges}
          placeholder="Price"
          required
        />
        <label htmlFor="price" className={stl.formLabel}>
          Price
        </label>
      </div>

      <div className={stl.formGroup}>
        <input
          className={stl.formField}
          type="text"
          name="description"
          value={inputValues.description || ''}
          onChange={handleChanges}
          placeholder="Description"
          required
        />
        <label htmlFor="description" className={stl.formLabel}>
          Description
        </label>
      </div>

      <div className={stl.formGroup}>
        <input
          className={stl.formField}
          type="text"
          name="image"
          value={inputValues.image || ''}
          onChange={handleChanges}
          placeholder="URL image"
          required
        />
        <label htmlFor="image" className={stl.formLabel}>
          URL image
        </label>
      </div>
    </>
  );
};

export default AddProduct;
