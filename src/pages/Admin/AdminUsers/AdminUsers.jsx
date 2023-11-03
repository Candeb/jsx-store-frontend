import React from 'react';
import {
  AdminContainer,
  ContainerInfoAdmin,
  TitleRoute,
  DivTriang,
  ContainerTitleRoute,
} from '../AdminDashboard/AdminDashboardStyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AdminMenu } from '../../../components/AdminMenu/AdminMenu';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useEffect } from 'react';
import { Loader } from '../../../components/Loader/Loader';
import { DeleteButtonUser } from '../../../components/AdminUser/DeleteButtonUser';

export const fetchUsers = () => {
  const url = 'https://jsx-store-api.onrender.com/auth/users';
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    return axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } else {
    return Promise.reject(
      'No se encontró el token de acceso en el almacenamiento local.'
    );
  }
};

export const AdminUsers = () => {
  const { isLoading, data, error, isError } = useQuery('users', fetchUsers);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <AdminContainer>
      <AdminMenu />
      <ContainerInfoAdmin>
        <ContainerTitleRoute>
          <TitleRoute> Usuarios </TitleRoute>
          <DivTriang></DivTriang>
        </ContainerTitleRoute>{' '}
        <div className="table-responsive">
          <table
            className="table table-hover table-bordered"
            style={{ marginTop: '20px' }}
          >
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Estado</th>
                <th>Rol</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {data?.data.map((user) => {
                return (
                  <tr key={user.id}>
                    <td style={{ verticalAlign: 'inherit' }}>{user.id}</td>
                    <td
                      style={{
                        verticalAlign: 'inherit',
                        textTransform: 'capitalize',
                      }}
                    >
                      {user.name}
                    </td>
                    <td
                      style={{
                        verticalAlign: 'inherit',
                        textTransform: 'capitalize',
                      }}
                    >
                      {user.lastname}
                    </td>
                    <td style={{ verticalAlign: 'inherit' }}>{user.email}</td>
                    <td style={{ verticalAlign: 'inherit' }}>
                      {user.deleted_at === null ? 'Activo' : 'Eliminado'}
                    </td>
                    <td style={{ verticalAlign: 'inherit' }}>{user.role}</td>

                    <td
                      style={{
                        display: 'flex',
                        gap: '5px',
                        flexDirection: 'column',
                      }}
                    >
                      <DeleteButtonUser id={user.id}>Eliminar</DeleteButtonUser>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>{' '}
        </div>
        {isLoading && <Loader />}
        {isError && (
          <h2
            style={{
              color: 'red',
            }}
          >
            {error.message}
          </h2>
        )}
      </ContainerInfoAdmin>
    </AdminContainer>
  );
};
