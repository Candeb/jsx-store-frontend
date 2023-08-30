import React from 'react';
import {
  AdminInputForm,
  AdminLoginForm,
  ContainerAdminLogin,
  LoginAdminHeader,
} from './AdminLoginStyles';
import { Button } from '@mui/material';
import { LogoContainer } from '../../../components/Header/HeaderStyles';
import { Link } from 'react-router-dom';

export const AdminLogin = () => {
  return (
    <>
      <LoginAdminHeader>
        <LogoContainer>
          <img
            src="https://github.com/Candeb/jsx-store-frontend/blob/main/src/assets/logofavicon.png?raw=true"
            alt="Logo"
          />
        </LogoContainer>
      </LoginAdminHeader>
      <ContainerAdminLogin>
        <AdminLoginForm>
          <AdminInputForm
            type="email"
            placeholder="Usuario"
            autoFocus
            required
          />
          <AdminInputForm type="password" placeholder="Contraseña" />
          <Link to="/admin/dashboard">
            <Button variant="contained" color="primary">
              Ingresar
            </Button>
          </Link>
        </AdminLoginForm>
      </ContainerAdminLogin>
    </>
  );
};
