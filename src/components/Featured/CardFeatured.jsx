import React, { useState } from 'react';
import * as cartActions from '../../redux/cart/cart-actions';
import {
  BtnShopCard,
  ContainerCardFeatured,
  ContainerImg,
  ContainerInfoCard,
  PriceCard,
  TitleCard,
} from './FeaturedStyles';
import { formatPrice } from '../../utils/index';
import { useDispatch } from 'react-redux';
import { ModalMessage } from '../../pages/Sneakers/Products/ModalMessage';

export const CardFeatured = (props) => {
  const { id, name, description, price, picture, available } = props;
  const dispatch = useDispatch();

  const [estadoModal1, cambiarEstadoModal] = useState(false);
  const handlerModal = () => {
    dispatch(cartActions.addToCart({ id, name, picture, price }));
    cambiarEstadoModal(!estadoModal1);
    setTimeout(() => {
      cambiarEstadoModal(false);
    }, 1000);
  };

  return (
    <>
      {' '}
      <ContainerCardFeatured>
        <ContainerImg src={picture} alt={name} />
        <ContainerInfoCard>
          <TitleCard>{name}</TitleCard>
          <PriceCard>{formatPrice(price)}</PriceCard>
        </ContainerInfoCard>
        <BtnShopCard onClick={handlerModal}>Comprar</BtnShopCard>
      </ContainerCardFeatured>{' '}
      <ModalMessage estado={estadoModal1} cambiarEstado={cambiarEstadoModal} />
    </>
  );
};
