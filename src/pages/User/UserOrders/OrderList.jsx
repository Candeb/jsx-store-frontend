import axios from 'axios';
import React from 'react';
import { useQuery, useQueryClient } from 'react-query';

export const fetchProducts = () => {
  // const url = 'http://localhost:3002/brand/brands';
  const url = 'https://jsx-store-api.onrender.com/product/products';
  return axios.get(url);
};

const OrderList = ({ ordenes }) => {
  const { isLoading, data, error, isError } = useQuery(
    'products',
    fetchProducts
  );
  const datas = ordenes[0]; // Accede al primer elemento del array, que contiene el objeto con las órdenes

  // Luego, accede al array de órdenes dentro del objeto
  const orders = datas.orders;

  return (
    <div>
      {orders.map((order) => (
        <div key={order.id}>
          <h2>Orden ID: {order.id}</h2>
          <p>Fecha de creación: {order.created_at}</p>
          <p>Estado: {order.status}</p>
          <p>Estado: {order.userId}</p>
          <h3>Productos:</h3>
          <ul>
            {order.products.map((product) => (
              <li key={product.id}>{product.productId}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
