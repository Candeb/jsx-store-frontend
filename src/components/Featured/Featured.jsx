import React, { useEffect, useState } from 'react';
import {
  BtnVerMas,
  ContainerCardsFeatured,
  ContainerFeatured,
  TitleFeatured,
} from './FeaturedStyles';
import { CardFeatured } from './CardFeatured';
import { useQuery } from 'react-query';
import { Loader } from '../Loader/Loader';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../App';

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
    if (!isLoading && data && data.data) {
      // Asegúrate de que data.data exista
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
      <Link
        to="/sneakers"
        onClick={scrollToTop}
        style={{ zIndex: '1', marginTop: '1rem' }}
      >
        <BtnVerMas> ver todos los productos </BtnVerMas>
      </Link>
    </ContainerFeatured>
  );
};
