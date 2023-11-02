import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

const updateBrand = (brand) => {
  return axios.put(
    `https://jsx-store-api.onrender.com/brand/update/${brand.id}`,
    brand,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }
  );
};

export const useUpdateBrand = () => {
  const queryClient = useQueryClient();

  return useMutation(updateBrand, {
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
