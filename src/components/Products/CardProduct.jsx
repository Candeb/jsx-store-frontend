import React from 'react';
import * as cartActions from '../../redux/cart/cart-actions';
import { useDispatch } from 'react-redux';
import { PriceCard, BtnShopCard } from '../Featured/FeaturedStyles';
import {
  ContainerCardImg,
  ContainerCardInfoProduct,
  ContainerCardProduct,
  DescCardProduct,
  NameCardProduct,
} from './ProductsStyles';
import { formatPrice } from '../../utils';
import { useState } from 'react';
import { ModalMessage } from './ModalMessage';

export const CardProduct = (props) => {
  const { id, name, description, price, picture, available } = props;
  const dispatch = useDispatch();

  const [estadoModal1, cambiarEstadoModal] = useState(false);
  const handlerModal = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        description,
        price,
        picture,
        available,
      })
    );
    cambiarEstadoModal(!estadoModal1);
    setTimeout(() => {
      cambiarEstadoModal(false);
    }, 1000);
  };

  return (
    <ContainerCardProduct>
      <ContainerCardImg>
        <img src={picture} alt={name} />
      </ContainerCardImg>
      <ContainerCardInfoProduct>
        <NameCardProduct> {name} </NameCardProduct>
        <DescCardProduct>{description}</DescCardProduct>
        <PriceCard> {formatPrice(price)} </PriceCard>
      </ContainerCardInfoProduct>
      <BtnShopCard onClick={handlerModal}>Agregar al carrito</BtnShopCard>
      <ModalMessage estado={estadoModal1} cambiarEstado={cambiarEstadoModal} />
    </ContainerCardProduct>
  );
};
