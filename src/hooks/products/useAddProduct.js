import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

export const addProduct = (product) =>
  axios.post('https://jsx-store-api.onrender.com/product/new', product, {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });

export const useAddProduct = () => {
  const queryClient = useQueryClient();

  return useMutation(addProduct, {
    onSuccess: (data) => {
      queryClient.invalidateQueries('products', (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, data.data],
        };
      });
    },
  });
};
