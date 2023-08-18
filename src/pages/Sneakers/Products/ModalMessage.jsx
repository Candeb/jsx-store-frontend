import React from 'react';
import { BoxModalMessage, ContainerModalMessage } from './ProductsStyles';
import { BsFillCartCheckFill } from 'react-icons/bs';

export const ModalMessage = ({ estado, cambiarEstado }) => {
  return (
    <>
      {estado && (
        <ContainerModalMessage>
          <BoxModalMessage>
            {' '}
            Producto añadido al carrito
            <BsFillCartCheckFill />
          </BoxModalMessage>
        </ContainerModalMessage>
      )}
    </>
  );
};
