import React from 'react';
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
import { ModalFormProducts } from '../../../components/AdminProduct/ModalFormProducts';
import { useNavigate } from 'react-router-dom';
import { DeleteButtonProduct } from '../../../components/AdminProduct/DeleteButtonProduct';

export const fetchProducts = () => {
  const url = 'https://jsx-store-api.onrender.com/product/products';
  return axios.get(url);
};

export const AdminProducts = () => {
  const { isLoading, data, error, isError } = useQuery(
    'products',
    fetchProducts
  );

  const navigate = useNavigate();

  return (
    <AdminContainer>
      <AdminMenu />
      <ContainerInfoAdmin>
        <ContainerTitleRoute>
          <TitleRoute> Products </TitleRoute>
          <DivTriang></DivTriang>
        </ContainerTitleRoute>
        <ModalFormProducts
          message={'Añadir nuevo producto'}
          description={'Aqui puedes añadir los datos del producto'}
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
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Imagen</th>
                <th>Stock</th>
                <th>Marca</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>

            {isLoading ? (
              <Loader />
            ) : (
              <tbody>
                {data &&
                  data.data &&
                  data.data.map((product) => {
                    return (
                      <tr key={product.id}>
                        <td style={{ verticalAlign: 'top' }}>{product.id}</td>
                        <td style={{ verticalAlign: 'top' }}>{product.name}</td>
                        <td style={{ verticalAlign: 'top', fontSize: '15px' }}>
                          {product.description}
                        </td>
                        <td style={{ verticalAlign: 'top' }}>
                          ${product.price}
                        </td>
                        <td>
                          <img
                            src={product.picture}
                            style={{
                              height: '80px',
                              objectFit: 'contain',
                              width: '100%',
                            }}
                          />
                        </td>
                        <td style={{ verticalAlign: 'top' }}>
                          {product.available ? 'En stock' : 'Sin stock'}
                        </td>
                        <td style={{ verticalAlign: 'top' }}>
                          {product.brandsId === 1
                            ? `Nike`
                            : product.brandsId === 2
                            ? `Adidas`
                            : `Balenciaga`}
                        </td>
                        <td style={{ verticalAlign: 'top' }}>
                          {product.deleted_at === null ? 'Activo' : 'Eliminado'}
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
                              navigate(`/admin/products/edit/${product.id}`)
                            }
                          >
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                          <DeleteButtonProduct id={product.id}>
                            eliminar
                          </DeleteButtonProduct>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            )}
          </table>
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
