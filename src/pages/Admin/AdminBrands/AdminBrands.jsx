import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  AdminContainer,
  ContainerInfoAdmin,
  ContainerTitleRoute,
  DivTriang,
  TitleRoute,
} from '../AdminDashboard.jsx/AdminDashboardStyles';
import { AdminMenu } from '../AdminMenu/AdminMenu';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { show_alerta } from '../../../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Loader } from '../../../components/Loader/Loader';
import { OpenModal } from '../../../components/OpenModal/OpenModal';
import { ModalForm } from '../../../components/ModalFormAdmin/ModalForm';
import { useDeleteBrand } from '../../../hooks/brands/useDeleteBrands';
export const fetchBrands = () => {
  // const url = 'http://localhost:3002/brand/brands';
  const url = 'https://jsx-store-api.onrender.com/brand/brands';
  return axios.get(url);
};

export const AdminBrands = () => {
  const { isLoading, data, error, isError } = useQuery('brands', fetchBrands, {
    staleTime: 2000,
    cacheTime: 5000,
  });

  const postBrands = () => {
    try {
      const url = 'https://jsx-store-api.onrender.com/brand/new';
      const data = { name: name, email: email };
      const response = axios.post(url, data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [picture, setPicture] = useState('');
  const [operation, setOperation] = useState(1);
  const [title, setTitle] = useState('');

  useEffect(() => {
    fetchBrands();
  }, []);

  const { mutate } = useDeleteBrand();

  const handleDelete = () => {
    const auth = window.confirm(
      `Estas seguro que queres eliminar ${name} esta banda de tu lista? `
    );
    if (id && auth) {
      mutate(id);
    }
  };

  // const deleteProduct = (id, name) => {
  //   const MySwal = withReactContent(Swal);
  //   MySwal.fire({
  //     title: '¿Seguro de eliminar el producto ' + name + ' ?',
  //     icon: 'question',
  //     text: 'No se podrá dar marcha atrás',
  //     showCancelButton: true,
  //     confirmButtonText: 'Si, eliminar',
  //     cancelButtonText: 'Cancelar',
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       setId(id);
  //       envarSolicitud('DELETE', { id: id });
  //     } else {
  //       show_alerta('El producto NO fue eliminado', 'info');
  //     }
  //   });
  // };

  return (
    <AdminContainer>
      <AdminMenu />
      <ContainerInfoAdmin>
        <ContainerTitleRoute>
          <TitleRoute> Marcas </TitleRoute>
          <DivTriang></DivTriang>
        </ContainerTitleRoute>{' '}
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
                <th>Imagen</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {data?.data.map((brand) => {
                return (
                  <tr key={brand.id}>
                    <td>{brand.id}</td>
                    <td>{brand.name}</td>
                    <td>
                      {' '}
                      <img
                        src={brand.picture}
                        style={{ height: '80px' }}
                      />{' '}
                    </td>
                    <td style={{ display: 'flex', gap: '5px' }}>
                      <button
                        className="btn btn-primary"
                        onClick={() => (onClick = { handleOpen })}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      {'   '}
                      <button className="btn btn-danger" onClick={handleDelete}>
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
      <ModalForm />
    </AdminContainer>
  );
};
