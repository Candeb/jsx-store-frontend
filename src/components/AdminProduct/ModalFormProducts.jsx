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
import { useAddProduct } from '../../hooks/products/useAddProduct';

export const ModalFormProducts = ({ message, description }) => {
  const [form, setForm] = useState({});
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { mutate } = useAddProduct();

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue;

    if (name === 'price' || name === 'brandsId') {
      // Si el campo es 'price' o 'brandsId', convierte el valor a número
      newValue = parseFloat(value);
    } else {
      // Si no es 'price' ni 'brandsId', utiliza el valor directamente
      newValue = value;
    }
    setForm({
      ...form,
      [name]: newValue,
    });
  };

  const renderField = (label, name, type) => (
    <div style={{ width: '100%' }}>
      <label style={{ color: 'white' }} htmlFor={name}>
        {label}
      </label>
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
            {renderField('description', 'description', 'text')}
            {renderField('price', 'price', 'number')}
            {renderField('picture', 'picture', 'text')}
            {renderField('brandsId', 'brandsId', 'number')}
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
                    mutate(res, {
                      onError: (error) => {
                        console.error('Error al crear el producto:', error);
                        alert('Error al crear el producto');
                      },
                    });
                    console.log('product--->', res);
                    console.log('Tipo de dato de res:', typeof res);

                    // Agregar más logs para cada propiedad del objeto 'res'
                    console.log('Tipo de dato de res.name:', typeof res.name);
                    console.log(
                      'Tipo de dato de res.description:',
                      typeof res.description
                    );
                    console.log('Tipo de dato de res.price:', typeof res.price);
                    console.log(
                      'Tipo de dato de res.brandsId:',
                      typeof res.brandsId
                    );
                    console.log(
                      'Tipo de dato de res.available:',
                      typeof res.available
                    );
                    // Agregar más para las otras propiedades
                  })
                  .catch((err) => {
                    console.error('Error al crear el producto:', err);
                    alert('Error al crear el producto: ' + err.message);
                  })
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
