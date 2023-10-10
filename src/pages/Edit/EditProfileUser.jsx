import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ContainerInfoUser,
  UserContainer,
} from '../User/UserProfile/UserProfileStyles';
import { UserMenu } from '../../components/User/UserMenu';
import FormEditUser from '../../components/User/FormEditUser';
import { ModalTitleStyled } from '../../components/AdminBrand/ModalFormBrands/ModalFormStyles';
import { Loader } from '../../components/Loader/Loader';

export async function fetchUser(id) {
  const response = await fetch(
    `https://jsx-store-api.onrender.com/auth/user/id/${id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }
  );
  return response.json();
}

export async function updateUser(updatedUser) {
  const response = await fetch(
    `https://jsx-store-api.onrender.com/auth/update/${updatedUser.id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    }
  );
  return response;
}

export const EditProfileUser = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    isLoading,
    isError,
    data: user,
    error,
  } = useQuery({
    queryKey: ['users', id],
    queryFn: () => fetchUser(id),
  });
  const updateUserMutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      navigate(`/user/${id}`);
    },
  });

  if (isLoading) return <Loader />;
  if (isError) return `Error: ${error.message}`;

  const handleSubmit = (updatedUser) => {
    updateUserMutation.mutate({ id, ...updatedUser });
  };

  return (
    <div>
      <UserContainer>
        <UserMenu />
        <ContainerInfoUser
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            gap: '20px',
          }}
        >
          <ModalTitleStyled style={{ color: 'black' }}>
            {' '}
            Editar mis datos
          </ModalTitleStyled>
          <FormEditUser onSubmit={handleSubmit} initialValue={user} />
        </ContainerInfoUser>
      </UserContainer>
    </div>
  );
};
