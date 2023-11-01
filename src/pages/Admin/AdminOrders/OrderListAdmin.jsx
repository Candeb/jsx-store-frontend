import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import {
  CardOrder,
  DetailOrder,
  ContainerCardOrders,
  ViewProducts,
} from '../../../pages/User/UserProfile/UserProfileStyles';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import { Loader } from '../../../components/Loader/Loader';
import CardOrderDetail from '../../User/UserOrders/CardOrderDetail';

export const fetchProducts = () => {
  const url = 'https://jsx-store-api.onrender.com/product/products';
  return axios.get(url);
};

const OrderListAdmin = ({ ordenes }) => {
  const { isLoading, data, error, isError } = useQuery(
    'products',
    fetchProducts
  );
  if (!ordenes || !ordenes.data) {
    return isLoading ? <Loader /> : <p>No se encontraron datos de pedidos.</p>;
  }

  const orders = ordenes.data;
  console.log('orders-->', orders);
  console.log('ordenes', ordenes);

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

  return (
    <ContainerCardOrders>
      {orders.map((order) => (
        <CardOrder key={order.id}>
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

export default OrderListAdmin;
