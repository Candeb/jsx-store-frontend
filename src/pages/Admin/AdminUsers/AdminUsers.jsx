import React from 'react';
import {
  AdminContainer,
  ContainerInfoAdmin,
  TitleRoute,
  DivTriang,
  ContainerTitleRoute,
} from '../AdminDashboard.jsx/AdminDashboardStyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit,
  faTrashAlt,
  faCirclePlus,
} from '@fortawesome/free-solid-svg-icons';
import { AdminMenu } from '../AdminMenu/AdminMenu';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Loader } from '../../../components/Loader/Loader';

export const fetchUsers = () => {
  // const url = 'http://localhost:3002/auth/users';
  const url = 'https://jsx-store-api.onrender.com/auth/users';
  return axios.get(url);
};

export const AdminUsers = () => {
  const { isLoading, data, error, isError } = useQuery('users', fetchUsers, {
    staleTime: 2000,
    cacheTime: 5000,
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  // let users = useSelector((state) => state.users.users);
  // let totalUsers = users.length;

  // peticionGet = () => {
  //   axios
  //     .get(url)
  //     .then((response) => {
  //       this.setState({ data: response.data });
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // };

  return (
    <AdminContainer>
      <AdminMenu />

      <ContainerInfoAdmin>
        <ContainerTitleRoute>
          <TitleRoute> Usuarios </TitleRoute>
          <DivTriang></DivTriang>
        </ContainerTitleRoute>
        <div className="row mt-1">
          <div className="col-md-4 ">
            <div className="d-grid mx-auto">
              <button
                onClick={() => openModal(1)}
                className="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#modalProducts"
              >
                <FontAwesomeIcon
                  icon={faCirclePlus}
                  style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
                />
                Añadir
              </button>
            </div>
          </div>
        </div>
        {isLoading && <Loader />}
        {isError && (
          <h2 style={{ color: 'red', textAling: 'center' }}>
            {' '}
            {error.message}{' '}
          </h2>
        )}

        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Rol</th>
                <th>Activo</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {data?.data.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>{user.deleted_at === null ? 'Activo' : 'Eliminado'}</td>
                    <td style={{ display: 'flex', gap: '5px' }}>
                      <button
                        className="btn btn-primary"
                        // onClick={() => {
                        //   this.seleccionarEmpresa(empresa);
                        //   this.modalInsertar();
                        // }}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      {'   '}
                      <button
                        className="btn btn-danger"
                        // onClick={() => {
                        //   this.seleccionarEmpresa(empresa);
                        //   this.setState({ modalEliminar: true });
                        // }}
                      >
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>{' '}
        </div>
      </ContainerInfoAdmin>
    </AdminContainer>
  );
};
