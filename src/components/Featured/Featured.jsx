import React, { useEffect, useState } from 'react';
import {
  ContainerCardsFeatured,
  ContainerFeatured,
  TitleFeatured,
} from './FeaturedStyles';
import { CardFeatured } from './CardFeatured';
import { useQuery } from 'react-query';
import { Loader } from '../Loader/Loader';
import axios from 'axios';

export const fetchProducts = () => {
  const url = 'https://jsx-store-api.onrender.com/product/products';
  return axios.get(url);
};

export const Featured = () => {
  const { isLoading, data, error, isError } = useQuery(
    'products',
    fetchProducts
  );

  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    if (!isLoading && data) {
      const allProducts = data.data;
      const randomIndices = [];
      while (randomIndices.length < 3) {
        const randomIndex = Math.floor(Math.random() * allProducts.length);
        if (!randomIndices.includes(randomIndex)) {
          randomIndices.push(randomIndex);
        }
      }
      const randomProductsData = randomIndices.map(
        (index) => allProducts[index]
      );
      setRandomProducts(randomProductsData);
    }
  }, [isLoading, data]);

  return (
    <ContainerFeatured>
      <TitleFeatured>DESTACADOS FLASH</TitleFeatured>
      {isLoading && <Loader />}
      {isError && (
        <h2 style={{ color: 'red', textAlign: 'center' }}> {error.message} </h2>
      )}
      <ContainerCardsFeatured>
        {randomProducts.map((recomendado) => (
          <CardFeatured key={recomendado.id} {...recomendado} />
        ))}
      </ContainerCardsFeatured>
    </ContainerFeatured>
  );
};
