import React from 'react';
import { Header } from '../../components/Header/Header';
import {
  ContainerBillingDetails,
  ContainerCheckout,
  ContainerOrderSummary,
  TitleOrderSummary,
  OrderSummary,
  ContainerDetailsOrderSummary,
  TitleBillingDetails,
  ContainerInputBig,
  ContainerInputSmall,
  InputBillingDetails,
  LabelInputBillingDetails,
  FormBillingDetails,
  ImgOption,
  BtnSave,
  ContainerProductsOrderSummary,
  ContainerPaymentOptions,
} from './CheckoutStyles';
import { ModalCartCard } from '../../components/Header/Cart/ModalCartCard';
import BtnShop, {
  ContainerInfoPrices,
  ContainerTextInfo,
  ContainerSubtotalCart,
  ContainerTotalCart,
} from '../../components/Header/Cart/ModalCartStyles';
import { useSelector } from 'react-redux';
import { formatPrice } from '../../utils';

export const Checkout = () => {
  const { cartItems, shippingCost } = useSelector((state) => state.cart);

  const totalPrice = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);

  const shop = () => {
    dispatch(cartActions.clearCart());
    window.alert('¡Compra realizada con éxito!');
  };
  return (
    <>
      {' '}
      <Header />
      <ContainerCheckout>
        <ContainerBillingDetails>
          <TitleBillingDetails>Datos de facturación</TitleBillingDetails>
          <FormBillingDetails>
            <ContainerInputBig>
              <ContainerInputSmall>
                <LabelInputBillingDetails>Nombre</LabelInputBillingDetails>
                <InputBillingDetails type="text" autoFocus required />
              </ContainerInputSmall>
              <ContainerInputSmall>
                <LabelInputBillingDetails>Apellido</LabelInputBillingDetails>
                <InputBillingDetails type="text" required />
              </ContainerInputSmall>
            </ContainerInputBig>
            <ContainerInputSmall>
              <LabelInputBillingDetails>Email</LabelInputBillingDetails>
              <InputBillingDetails type="email" required />
            </ContainerInputSmall>
            <ContainerInputBig>
              <ContainerInputSmall>
                <LabelInputBillingDetails>País</LabelInputBillingDetails>
                <InputBillingDetails type="text" required />
              </ContainerInputSmall>
              <ContainerInputSmall>
                <LabelInputBillingDetails>Ciudad</LabelInputBillingDetails>
                <InputBillingDetails type="text" required />
              </ContainerInputSmall>
            </ContainerInputBig>{' '}
            <ContainerInputBig>
              <ContainerInputSmall>
                <LabelInputBillingDetails>Número</LabelInputBillingDetails>
                <InputBillingDetails type="number" required />
              </ContainerInputSmall>
              <ContainerInputSmall>
                <LabelInputBillingDetails>
                  Codigo postal
                </LabelInputBillingDetails>
                <InputBillingDetails type="number" required />
              </ContainerInputSmall>
            </ContainerInputBig>
            <ContainerInputSmall>
              <LabelInputBillingDetails>Direccion</LabelInputBillingDetails>
              <InputBillingDetails type="text" />
            </ContainerInputSmall>
            <ContainerInputSmall>
              <LabelInputBillingDetails>Medio de pago</LabelInputBillingDetails>
              <ContainerPaymentOptions>
                <ContainerInputBig>
                  <InputBillingDetails
                    type="radio"
                    name="payment-method"
                    id="binance-pay"
                    defaultChecked
                  />
                  <LabelInputBillingDetails for="binance-pay">
                    <ImgOption src="https://github.com/Candeb/JSX-STORE/blob/main/src/assets/payment/logo-binance.png?raw=true" />
                  </LabelInputBillingDetails>
                </ContainerInputBig>
                <ContainerInputBig>
                  <InputBillingDetails
                    type="radio"
                    name="payment-method"
                    id="mercado-pago"
                  />
                  <LabelInputBillingDetails for="mercado-pago">
                    <ImgOption src="https://github.com/Candeb/JSX-STORE/blob/main/src/assets/payment/logo-mercadopago.png?raw=true" />
                  </LabelInputBillingDetails>
                </ContainerInputBig>
                <ContainerInputBig>
                  <InputBillingDetails
                    type="radio"
                    name="payment-method"
                    id="pay-pal"
                  />
                  <LabelInputBillingDetails for="pay-pal">
                    <ImgOption src="https://github.com/Candeb/JSX-STORE/blob/main/src/assets/payment/logo-Paypal.png?raw=true" />
                  </LabelInputBillingDetails>
                </ContainerInputBig>
              </ContainerPaymentOptions>
            </ContainerInputSmall>
            <BtnSave>Guardar</BtnSave>
          </FormBillingDetails>
        </ContainerBillingDetails>
        <ContainerOrderSummary>
          <OrderSummary>
            <TitleOrderSummary> Resumen de compra </TitleOrderSummary>
            <ContainerProductsOrderSummary>
              {cartItems.map((item) => (
                <ModalCartCard key={item.id} {...item} />
              ))}
            </ContainerProductsOrderSummary>

            <ContainerDetailsOrderSummary>
              <ContainerInfoPrices>
                <ContainerSubtotalCart>
                  <ContainerTextInfo>Subtotal:</ContainerTextInfo>
                  <ContainerTextInfo>
                    {' '}
                    {formatPrice(totalPrice)}
                  </ContainerTextInfo>
                </ContainerSubtotalCart>

                <ContainerSubtotalCart>
                  <ContainerTextInfo>Costo de envío: </ContainerTextInfo>
                  <ContainerTextInfo>
                    {' '}
                    {formatPrice(shippingCost)}
                  </ContainerTextInfo>
                </ContainerSubtotalCart>
              </ContainerInfoPrices>

              <ContainerTotalCart>
                <ContainerTextInfo>Total:</ContainerTextInfo>
                <ContainerTextInfo>
                  {formatPrice(totalPrice + shippingCost)}
                </ContainerTextInfo>
              </ContainerTotalCart>
            </ContainerDetailsOrderSummary>
            <BtnShop onClick={shop}> FINALIZAR LA COMPRA </BtnShop>
          </OrderSummary>
        </ContainerOrderSummary>
      </ContainerCheckout>
    </>
  );
};
