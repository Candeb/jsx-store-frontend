import React, { useState } from 'react';
import {
  ButtonVer,
  ChosenCategory,
  ContainerButtons,
  ContainerCardsProducts,
  ContainerProducts,
  ContainerTitles,
  TitleProducts,
} from './ProductsStyles';
import { INITIAL_LIMIT } from '../../../utils';
import { CardProduct } from './CardProduct';

export const Products = ({ products, selectedBrand }) => {
  const [limit, setLimit] = useState(INITIAL_LIMIT);
  const productsData = products && products.data;

  return (
    <ContainerProducts id="sneakers" name="sneakers">
      <ContainerTitles>
        <TitleProducts> NUESTROS PRODUCTOS </TitleProducts>
        <ChosenCategory>{selectedBrand} </ChosenCategory>
      </ContainerTitles>
      <ContainerCardsProducts>
        {products &&
          products.map((product, i) => {
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
          disabled={productsData?.length <= limit}
          onClick={() => setLimit(limit + INITIAL_LIMIT)}
        >
          Ver mas
        </ButtonVer>
      </ContainerButtons>
    </ContainerProducts>
  );
};
