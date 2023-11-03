import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

export const deleteProduct = (productId) => {
  return axios.delete(
    `https://jsx-store-api.onrender.com/product/delete/${productId}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      transformResponse: () => productId,
    }
  );
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteProduct, {
    onSuccess: (data) => {
      queryClient.invalidateQueries('products', (oldQueryData) => {
        const newQueryData = oldQueryData.data.filter(
          (product) => product.id !== data.data
        );
        return {
          ...oldQueryData,
          data: newQueryData,
        };
      });
    },
  });
};
