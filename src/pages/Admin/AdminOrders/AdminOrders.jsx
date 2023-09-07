import React, { useEffect } from 'react';
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
import { Loader } from '../../../components/Loader/Loader';
import { ModalOrderUser } from '../../../components/AdminOrder/ModalOrderUser';
import { DeleteButtonOrder } from '../../../components/AdminOrder/DeleteButtonOrder';
import { ModalOrderProduct } from '../../../components/AdminOrder/ModalOrderProduct';
import { Box, Button } from '@mui/material';

export const fetchOrders = () => {
  const url = 'https://jsx-store-api.onrender.com/order/orders';

  return axios.get(url);
};

export const AdminOrders = () => {
  const { isLoading, data, error, isError, refetch, isIdle } = useQuery(
    'orders',
    fetchOrders,
    {
      onSuccess: (data) => console.log('Exito en la peticion de orders', data),
      onError: (error) => console.log('Error en la peticion de orders', error),
    }
  );

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <AdminContainer>
      <AdminMenu />
      <ContainerInfoAdmin>
        <ContainerTitleRoute>
          <TitleRoute> Ordenes </TitleRoute>
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
                <th>userId</th>
                <th>status</th>
                <th>products</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {data?.data.map((order) => {
                return (
                  <tr key={order.id}>
                    <td style={{ verticalAlign: 'inherit' }}>{order.id}</td>
                    <td style={{ verticalAlign: 'inherit' }}>
                      <ModalOrderUser
                        message={`Usuario ID ${order.userId}`}
                        description={`Aqui puedes ver los detalles del usuario ${order.userId}`}
                        userId={order.userId}
                      />
                    </td>
                    <td>{order.status}</td>
                    <td style={{ verticalAlign: 'inherit' }}>
                      {order.products.map((orderItem) => (
                        <ModalOrderProduct
                          key={orderItem.id}
                          message={`Producto ID ${orderItem.productId}`}
                          description={`Aqui puedes ver los detalles del producto ${orderItem.productId}`}
                          productId={orderItem.productId}
                        />
                      ))}
                    </td>
                    <td
                      style={{
                        display: 'flex',
                        gap: '5px',
                        flexDirection: 'column',
                      }}
                    >
                      <DeleteButtonOrder id={order.id}>
                        Eliminar
                      </DeleteButtonOrder>
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
      {isIdle && (
        <Box>
          <p style={{ color: 'white' }}> Consulta deshabilitada </p>
          <Button onClick={refetch}>Activar</Button>
        </Box>
      )}
    </AdminContainer>
  );
};
