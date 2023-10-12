import React, { useEffect } from 'react';
import {
  ContainerCardsCategorias,
  ContainerCategorias,
  TitleCategoria,
} from './CategoriasStyles';
import { Categoria } from './Categoria';
import axios from 'axios';
import { useQuery } from 'react-query';
import { Loader } from '../../../components/Loader/Loader';
import { useDispatch } from 'react-redux';

export const fetchBrands = () => {
  const url = 'https://jsx-store-api.onrender.com/brand/allbrands';
  return axios.get(url);
};

export const Categorias = ({ setSelectedBrand }) => {
  const { isLoading, data, error, isError } = useQuery('brands', fetchBrands);

  const dispatch = useDispatch();

  const handleCategoryClick = () => {
    // Llama a setSelectedBrand para establecer la marca seleccionada
    setSelectedBrand(name);
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  return (
    <ContainerCategorias>
      <TitleCategoria>¿Que buscas hoy?</TitleCategoria>

      {isLoading && <Loader />}
      {isError && (
        <h2 style={{ color: 'red', textAling: 'center' }}> {error.message} </h2>
      )}

      <ContainerCardsCategorias>
        {data?.data.map((brand) => (
          <Categoria
            key={brand.id}
            name={brand.name}
            picture={brand.picture}
            setSelectedBrand={setSelectedBrand} // Pasa la función setSelectedBrand
          />
        ))}
      </ContainerCardsCategorias>
    </ContainerCategorias>
  );
};
