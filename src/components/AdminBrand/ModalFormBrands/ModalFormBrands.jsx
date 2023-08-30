import React, { useState } from 'react';
import { handlerSubmit } from '../../../utils';
import { ModalInput } from '../../ModalInputAdmin/ModalInput';
import {
  ButtonsContainerStyled,
  InputsContainerStyled,
  ModalContainerStyled,
  ModalDescriptionStyled,
  ModalTitleStyled,
} from './ModalFormStyles';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import { OpenModal } from '../../OpenModal/OpenModal';
import { useAddBrand } from '../../../hooks/brands/useAddBrand';

export const ModalFormBrands = ({ message, description }) => {
  const [form, setForm] = useState({});
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { mutate } = useAddBrand();

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
            {renderField('Nombre de la marca', 'name', 'text')}
            {renderField('Imagen de la marca', 'picture', 'text')}
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
