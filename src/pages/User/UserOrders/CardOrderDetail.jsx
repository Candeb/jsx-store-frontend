import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import {
  ContainerOrderProduct,
  ImgOrderProduct,
  OrderProductBrand,
  OrderProductName,
  OrderProductDescription,
  ContainerDetailOrderProduct,
} from '../UserProfile/UserProfileStyles';

export default function CardOrderDetail({ productId }) {
  const fetchProduct = (id) => {
    const url = `https://jsx-store-api.onrender.com/product/${id}`;
    return axios.get(url);
  };

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['products', productId],
    queryFn: () => fetchProduct(productId),
  });

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  // Verifica si data es undefined antes de acceder a sus propiedades
  if (!data) {
    return <div>No se encontraron datos</div>;
  }

  const productDetail = data?.data;

  return (
    <ContainerOrderProduct key={productDetail.id}>
      <div>
        <ImgOrderProduct src={productDetail.picture} alt={productDetail.name} />
      </div>
      <ContainerDetailOrderProduct>
        <OrderProductName>{productDetail.name}</OrderProductName>
        <OrderProductDescription>
          {productDetail.description}
        </OrderProductDescription>
        <OrderProductName>${productDetail.price}</OrderProductName>{' '}
      </ContainerDetailOrderProduct>
    </ContainerOrderProduct>
  );
}
