import React from 'react';
import {
  AdminNavBar,
  ContainerAdminNavBar,
  ContainerAdminProfile,
  ImgAdmin,
  ImgLogoMenuAdmin,
  TitleAdmin,
} from '../../pages/Admin/AdminDashboard/AdminDashboardStyles';
import { AdminNavLinkItem } from './AdminNavLinkItem';

export const AdminMenu = () => {
  return (
    <ContainerAdminNavBar>
      <ContainerAdminProfile>
        <ImgAdmin src="https://github.com/Candeb/jsx-store-frontend/blob/main/src/assets/iconadmin.png?raw=true" />
        <TitleAdmin>Bienvenido, admin!</TitleAdmin>
      </ContainerAdminProfile>
      <AdminNavBar>
        <AdminNavLinkItem to="/admin/dashboard" onClick={() => handlerMenu()}>
          Dashboard
        </AdminNavLinkItem>
        <AdminNavLinkItem to="/admin/users" onClick={() => handlerMenu()}>
          Usuarios
        </AdminNavLinkItem>
        <AdminNavLinkItem to="/admin/products">Productos</AdminNavLinkItem>
        <AdminNavLinkItem to="/admin/brands">Marcas</AdminNavLinkItem>
        <AdminNavLinkItem to="/admin/orders">Ordenes</AdminNavLinkItem>
      </AdminNavBar>

      <ImgLogoMenuAdmin
        src="https://github.com/Candeb/jsx-store-frontend/blob/main/src/assets/logofavicon.png?raw=true"
        alt="Logo"
      />
    </ContainerAdminNavBar>
  );
};
