import React, { useEffect, useState } from 'react';
import {
  ModalContainerStyled,
  ModalDescriptionStyled,
  ModalTitleStyled,
} from '../AdminBrand/ModalFormBrands/ModalFormStyles';
import Modal from '@mui/material/Modal';
import { OpenModalUser } from './OpenModalUser';
import { useQuery } from 'react-query';
import { fetchProducts } from '../../pages/Admin/AdminProducts/AdminProducts';

export const ModalOrderProduct = ({ message, description, productId }) => {
  const { isLoading, data, error, isError } = useQuery(
    'products',
    fetchProducts
  );

  useEffect(() => {
    fetchProducts();
  }, []);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // let filteredProduct = data.data.filter((product) => product.id === productId);
  // console.log(data);
  // console.log(filteredProduct);

  return (
    <div>
      <OpenModalUser productId={productId} handleOpen={handleOpen}>
        Open modal
      </OpenModalUser>
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
          <button> ver </button>

          {/* {filteredProduct?.map((product) => {
            return (
              <div key={product.id}>
                <p> {product.name} </p>
                <p> {product.price} </p>
              </div>
            );
          })} */}
        </ModalContainerStyled>
      </Modal>
    </div>
  );
};
