import React from 'react';
import {
  CardProductCart,
  ContainerQuantityPrice,
  ContainerQuantityProduct,
  BtnQuantity,
  DescriptionProductCart,
  ImgProductCart,
  PriceProductCart,
  QuantityProduct,
  TextDescriptionProductCart,
  TitleProductCart,
} from './ModalCartStyles';
import { IoAdd, IoRemove, IoTrashOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import * as cartActions from '../../../redux/cart/cart-actions';
import { formatPrice } from '../../../utils/formatPrice';

export const ModalCartCard = (props) => {
  const { id, name, description, price, picture, quantity } = props;

  const dispatch = useDispatch();

  return (
    <CardProductCart>
      <ImgProductCart>
        <img src={picture} alt={name} />
      </ImgProductCart>
      <DescriptionProductCart>
        <TitleProductCart>
          {name}
          <BtnQuantity onClick={() => dispatch(cartActions.removeFromCart(id))}>
            {' '}
            <IoTrashOutline />{' '}
          </BtnQuantity>
        </TitleProductCart>
        <TextDescriptionProductCart>{description}</TextDescriptionProductCart>
        <ContainerQuantityPrice>
          <ContainerQuantityProduct>
            <TextDescriptionProductCart>
              {quantity} unidad disponible
            </TextDescriptionProductCart>
          </ContainerQuantityProduct>

          <PriceProductCart> {formatPrice(price)} </PriceProductCart>
        </ContainerQuantityPrice>
      </DescriptionProductCart>
    </CardProductCart>
  );
};
