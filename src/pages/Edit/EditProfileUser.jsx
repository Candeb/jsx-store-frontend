import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { ModalTitleStyled } from '../../components/AdminBrand/ModalFormBrands/ModalFormStyles';
import {
  ContainerInfoUser,
  UserContainer,
} from '../User/UserProfile/UserProfileStyles';
import { UserMenu } from '../../components/UserMenu/UserMenu';
import FormEditUser from '../../components/UserMenu/FormEditUser';

export async function fetchUser(id) {
  const response = await fetch(
    `https://jsx-store-api.onrender.com/auth/id/${id}`
  );
  return response.json();
}

export async function updateUser(updatedProfileUser) {
  const response = await fetch(
    `https://jsx-store-api.onrender.com/auth/update/${updatedProfileUser.id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProfileUser),
    }
  );
  return response.json();
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
    mutationFn: updateBrand,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      navigate('/user');
    },
  });

  if (isLoading) return 'loading...';
  if (isError) return `Error: ${error.message}`;

  const handleSubmit = (updatedProfileUser) => {
    updateUserMutation.mutate({ id, ...updatedProfileUser });
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
            Editar marca
          </ModalTitleStyled>
          <FormEditUser onSubmit={handleSubmit} initialValue={user} />
        </ContainerInfoUser>
      </UserContainer>
    </div>
  );
};
