import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import {
  CardOrder,
  DetailDate,
  DetailOrder,
  ContainerCardOrders,
  ViewProducts,
} from '../UserProfile/UserProfileStyles';
import CardOrderDetail from './CardOrderDetail';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';

export const fetchProducts = () => {
  const url = 'https://jsx-store-api.onrender.com/product/products';
  return axios.get(url);
};

const OrderList = ({ ordenes }) => {
  const { isLoading, data, error, isError } = useQuery(
    'products',
    fetchProducts
  );
  const datas = ordenes[0];
  const orders = datas.orders;

  // Crear un objeto de estados isOpen para controlar cada tarjeta de pedido
  const [isOpenState, setIsOpenState] = useState({});

  const toggleText = (orderId) => {
    // Clonar el objeto actual de estados isOpen
    const updatedIsOpenState = { ...isOpenState };

    // Cambiar el estado isOpen de la tarjeta específica al contrario de su estado actual
    updatedIsOpenState[orderId] = !updatedIsOpenState[orderId];

    // Actualizar el estado general con los nuevos estados isOpen
    setIsOpenState(updatedIsOpenState);
  };

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
    <ContainerCardOrders>
      {orders.map((order) => (
        <CardOrder key={order.id}>
          <DetailDate>
            <p>{formatDate(order.created_at)}</p>
          </DetailDate>
          <DetailOrder>
            <span>Orden #{order.id}</span>
            <div>
              <p>Estado: {order.status}</p>
            </div>
            <ViewProducts onClick={() => toggleText(order.id)}>
              {order.products.length === 0 ? (
                'No hay productos'
              ) : (
                <>
                  {isOpenState[order.id] ? (
                    <>
                      {order.products.length === 1 ? (
                        <>
                          Ocultar {order.products.length} producto{' '}
                          <IoIosArrowDown />
                        </>
                      ) : (
                        <>
                          Ocultar {order.products.length} productos{' '}
                          <IoIosArrowDown />
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      {order.products.length === 1 ? (
                        <>
                          Ver {order.products.length} producto{' '}
                          <IoIosArrowForward />
                        </>
                      ) : (
                        <>
                          Ver {order.products.length} productos{' '}
                          <IoIosArrowForward />
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </ViewProducts>
          </DetailOrder>

          {isOpenState[order.id] && (
            <div>
              {order.products.map((product) => (
                <CardOrderDetail
                  key={product.id}
                  productId={product.productId}
                />
              ))}
            </div>
          )}
        </CardOrder>
      ))}
    </ContainerCardOrders>
  );
};

export default OrderList;
