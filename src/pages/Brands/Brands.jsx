import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header';
import axios from 'axios';
import { Divbrands } from './BrandsStyles';

export const Brands = () => {
  const url = 'http://localhost:3002/brand/brands';
  const [brands, setBrand] = useState([]);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [picture, setPicture] = useState('');

  useEffect(() => {
    getProducts();
  });

  const getProducts = async () => {
    try {
      const response = await axios.get(url);

      setBrand(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />

      <p> brands </p>
      {brands.map((brand, i) => (
        <tr key={brand.id}>
          <td> {i + 1} </td>
          <td> {brand.name} </td>
          <td>
            <img src={brand.picture} />
          </td>
        </tr>
      ))}
    </>
  );
};
