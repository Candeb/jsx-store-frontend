import React, { useEffect, useState } from 'react';
import {
  ModalContainerStyled,
  ModalDescriptionStyled,
  ModalTitleStyled,
} from '../AdminBrand/ModalFormBrands/ModalFormStyles';
import Modal from '@mui/material/Modal';
import { OpenModalUser } from './OpenModalUser';
import { useQuery } from 'react-query';
import { fetchUsers } from '../../pages/Admin/AdminUsers/AdminUsers';

export const ModalOrderUser = ({ message, description, userId }) => {
  const { isLoading, data, error, isError } = useQuery('users', fetchUsers);

  useEffect(() => {
    fetchUsers();
  }, []);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let filteredUser = data.data.filter((user) => user.id === userId);

  return (
    <div>
      <OpenModalUser userId={userId} handleOpen={handleOpen}>
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

          {filteredUser?.map((user) => {
            return (
              <div key={user.id}>
                <p> {user.name} </p>
                <p> {user.lastname} </p>
                <p> {user.email} </p>
              </div>
            );
          })}
        </ModalContainerStyled>
      </Modal>
    </div>
  );
};
