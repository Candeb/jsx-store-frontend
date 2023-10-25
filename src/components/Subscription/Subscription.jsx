import React from 'react';
import { DescCardProduct } from '../../pages/Sneakers/Products/ProductsStyles';
import {
  BtnSubmit,
  ContainerFormSubs,
  ContainerSubs,
  ContainerTextSubs,
  FormSubs,
  InputEmail,
  TitleSubs,
} from './SubscriptionStyles';

export const Subscription = () => {
  return (
    <>
      <div
        name="suscribe"
        id="suscribe"
        style={{ backgroundColor: 'rgb(21, 11, 4)', height: '50px' }}
      >
        {' '}
      </div>
      <ContainerSubs>
        <ContainerTextSubs>
          <TitleSubs>10% OFF EN TU PRIMER PEDIDO</TitleSubs>
          <DescCardProduct>
            {' '}
            Ingresa tu email para recibir novedades exclusivas, actualizaciones
            y mucho más.{' '}
          </DescCardProduct>
        </ContainerTextSubs>
        <ContainerFormSubs>
          <FormSubs>
            <InputEmail placeholder="Ingresa tu email" />
            <BtnSubmit> Suscribirme </BtnSubmit>
            <DescCardProduct>
              Al suscribirte, aceptas nuestra Política de Privacidad.
            </DescCardProduct>
          </FormSubs>
        </ContainerFormSubs>
      </ContainerSubs>
    </>
  );
};
