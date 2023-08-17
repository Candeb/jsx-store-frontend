import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoBagOutline } from 'react-icons/io5';
import {
  ContainerCartIcon,
  MenuIconCart,
  QuantityProductsCart,
} from '../HeaderStyles';
import * as cartActions from '../../../redux/cart/cart-actions';

export const CartIcon = () => {
  const totalCartItems = useSelector((state) => state.cart.cartItems).reduce(
    (acc, item) => (acc += item.quantity),
    0
  );

  const dispatch = useDispatch();

  return (
    <ContainerCartIcon onClick={() => dispatch(cartActions.toggleHiddenCart())}>
      <MenuIconCart>
        <IoBagOutline />
      </MenuIconCart>
      <QuantityProductsCart> {totalCartItems} </QuantityProductsCart>
    </ContainerCartIcon>
  );
};
