import React from 'react';
import {
  AdminContainer,
  ContainerInfoAdmin,
  ContainerTitleRoute,
  TitleDashboard,
  TitleRoute,
  DivTriang,
  ContainerDashboard,
} from './AdminDashboardStyles';
import { AdminMenu } from '../AdminMenu/AdminMenu';

export const AdminDashboard = () => {
  return (
    <AdminContainer>
      <AdminMenu />
      <ContainerInfoAdmin>
        <ContainerTitleRoute>
          <TitleRoute> Dashboard </TitleRoute>
          <DivTriang></DivTriang>
        </ContainerTitleRoute>
        <ContainerDashboard>
          <TitleDashboard>
            Te damos la bienvenida a la administración de JSX STORE
          </TitleDashboard>
        </ContainerDashboard>
      </ContainerInfoAdmin>
    </AdminContainer>
  );
};
