import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  AdminContainer,
  ContainerInfoAdmin,
  ContainerTitleRoute,
  DivTriang,
  TitleRoute,
} from '../AdminDashboard/AdminDashboardStyles';
import { AdminMenu } from '../../../components/AdminMenu/AdminMenu';
import { useQuery } from 'react-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Loader } from '../../../components/Loader/Loader';
import { ModalFormBrands } from '../../../components/AdminBrand/ModalFormBrands/ModalFormBrands';
import { useDeleteBrand } from '../../../hooks/brands/useDeleteBrands';
import { useNavigate } from 'react-router-dom';
import { DeleteButtonBrand } from '../../../components/AdminBrand/DeleteButtonBrand';

export const fetchBrands = () => {
  const url = 'https://jsx-store-api.onrender.com/brand/allbrands';
  return axios.get(url);
};

export const AdminBrands = () => {
  const { isLoading, data, error, isError } = useQuery('brands', fetchBrands);

  useEffect(() => {
    fetchBrands();
  }, []);

  const navigate = useNavigate();

  const { mutate } = useDeleteBrand();

  return (
    <AdminContainer>
      <AdminMenu />
      <ContainerInfoAdmin>
        <ContainerTitleRoute>
          <TitleRoute> Marcas </TitleRoute>
          <DivTriang></DivTriang>
        </ContainerTitleRoute>{' '}
        <ModalFormBrands
          message={'Añadir nueva marca'}
          description={'Aqui puedes añadir los datos de la marca'}
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
                <th>Imagen</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {data?.data.map((brand) => {
                return (
                  <tr key={brand.id}>
                    <td style={{ verticalAlign: 'inherit' }}>{brand.id}</td>
                    <td style={{ verticalAlign: 'inherit' }}>{brand.name}</td>
                    <td>
                      {' '}
                      <img
                        src={brand.picture}
                        style={{
                          height: '80px',
                          objectFit: 'contain',
                          width: '100%',
                        }}
                      />{' '}
                    </td>
                    <td style={{ verticalAlign: 'inherit' }}>
                      {brand.deleted_at === null ? 'Activo' : 'Eliminado'}
                    </td>
                    <td
                      style={{
                        display: 'flex',
                        gap: '5px',
                        flexDirection: 'column',
                      }}
                    >
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          navigate(`/admin/brands/edit/${brand.id}`)
                        }
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <DeleteButtonBrand id={brand.id}>
                        Eliminar
                      </DeleteButtonBrand>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>{' '}
        </div>{' '}
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
