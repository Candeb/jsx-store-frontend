import React from 'react';
import { UserMenu } from '../../../components/User/UserMenu';
import {
  ContainerInfoUser,
  ContainerSection,
  UserContainer,
  TitleRouteUser,
  DivTriangUser,
} from '../UserProfile/UserProfileStyles';
import { ContainerTitleRoute } from '../../Admin/AdminDashboard/AdminDashboardStyles';
import { useQuery } from 'react-query';
import OrderList from './OrderList';
import { Loader } from '../../../components/Loader/Loader';

export async function fetchOrdersByUserId() {
  const response = await fetch(
    `https://jsx-store-api.onrender.com/order/active/user`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }
  );
  return response.json();
}

export const UserOrders = () => {
  const { isLoading, data, error, isError } = useQuery(
    'orders',
    fetchOrdersByUserId
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return `Error: ${error.message}`;
  }

  // Verificar si los datos están disponibles
  if (data) {
    return (
      <UserContainer>
        <UserMenu />
        <ContainerInfoUser>
          <ContainerTitleRoute>
            <TitleRouteUser> Mis compras </TitleRouteUser>
            <DivTriangUser></DivTriangUser>
          </ContainerTitleRoute>
          <ContainerSection>
            <OrderList ordenes={data} />
          </ContainerSection>
        </ContainerInfoUser>
      </UserContainer>
    );
  } else {
    // Puedes mostrar un mensaje de "Cargando" o similar si los datos aún no están disponibles.
    return <Loader />;
  }
};
