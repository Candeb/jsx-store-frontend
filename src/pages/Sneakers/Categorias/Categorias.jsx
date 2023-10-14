import React from 'react';
import {
  ContainerCardsCategorias,
  ContainerCategorias,
  TitleCategoria,
} from './CategoriasStyles';
import { Categoria } from './Categoria';
import axios from 'axios';

export const fetchBrands = () => {
  const url = 'https://jsx-store-api.onrender.com/brand/allbrands';
  return axios.get(url);
};

export const Categorias = ({ brands, onCategoriaClick }) => {
  return (
    <ContainerCategorias>
      <TitleCategoria>¿Que buscas hoy?</TitleCategoria>

      <ContainerCardsCategorias>
        {brands &&
          brands.data.map((brand) => (
            <Categoria
              key={brand.id}
              name={brand.name}
              picture={brand.picture}
              onCategoriaClick={onCategoriaClick}
              brandId={brand.id}
            />
          ))}
      </ContainerCardsCategorias>
    </ContainerCategorias>
  );
};
