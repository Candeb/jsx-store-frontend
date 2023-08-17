import React, { useEffect } from 'react';
import {
  ContainerCardsFeatured,
  ContainerFeatured,
  TitleFeatured,
} from './FeaturedStyles';
import { CardFeatured } from './CardFeatured';
import { useSelector } from 'react-redux';
import { fetchProducts } from '../Products/Products';
import { useQuery } from 'react-query';
import { Loader } from '../Loader/Loader';

export const Featured = () => {
  const { isLoading, data, error, isError } = useQuery(
    'products',
    fetchProducts
  );
  useEffect(() => {
    fetchProducts();
  });

  const recommended = useSelector((state) => state.recommended.recommended);

  return (
    <ContainerFeatured>
      <TitleFeatured>DESTACADOS FLASH</TitleFeatured>
      {isLoading && <Loader />}
      {isError && (
        <h2 style={{ color: 'red', textAling: 'center' }}> {error.message} </h2>
      )}
      <ContainerCardsFeatured>
        {data?.data.map((recomendado) => (
          <CardFeatured key={recomendado.id} {...recomendado} />
        ))}
      </ContainerCardsFeatured>
    </ContainerFeatured>
  );
};
