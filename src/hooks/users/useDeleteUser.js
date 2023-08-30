import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

const deleteUser = (id) => {
  return axios.delete(
    `https://jsx-store-api.onrender.com/auth/delete/id/${id}`
  );
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteUser, {
    onSuccess: (data) => {
      queryClient.invalidateQueries('users', (oldQueryData) => {
        const newQueryData = oldQueryData.data.filter(
          (user) => user.id !== data.data
        );
        return {
          ...oldQueryData,
          data: newQueryData,
        };
      });
    },
  });
};
