import React from 'react';
import { useMutation } from 'react-query';
import { addProduct } from '../../hooks/products/useAddProduct';

export const Formprueba = () => {
  const addProductMutation = useMutation({
    mutationFn: addProduct,
  });

  const handleProdSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const product = Object.fromEntries(formData);
    addProductMutation.mutate(product);
    console.log('product--->', product);
  };

  return (
    <form onSubmit={handleProdSubmit}>
      <label htmlFor="name">name</label>
      <input type="text" id="name" name="name" />

      <label htmlFor="description">description</label>
      <input type="text" id="description" name="description" />

      <label htmlFor="price">price</label>
      <input type="number" id="price" name="price" />

      <label htmlFor="picture">picture</label>
      <input type="text" id="picture" name="picture" />

      <label htmlFor="brandsId">brandsId</label>
      <input type="number" id="brandsId" name="brandsId" />

      <button> add product </button>
    </form>
  );
};
