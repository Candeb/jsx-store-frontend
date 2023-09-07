import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { useAuth } from '../../context/authContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import { UserMenu } from '../../components/UserMenu/UserMenu';
import {
  ContainerInfoUser,
  ContainerSection,
  UserContainer,
} from './AuthUserStyles';
import {
  ContainerTitleRoute,
  TitleRoute,
  DivTriang,
  TitleDashboard,
} from '../Admin/AdminDashboard/AdminDashboardStyles';

// export const fetchUserById = (id) => {
//   const url = `https://jsx-store-api.onrender.com/auth/user/id/${id}`;
//   return axios.get(url);
// };

export const AuthUser = () => {
  const { isAuthenticated, logout, user } = useAuth();
  console.log(isAuthenticated, user);

  const navigate = useNavigate();

  const existData = localStorage.getItem('data');

  useEffect(() => {
    if (existData === null || user === null) {
      return navigate('/login');
    }
  }, []);

  const { id } = useParams();
  // const { isLoading, isError, data, error } = useQuery({
  //   queryKey: ['users', id],
  //   queryFn: () => fetchUserById(id),
  // });
  console.log('user:', user);

  // useEffect(() => {
  //   fetchUserById(id);
  // }, []);

  return (
    <UserContainer>
      <UserMenu name={user.name} lastname={user.lastname} />
      <ContainerInfoUser>
        <ContainerTitleRoute>
          <TitleRoute> Dashboard </TitleRoute>
          <DivTriang></DivTriang>
        </ContainerTitleRoute>
        <ContainerSection>
          <TitleDashboard>
            Te damos la bienvenida a JSX STORE {user.name} {user.lastname}
          </TitleDashboard>
        </ContainerSection>
      </ContainerInfoUser>
    </UserContainer>
  );
};
