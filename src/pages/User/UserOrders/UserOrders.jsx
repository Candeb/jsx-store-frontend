import React, { useEffect } from 'react';
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
import { useParams } from 'react-router-dom';
import { useAuth } from '../../../context/authContext';
import OrderList from './OrderList';

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

  if (isLoading) return 'loading...';
  if (isError) return `Error: ${error.message}`;

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
};
