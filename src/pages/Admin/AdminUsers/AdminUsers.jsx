import React from 'react';
import {
  AdminContainer,
  ContainerInfoAdmin,
  TitleRoute,
  DivTriang,
  ContainerTitleRoute,
} from '../AdminDashboard/AdminDashboardStyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { AdminMenu } from '../../../components/AdminMenu/AdminMenu';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useEffect } from 'react';
import { Loader } from '../../../components/Loader/Loader';
import { useNavigate } from 'react-router-dom';
import { ModalFormUsers } from '../../../components/AdminUser/ModalFormUsers';
import { DeleteButtonUser } from '../../../components/AdminUser/DeleteButtonUser';

export const fetchUsers = () => {
  // const url = 'http://localhost:3002/auth/users';
  const url = 'https://jsx-store-api.onrender.com/auth/users';
  return axios.get(url);
};

export const AdminUsers = () => {
  const { isLoading, data, error, isError } = useQuery('users', fetchUsers);

  useEffect(() => {
    fetchUsers();
  }, []);

  const navigate = useNavigate();

  return (
    <AdminContainer>
      <AdminMenu />
      <ContainerInfoAdmin>
        <ContainerTitleRoute>
          <TitleRoute> Usuarios </TitleRoute>
          <DivTriang></DivTriang>
        </ContainerTitleRoute>{' '}
        <ModalFormUsers
          message={'Añadir nuevo usuario'}
          description={'Aqui puedes añadir los datos del usuario'}
        />
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
                    <td style={{ verticalAlign: 'inherit' }}>{user.name}</td>
                    <td style={{ verticalAlign: 'inherit' }}>
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
