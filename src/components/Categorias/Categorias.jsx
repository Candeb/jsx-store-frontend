import React from 'react';
import {
  ContainerCardsCategorias,
  ContainerCategorias,
  TitleCategoria,
} from './CategoriasStyles';
import { Categoria } from './Categoria';
import axios from 'axios';
import { useQuery } from 'react-query';
import { Loader } from '../Loader/Loader';

export const fetchBrands = () => {
  // const url = 'http://localhost:3002/brand/brands';
  const url = 'https://jsx-store-api.onrender.com/brand/brands';
  return axios.get(url);
};

export const Categorias = () => {
  const { isLoading, data, error, isError } = useQuery('brands', fetchBrands);

  return (
    <ContainerCategorias>
      <TitleCategoria>¿Que buscas hoy?</TitleCategoria>

      {isLoading && <Loader />}
      {isError && (
        <h2 style={{ color: 'red', textAling: 'center' }}> {error.message} </h2>
      )}

      <ContainerCardsCategorias>
        {data?.data.map((brand) => (
          <Categoria key={brand.id} {...brand} />
        ))}
      </ContainerCardsCategorias>
    </ContainerCategorias>
  );
};
