import { React, useEffect } from 'react';
import * as cartActions from '../../../redux/cart/cart-actions';
import { IoCloseOutline, IoBagOutline, IoTrashOutline } from 'react-icons/io5';
import BtnShop, {
  ContainerButtons,
  ContainerCartWrapper,
  ModalOverlayStyled,
} from './ModalCartStyles';
import {
  ContainerCart,
  ContainerProducts,
  ContainerInfoPrices,
  TitleCart,
  ContainerTextInfo,
  ContainerSubtotalCart,
  ContainerTotalCart,
  BtnCloseCart,
  EmptyCart,
  IconEmptyCart,
  TextEmptyCart,
} from './ModalCartStyles';
import { ModalCartCard } from './ModalCartCard';
import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from '../../../utils';
import { AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../../App';

const ModalCart = () => {
  const { cartItems, shippingCost } = useSelector((state) => state.cart);
  const hiddenCart = useSelector((state) => state.cart.hidden);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!hiddenCart) {
      dispatch(cartActions.toggleHiddenCart());
    }
  }, [dispatch]);

  const totalPrice = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);

  return (
    <>
      {!hiddenCart && (
        <ModalOverlayStyled
          onClick={() => dispatch(cartActions.toggleHiddenCart())}
          onScroll={() => dispatch(cartActions.toggleHiddenCart())}
          isHidden={hiddenCart}
        />
      )}

      <AnimatePresence>
        {!hiddenCart && (
          <ContainerCartWrapper
            initial={{ translateX: 600 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 600 }}
            transition={{ type: 'spring', damping: 27 }}
            key="cart-modal"
          >
            <ContainerCart>
              <ContainerButtons>
                <BtnCloseCart>
                  <IoCloseOutline
                    onClick={() => dispatch(cartActions.toggleHiddenCart())}
                  />
                </BtnCloseCart>
                <BtnCloseCart disabled={!cartItems.length}>
                  <IoTrashOutline
                    onClick={() => {
                      const confirmClear = window.confirm(
                        '¿Estás seguro de que deseas limpiar el carrito?'
                      );
                      if (confirmClear) {
                        dispatch(cartActions.clearCart());
                        window.alert('¡El carrito se ha limpiado con éxito!');
                      }
                    }}
                  />
                </BtnCloseCart>
              </ContainerButtons>

              <TitleCart> TU CARRITO </TitleCart>

              <ContainerProducts>
                {cartItems.length ? (
                  cartItems.map((item) => (
                    <ModalCartCard key={item.id} {...item} />
                  ))
                ) : (
                  <EmptyCart>
                    <IconEmptyCart>
                      <IoBagOutline />
                    </IconEmptyCart>
                    <TextEmptyCart>
                      No hay productos en el carrito
                    </TextEmptyCart>
                  </EmptyCart>
                )}
              </ContainerProducts>

              <ContainerInfoPrices>
                <ContainerSubtotalCart>
                  <ContainerTextInfo>Subtotal:</ContainerTextInfo>
                  <ContainerTextInfo>
                    {formatPrice(totalPrice)}
                  </ContainerTextInfo>
                </ContainerSubtotalCart>

                <ContainerSubtotalCart>
                  <ContainerTextInfo>Costo de envío: </ContainerTextInfo>
                  <ContainerTextInfo>
                    {formatPrice(shippingCost)}
                  </ContainerTextInfo>
                </ContainerSubtotalCart>
              </ContainerInfoPrices>

              <ContainerTotalCart>
                <ContainerTextInfo none={!cartItems.length}>
                  Total:
                </ContainerTextInfo>
                <ContainerTextInfo>
                  {' '}
                  {formatPrice(totalPrice + shippingCost)}{' '}
                </ContainerTextInfo>
              </ContainerTotalCart>

              <Link to="/checkout">
                {' '}
                <BtnShop onClick={scrollToTop} disabled={!cartItems.length}>
                  Continuar la compra{' '}
                </BtnShop>
              </Link>
            </ContainerCart>
          </ContainerCartWrapper>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalCart;
