import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { IoPerson } from 'react-icons/io5';
import { ContainerCartIcon } from '../Header/HeaderStyles';
import { UserName } from './UserMenuStyles';
import { Loader } from '../Loader/Loader';

export default function NameUser({ userId }) {
  const fetchUser = (id) => {
    const url = `https://jsx-store-api.onrender.com/auth/user/id/${id}`;
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    };
    return axios.get(url, config);
  };

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['users', userId],
    queryFn: () => fetchUser(userId),
  });

  if (isLoading) {
    return (
      <div>
        {' '}
        <Loader />{' '}
      </div>
    );
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  // Verifica si data es undefined antes de acceder a sus propiedades
  if (!data) {
    return <div>No se encontraron datos</div>;
  }

  const userDetail = data?.data;

  if (!userDetail) {
    return <div>No se encontraron detalles de usuario</div>;
  }

  return (
    <ContainerCartIcon style={{ gap: '3px' }}>
      <IoPerson />
      <UserName> {userDetail.name} </UserName>
    </ContainerCartIcon>
  );
}
