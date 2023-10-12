import React, { useEffect, useState } from 'react';
import {
  ModalContainerStyled,
  ModalDescriptionStyled,
  ModalTitleStyled,
} from '../AdminBrand/ModalFormBrands/ModalFormStyles';
import Modal from '@mui/material/Modal';
import { useQuery } from 'react-query';
import { fetchProducts } from '../../pages/Admin/AdminProducts/AdminProducts';
import { OpenModalProduct } from './OpenModalProduct';
import { Loader } from '../Loader/Loader';

export const ModalOrderProduct = ({ message, description, productId }) => {
  const { isLoading, data, error, isError } = useQuery(
    'products',
    fetchProducts,
    {
      onSuccess: (data) =>
        console.log('Exito en la peticion de products en orders', data),
      onError: (error) =>
        console.log('Error en la peticion de products en orders', error),
    }
  );

  useEffect(() => {
    fetchProducts();
  }, []);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let products = [];

  let filteredProduct = products.filter((product) => product.id === productId);
  console.log(products);
  console.log(filteredProduct);

  return (
    <div>
      {isLoading && <Loader />}
      {isError && (
        <h2
          style={{
            color: 'red',
          }}
        >
          {error.message}
        </h2>
      )}
      <OpenModalProduct productId={productId} handleOpen={handleOpen}>
        Open modal
      </OpenModalProduct>
      <Modal
        open={open}
        onClose={() => {
          handleClose();
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContainerStyled>
          <ModalTitleStyled>{message}</ModalTitleStyled>
          <ModalDescriptionStyled>{description}</ModalDescriptionStyled>

          {filteredProduct?.map((product) => {
            return (
              <div key={product.id}>
                <p> {product.id} </p>
                <p> {product.name} </p>
                <p> {product.price} </p>
              </div>
            );
          })}
        </ModalContainerStyled>
      </Modal>
    </div>
  );
};
