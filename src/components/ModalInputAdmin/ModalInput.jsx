import React from 'react';
import {
  InputContainerStyled,
  InputLabelStyled,
  InputStyled,
} from './ModalInputStyles';
import { Stack, Typography, Switch } from '@mui/material';

export const ModalInput = ({
  type,
  name,
  label,
  placeholder = '',
  handleChange,
}) => {
  return (
    <InputContainerStyled>
      <InputLabelStyled htmlFor={name}>{label}</InputLabelStyled>
      {/* {type === 'boolean' ? (
        <Stack direction="row" alignItems="center">
          <Typography color="white" fontSize="14px">
            Sin stock
          </Typography>
          <Switch
            defaultChecked
            value="true"
            inputProps={{ 'aria-label': 'controlled' }}
            onChange={(e) => handleChange(e)}
            name={name}
            id={name}
            type={type}
          />
          <Typography color="white" fontSize="14px">
            Con stock
          </Typography>
        </Stack>
      ) : ( */}
      <InputStyled
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete="on"
        onChange={(e) => handleChange(e)}
      />
    </InputContainerStyled>
  );
};
