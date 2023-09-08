import React, { useEffect, useState } from 'react';
import { Button, IconButton } from '@mui/material';
import { useAuth } from '../../../context/authContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import { UserMenu } from '../../../components/UserMenu/UserMenu';
import {
  ContainerInfoUser,
  ContainerSection,
  UserContainer,
  TitleRouteUser,
  DivTriangUser,
  ImgUser,
  DataName,
  DataProfile,
  DivImgUser,
} from './UserProfileStyles';
import {
  ContainerTitleRoute,
  TitleDashboard,
} from '../../Admin/AdminDashboard/AdminDashboardStyles';
import { FaEdit } from 'react-icons/fa';

// export const fetchUserById = (id) => {
//   const url = `https://jsx-store-api.onrender.com/auth/user/id/${id}`;
//   return axios.get(url);
// };

export const UserProfile = () => {
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
          <TitleRouteUser> Mis datos </TitleRouteUser>
          <DivTriangUser></DivTriangUser>
        </ContainerTitleRoute>
        <ContainerSection>
          <DivImgUser>
            {' '}
            <ImgUser src="https://i.pinimg.com/736x/9b/f6/45/9bf6455e3b31cb428f36134f3a6a316a.jpg" />{' '}
            <IconButton
              sx={{
                position: 'absolute',
                backgroundColor: '#f7f3d9',
                border: '0.5px solid black',
                color: 'black',
                fontSize: '20px',
                top: '10px',
                left: '100px',
              }}
            >
              <FaEdit />
            </IconButton>
          </DivImgUser>
          <DataProfile>
            <DataName style={{ textTransform: 'capitalize' }}>
              {user.name} {user.lastname}
            </DataName>
            <DataName> {user.email} </DataName>
          </DataProfile>
        </ContainerSection>
      </ContainerInfoUser>
    </UserContainer>
  );
};
