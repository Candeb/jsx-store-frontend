import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

const addUser = (user) => {
  return axios.post('https://jsx-store-api.onrender.com/auth/register', user, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
};
export const useAddUser = () => {
  const queryClient = useQueryClient();

  return useMutation(addUser, {
    onSuccess: (data) => {
      queryClient.invalidateQueries('users', (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, data.data],
        };
      });
    },
  });
};
