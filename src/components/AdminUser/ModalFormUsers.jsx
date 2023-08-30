import React, { useState } from 'react';
import { handlerSubmit } from '../../utils/functions';
import { ModalInput } from '../ModalInputAdmin/ModalInput';
import {
  ButtonsContainerStyled,
  InputsContainerStyled,
  ModalContainerStyled,
  ModalDescriptionStyled,
  ModalTitleStyled,
} from '../AdminBrand/ModalFormBrands/ModalFormStyles';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import { OpenModal } from '../OpenModal/OpenModal';
import { useAddUser } from '../../hooks/users/useAddUser';

export const ModalFormUsers = ({ message, description }) => {
  const [form, setForm] = useState({});
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { mutate } = useAddUser();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const renderField = (label, name, type) => (
    <div style={{ width: '100%' }}>
      <label style={{ color: 'white' }}>{label}</label>
      <ModalInput handleChange={handleChange} name={name} type={type} />
    </div>
  );

  return (
    <div>
      <OpenModal handleOpen={handleOpen}>Open modal</OpenModal>
      <Modal
        open={open}
        onClose={() => {
          handleClose();
          setForm({});
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContainerStyled>
          <ModalTitleStyled>{message}</ModalTitleStyled>
          <ModalDescriptionStyled>{description}</ModalDescriptionStyled>

          <InputsContainerStyled>
            {renderField('Nombre', 'name', 'text')}
            {renderField('Apellido', 'lastname', 'text')}
            {renderField('Email', 'email', 'email')}
            {renderField('Password', 'password', 'password')}
          </InputsContainerStyled>

          <ButtonsContainerStyled>
            <Button
              sx={{ backgroundColor: '#536262' }}
              variant="contained"
              onClick={() => {
                handleClose();
                setForm({});
              }}
            >
              Cancelar
            </Button>
            <Button
              sx={{ backgroundColor: 'green' }}
              variant="contained"
              onClick={() =>
                handlerSubmit(form)
                  .then((res) => {
                    handleClose();
                    setForm({});
                    mutate(res);
                    console.log('user--->', res);
                  })
                  .catch((err) => alert(err))
              }
            >
              Crear
            </Button>
          </ButtonsContainerStyled>
        </ModalContainerStyled>
      </Modal>
    </div>
  );
};