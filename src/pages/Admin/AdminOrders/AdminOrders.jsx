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
import OrderListAdmin from './OrderListAdmin';
import BtnViewOrder from '../../../components/AdminOrder/BtnViewOrder';
import { OrderUsername } from '../../../components/AdminOrder/OrderUsername';

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

  const formatDate = (isoDate) => {
    const fecha = new Date(isoDate);
    const meses = [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre',
    ];
    const dia = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    const anio = fecha.getFullYear();
    return `${dia} de ${mes} de ${anio}`;
  };

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
                <th>fecha</th>
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
                      <OrderUsername userId={order.userId} />
                    </td>
                    <td>{order.status}</td>
                    <td>{formatDate(order.created_at)}</td>
                    <td style={{ verticalAlign: 'inherit' }}>
                      <BtnViewOrder ordenes={data} />
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
