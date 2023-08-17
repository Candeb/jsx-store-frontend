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
import { IoAdd, IoRemove } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import * as cartActions from '../../../redux/cart/cart-actions';
import { formatPrice } from '../../../utils/formatPrice';

export const ModalCartCard = ({ title, img, descr, id, price, quantity }) => {
  const dispatch = useDispatch();

  return (
    <CardProductCart>
      <ImgProductCart>
        <img src={img} alt={title} />
      </ImgProductCart>
      <DescriptionProductCart>
        <TitleProductCart>{title}</TitleProductCart>
        <TextDescriptionProductCart>{descr}</TextDescriptionProductCart>
        <ContainerQuantityPrice>
          <ContainerQuantityProduct>
            <TextDescriptionProductCart> Cantidad</TextDescriptionProductCart>
            <BtnQuantity
              onClick={() => dispatch(cartActions.removeFromCart(id))}
            >
              {' '}
              <IoRemove />{' '}
            </BtnQuantity>
            <QuantityProduct> {quantity} </QuantityProduct>
            <BtnQuantity
              onClick={() =>
                dispatch(
                  cartActions.addToCart({
                    title,
                    img,
                    descr,
                    id,
                    price,
                    quantity,
                  })
                )
              }
            >
              {' '}
              <IoAdd />
            </BtnQuantity>
          </ContainerQuantityProduct>

          <PriceProductCart> {formatPrice(price)} </PriceProductCart>
        </ContainerQuantityPrice>
      </DescriptionProductCart>
    </CardProductCart>
  );
};
