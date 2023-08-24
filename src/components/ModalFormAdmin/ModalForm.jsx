import React, { useState } from 'react';

import { handlerSubmit } from '../../utils/functions';
import { ModalInput } from '../ModalInputAdmin/ModalInput';
import {
  ButtonsContainerStyled,
  InputsContainerStyled,
  ModalContainerStyled,
  ModalDescriptionStyled,
  ModalTitleStyled,
} from './ModalFormStyles';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import { OpenModal } from '../OpenModal/OpenModal';
import { useAddBrand } from '../../hooks/brands/useAddBrand';

export const ModalForm = () => {
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
          <ModalTitleStyled>¡React Query Mutations!</ModalTitleStyled>
          <ModalDescriptionStyled>
            A continuación vamos a rellenar un formulario para poder realizar
            nuestras primeras mutaciones.
          </ModalDescriptionStyled>
          <InputsContainerStyled>
            <ModalInput
              type="text"
              name="name"
              label="Nombre de la marca"
              handleChange={handleChange}
            />
            {/* <ModalInput
              type="text"
              name="genre"
              label="Género musical"
              handleChange={handleChange}
            />
            <ModalInput
              type="text"
              name="lastSong"
              label="Último lanzamiento"
              handleChange={handleChange}
            />
            <ModalInput
              type="number"
              name="listeners"
              placeholder="Completarlo con números"
              label="N° de Oyentes"
              handleChange={handleChange}
            /> */}
            <ModalInput
              type="text"
              name="picture"
              placeholder="Completarlo con el link de la imágen"
              label="Foto de perfil"
              handleChange={handleChange}
            />
          </InputsContainerStyled>

          <ButtonsContainerStyled>
            <Button
              sx={{ backgroundColor: '#4c1d95' }}
              variant="contained"
              onClick={() => {
                handleClose();
                setForm({});
              }}
            >
              Cancelar
            </Button>
            <Button
              sx={{ backgroundColor: '#4c1d95' }}
              variant="contained"
              onClick={() =>
                handlerSubmit(form)
                  .then((res) => {
                    handleClose();
                    setForm({});
                    mutate(res);
                    // window.location.reload();
                  })
                  .catch((err) => alert(err))
              }
            >
              Enviar
            </Button>
          </ButtonsContainerStyled>
        </ModalContainerStyled>
      </Modal>
    </div>
  );
};
