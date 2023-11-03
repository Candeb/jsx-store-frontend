import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

export const addBrand = (brand) => {
  return axios.post('https://jsx-store-api.onrender.com/brand/new', brand, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
};

export const useAddBrand = () => {
  const queryClient = useQueryClient();

  return useMutation(addBrand, {
    onSuccess: (data) => {
      queryClient.invalidateQueries('brands', (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, data.data],
        };
      });
    },
  });
};
