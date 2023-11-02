import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import FormEditBrand from '../../components/AdminBrand/FormEditBrand';
import {
  AdminContainer,
  ContainerInfoAdmin,
} from '../Admin/AdminDashboard/AdminDashboardStyles';
import { AdminMenu } from '../../components/AdminMenu/AdminMenu';
import { ModalTitleStyled } from '../../components/AdminBrand/ModalFormBrands/ModalFormStyles';
import axios from 'axios';

export async function fetchBrand(id) {
  const accessToken = localStorage.getItem('accessToken');
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  const response = await fetch(
    `https://jsx-store-api.onrender.com/brand/${id}`,
    {
      headers,
    }
  );

  return response.json();
}

export async function updateBrand(updatedBrand) {
  const accessToken = localStorage.getItem('accessToken');

  if (!accessToken) {
    return Promise.reject(new Error('No se encontró el token de acceso.'));
  }

  const response = await fetch(
    `https://jsx-store-api.onrender.com/brand/update/${updatedBrand.id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(updatedBrand),
    }
  );
  return response.json();
}

export const EditBrand = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    isLoading,
    isError,
    data: brand,
    error,
  } = useQuery({
    queryKey: ['brands', id],
    queryFn: () => fetchBrand(id),
  });
  const updateBrandMutation = useMutation({
    mutationFn: updateBrand,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['brands'] });
      navigate('/admin/brands');
    },
  });

  if (isLoading) return 'loading...';
  if (isError) return `Error: ${error.message}`;

  const handleSubmit = (updatedBrand) => {
    updateBrandMutation.mutate({ id, ...updatedBrand });
  };

  return (
    <div>
      <AdminContainer>
        <AdminMenu />
        <ContainerInfoAdmin
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
          <FormEditBrand onSubmit={handleSubmit} initialValue={brand} />
        </ContainerInfoAdmin>
      </AdminContainer>
    </div>
  );
};
