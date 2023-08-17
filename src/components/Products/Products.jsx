import React, { useEffect, useState } from 'react';
import {
  ButtonVer,
  ChosenCategory,
  ContainerButtons,
  ContainerCardsProducts,
  ContainerProducts,
  ContainerTitles,
  TitleProducts,
} from './ProductsStyles';
import { CardProduct } from './CardProduct';
import { useSelector } from 'react-redux';
import { INITIAL_LIMIT } from '../../utils';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Loader } from '../Loader/Loader';

export const fetchProducts = () => {
  // const url = 'http://localhost:3002/product/products';
  const url = 'https://jsx-store-api.onrender.com/product/products';
  return axios.get(url);
};

export const Products = () => {
  const { isLoading, data, error, isError } = useQuery(
    'products',
    fetchProducts
  );

  useEffect(() => {
    fetchProducts();
  });

  let products = useSelector((state) => state.products.products);
  let totalProducts = products.length;

  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );
  if (selectedCategory) {
    products = data?.data.filter(
      (product) => product.categories === selectedCategory
    );
  }
  const [limit, setLimit] = useState(INITIAL_LIMIT);
  useEffect(() => setLimit(INITIAL_LIMIT), [selectedCategory]);

  return (
    <ContainerProducts id="sneakers" name="sneakers">
      <ContainerTitles>
        <TitleProducts> NUESTROS PRODUCTOS</TitleProducts>
        {isLoading && <Loader />}
        {isError && (
          <h2 style={{ color: 'red', textAling: 'center' }}>
            {' '}
            {error.message}{' '}
          </h2>
        )}
        <ChosenCategory>{selectedCategory} </ChosenCategory>
      </ContainerTitles>
      <ContainerCardsProducts>
        {data?.data.map((product, i) => {
          if (limit > i) {
            return <CardProduct key={product.id} {...product} />;
          } else {
            return null;
          }
        })}
      </ContainerCardsProducts>

      <ContainerButtons>
        {' '}
        <ButtonVer
          onClick={() => setLimit(limit - INITIAL_LIMIT)}
          disabled={INITIAL_LIMIT === limit}
        >
          Ver menos
        </ButtonVer>
        <ButtonVer
          disabled={totalProducts <= limit}
          onClick={() => setLimit(limit + INITIAL_LIMIT)}
        >
          Ver mas
        </ButtonVer>
      </ContainerButtons>
    </ContainerProducts>
  );
};
