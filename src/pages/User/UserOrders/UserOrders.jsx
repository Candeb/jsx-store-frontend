import React from 'react';
import { UserMenu } from '../../../components/UserMenu/UserMenu';
import {
  ContainerInfoUser,
  ContainerSection,
  UserContainer,
  TitleRouteUser,
  DivTriangUser,
} from '../UserProfile/UserProfileStyles';
import { ContainerTitleRoute } from '../../Admin/AdminDashboard/AdminDashboardStyles';
import { useAuth } from '../../../context/authContext';

// export const fetchUserById = (id) => {
//   const url = `https://jsx-store-api.onrender.com/auth/user/id/${id}`;
//   return axios.get(url);
// };

export const UserOrders = () => {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <UserContainer>
      <UserMenu name={user.name} lastname={user.lastname} />
      <ContainerInfoUser>
        <ContainerTitleRoute>
          <TitleRouteUser> Mis compras </TitleRouteUser>
          <DivTriangUser></DivTriangUser>
        </ContainerTitleRoute>
        <ContainerSection>
          <p>ordenes aqui:</p>
        </ContainerSection>
      </ContainerInfoUser>
    </UserContainer>
  );
};
