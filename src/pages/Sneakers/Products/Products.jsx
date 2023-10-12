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
import { INITIAL_LIMIT } from '../../../utils';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Loader } from '../../../components/Loader/Loader';

export const fetchProducts = () => {
  const url = 'https://jsx-store-api.onrender.com/product/products';
  return axios.get(url);
};

export const Products = ({ selectedBrand, selectedCategory }) => {
  const { isLoading, data, error, isError } = useQuery(
    'products',
    fetchProducts
  );

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [limit, setLimit] = useState(INITIAL_LIMIT);

  useEffect(() => {
    fetchProducts().then((response) => {
      let products = response.data;

      if (selectedBrand) {
        products = products.filter(
          (product) => product.brand === selectedBrand
        );
      }

      if (selectedCategory) {
        products = products.filter(
          (product) => product.categories === selectedCategory
        );
      }

      setFilteredProducts(products);
    });
  }, [selectedBrand, selectedCategory]);

  return (
    <ContainerProducts id="sneakers" name="sneakers">
      <ContainerTitles>
        <TitleProducts> NUESTROS PRODUCTOS </TitleProducts>
        {isLoading && <Loader />}
        {isError && (
          <h2 style={{ color: 'red', textAlign: 'center' }}>
            {' '}
            {error.message}{' '}
          </h2>
        )}
        <ChosenCategory>{selectedCategory} </ChosenCategory>
      </ContainerTitles>
      <ContainerCardsProducts>
        {filteredProducts.map((product, i) => {
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
          disabled={filteredProducts.length <= limit}
          onClick={() => setLimit(limit + INITIAL_LIMIT)}
        >
          Ver mas
        </ButtonVer>
      </ContainerButtons>
    </ContainerProducts>
  );
};
