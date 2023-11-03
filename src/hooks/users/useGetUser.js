import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';

const fetchUsers = ({ queryKey }) => {
  const userId = queryKey[1];
  return axios.get(
    `https://jsx-store-api.onrender.com/auth/user/id/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }
  );
};

export const useUserData = (name, userId) => {
  const queryClient = useQueryClient();
  console.log(queryClient);

  return useQuery([name, userId], fetchUsers, {
    initialData: () => {
      const user = queryClient
        .getQueryData(name)
        ?.data?.find((user) => user.id === parseInt(userId));

      if (user) {
        return { data: user };
      } else {
        return undefined;
      }
    },
  });
};
