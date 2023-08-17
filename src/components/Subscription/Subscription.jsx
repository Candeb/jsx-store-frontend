import React from 'react';
import { DescCardProduct } from '../Products/ProductsStyles';
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
    <ContainerSubs name="suscribe" id="suscribe">
      <ContainerTextSubs>
        <TitleSubs>-10% EN TU PRIMER PEDIDO</TitleSubs>
        <DescCardProduct>
          {' '}
          Ingresa tu email para recibir novedades exclusivas, actualizaciones y
          mucho más.{' '}
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
  );
};
