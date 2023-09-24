import React, { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { UserMenu } from '../../../components/User/UserMenu';
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
  DataInfo,
} from './UserProfileStyles';
import { ContainerTitleRoute } from '../../Admin/AdminDashboard/AdminDashboardStyles';
import { FaEdit } from 'react-icons/fa';

export const UserProfile = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    try {
      const response = await fetch(`http://localhost:3002/auth/user/id/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });

      if (response.status === 200) {
        const userData = await response.json();
        setUserData(userData);
      } else {
        // Manejar errores de obtención de datos del usuario
      }
    } catch (error) {
      // Manejar errores de red
    }
  };
  const { id } = useParams();
  useEffect(() => {
    fetchUserData();
  }, []); // Se ejecutará una vez cuando el componente se monte

  if (!userData) {
    return <div>Cargando datos del usuario...</div>;
  }

  return (
    <UserContainer>
      <UserMenu
        name={userData.name}
        lastname={userData.lastname}
        userId={userData.id}
      />
      <ContainerInfoUser>
        <ContainerTitleRoute>
          <TitleRouteUser> Mis datos </TitleRouteUser>
          <DivTriangUser></DivTriangUser>
        </ContainerTitleRoute>
        <ContainerSection>
          <DivImgUser>
            {' '}
            <ImgUser src="https://github.com/Candeb/jsx-store-frontend/blob/main/src/assets/userimg.jpg?raw=true" />{' '}
            <IconButton
              sx={{
                position: 'absolute',
                backgroundColor: '#f7f3d9',
                border: '0.5px solid black',
                color: 'black',
                fontSize: '20px',
                top: '10px',
                right: '25px',
              }}
              onClick={() => navigate(`/user/edit/${userData.id}`)}
            >
              <FaEdit />
            </IconButton>
          </DivImgUser>
          <DataName> {userData.name} </DataName>
          <DataProfile>
            <DataInfo style={{ textTransform: 'capitalize' }}>
              {userData.name} {userData.lastname}
            </DataInfo>
            <DataInfo> {userData.email} </DataInfo>
          </DataProfile>
        </ContainerSection>
      </ContainerInfoUser>
    </UserContainer>
  );
};
