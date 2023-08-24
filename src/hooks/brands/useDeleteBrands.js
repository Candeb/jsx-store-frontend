import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

const deleteBrand = (brandId) => {
  return axios.delete(
    `https://jsx-store-api.onrender.com/brand/delete/${brandId}`,
    { transformResponse: () => brandId }
  );
};

export const useDeleteBrand = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteBrand, {
    onSuccess: (data) => {
      queryClient.invalidateQueries('brands', (oldQueryData) => {
        const newQueryData = oldQueryData.data.filter(
          (brand) => brand.id !== data.data
        );
        return {
          ...oldQueryData,
          data: newQueryData,
        };
      });
    },
  });
};
