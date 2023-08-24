import React from 'react';
import {
  AdminNavBar,
  AdminNavLink,
  ContainerAdminNavBar,
  ContainerAdminProfile,
  ImgAdmin,
  ImgLogoMenuAdmin,
  TitleAdmin,
} from '../AdminDashboard.jsx/AdminDashboardStyles';

export const AdminMenu = () => {
  return (
    <ContainerAdminNavBar>
      <ContainerAdminProfile>
        <ImgAdmin src="https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG.png" />
        <TitleAdmin>Bienvenido, admin!</TitleAdmin>
      </ContainerAdminProfile>
      <AdminNavBar>
        <AdminNavLink to="/admin/dashboard" onClick={() => handlerMenu()}>
          Dashboard
        </AdminNavLink>
        <AdminNavLink to="/admin/users" onClick={() => handlerMenu()}>
          Usuarios
        </AdminNavLink>
        <AdminNavLink to="/admin/products">Productos</AdminNavLink>
        <AdminNavLink to="/admin/brands">Marcas</AdminNavLink>
        <AdminNavLink to="/admin/orders">Ordenes</AdminNavLink>
      </AdminNavBar>

      <ImgLogoMenuAdmin
        src="https://github.com/Candeb/jsx-store-frontend/blob/main/src/assets/logofavicon.png?raw=true"
        alt="Logo"
      />
    </ContainerAdminNavBar>
  );
};
