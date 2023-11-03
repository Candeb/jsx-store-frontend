import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

const deleteOrder = (orderId) => {
  return axios.delete(
    `https://jsx-store-api.onrender.com/order/delete/${orderId}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      transformResponse: () => orderId,
    }
  );
};

export const useDeleteOrder = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteOrder, {
    onSuccess: (data) => {
      queryClient.invalidateQueries('orders', (oldQueryData) => {
        const newQueryData = oldQueryData.data.filter(
          (order) => order.id !== data.data
        );
        return {
          ...oldQueryData,
          data: newQueryData,
        };
      });
    },
  });
};
