import React, { useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from '../../utils';
import axios from 'axios';
import * as cartActions from '../../redux/cart/cart-actions';

export const Checkout = () => {
  const [billingDetails, setBillingDetails] = useState({
    nombre: '',
    apellido: '',
    email: '',
    pais: '',
    ciudad: '',
    numero: '',
    codigoPostal: '',
    direccion: '',
    metodoPago: 'binance-pay',
  });

  const handleBillingDetailsChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };
  const token = localStorage.getItem('accessToken');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const dispatch = useDispatch();

  const handleOrderSubmit = async () => {
    try {
      const response = await axios.post(
        'https://jsx-store-api.onrender.com/order/new',

        {
          productsIds: cartItems.map((item) => item.id),
          ...billingDetails,
        },
        config
      );

      // Si la orden se crea con éxito
      console.log('orderr', response.data);
      console.log('datita', billingDetails);

      // Limpia el carrito y muestra una alerta
      dispatch(cartActions.clearCart());
      window.alert('¡Compra realizada con éxito!');
    } catch (error) {
      // Maneja cualquier error que ocurra durante la solicitud
      console.error('errrorr', error);
    }
  };

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
                <InputBillingDetails
                  type="text"
                  autoFocus
                  required
                  name="nombre"
                  value={billingDetails.nombre}
                  onChange={handleBillingDetailsChange}
                />
              </ContainerInputSmall>
              <ContainerInputSmall>
                <LabelInputBillingDetails>Apellido</LabelInputBillingDetails>
                <InputBillingDetails
                  type="text"
                  required
                  name="apellido"
                  value={billingDetails.apellido}
                  onChange={handleBillingDetailsChange}
                />
              </ContainerInputSmall>
            </ContainerInputBig>
            <ContainerInputSmall>
              <LabelInputBillingDetails>Email</LabelInputBillingDetails>
              <InputBillingDetails
                type="email"
                required
                name="email"
                value={billingDetails.email}
                onChange={handleBillingDetailsChange}
              />
            </ContainerInputSmall>
            <ContainerInputBig>
              <ContainerInputSmall>
                <LabelInputBillingDetails>País</LabelInputBillingDetails>
                <InputBillingDetails
                  type="text"
                  required
                  name="pais"
                  value={billingDetails.pais}
                  onChange={handleBillingDetailsChange}
                />
              </ContainerInputSmall>
              <ContainerInputSmall>
                <LabelInputBillingDetails>Ciudad</LabelInputBillingDetails>
                <InputBillingDetails
                  type="text"
                  required
                  name="ciudad"
                  value={billingDetails.ciudad}
                  onChange={handleBillingDetailsChange} //
                />
              </ContainerInputSmall>
            </ContainerInputBig>{' '}
            <ContainerInputBig>
              <ContainerInputSmall>
                <LabelInputBillingDetails>Número</LabelInputBillingDetails>
                <InputBillingDetails
                  type="number"
                  required
                  name="numero"
                  value={billingDetails.numero}
                  onChange={handleBillingDetailsChange} //
                />
              </ContainerInputSmall>
              <ContainerInputSmall>
                <LabelInputBillingDetails>
                  Codigo postal
                </LabelInputBillingDetails>
                <InputBillingDetails
                  type="number"
                  required
                  name="codigoPostal"
                  value={billingDetails.codigoPostal}
                  onChange={handleBillingDetailsChange}
                />
              </ContainerInputSmall>
            </ContainerInputBig>
            <ContainerInputSmall>
              <LabelInputBillingDetails>Direccion</LabelInputBillingDetails>
              <InputBillingDetails
                type="text"
                name="direccion"
                value={billingDetails.direccion}
                onChange={handleBillingDetailsChange} //
              />
            </ContainerInputSmall>
            <ContainerInputSmall>
              <LabelInputBillingDetails>Medio de pago</LabelInputBillingDetails>
              <ContainerPaymentOptions>
                <ContainerInputBig>
                  <InputBillingDetails
                    type="radio"
                    name="payment-method"
                    id="binance-pay"
                    value="binance-pay"
                    checked={billingDetails.metodoPago === 'binance-pay'}
                    onChange={handleBillingDetailsChange} //
                  />
                  <LabelInputBillingDetails for="binance-pay">
                    <ImgOption src="https://github.com/Candeb/jsx-store-frontend/blob/main/src/assets/payment/logo-binance.png?raw=true" />
                  </LabelInputBillingDetails>
                </ContainerInputBig>
                <ContainerInputBig>
                  <InputBillingDetails
                    type="radio"
                    value="mercado-pago"
                    name="payment-method"
                    id="mercado-pago"
                    checked={billingDetails.metodoPago === 'binance-pay'}
                    onChange={handleBillingDetailsChange}
                  />
                  <LabelInputBillingDetails for="mercado-pago">
                    <ImgOption src="https://github.com/Candeb/jsx-store-frontend/blob/main/src/assets/payment/logo-mercadopago.png?raw=true" />
                  </LabelInputBillingDetails>
                </ContainerInputBig>
                <ContainerInputBig>
                  <InputBillingDetails
                    type="radio"
                    name="payment-method"
                    id="pay-pal"
                    value="pay-pal"
                    checked={billingDetails.metodoPago === 'binance-pay'}
                    onChange={handleBillingDetailsChange}
                  />
                  <LabelInputBillingDetails for="pay-pal">
                    <ImgOption src="https://github.com/Candeb/jsx-store-frontend/blob/main/src/assets/payment/logo-Paypal.png?raw=true" />
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
            <BtnShop onClick={handleOrderSubmit}> FINALIZAR LA COMPRA </BtnShop>
          </OrderSummary>
        </ContainerOrderSummary>
      </ContainerCheckout>
    </>
  );
};
