import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

export const addProduct = (product) => {
  return axios.post('https://jsx-store-api.onrender.com/product/new', product, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
    body: JSON.stringify(product),
  });
};

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
