import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import FormEditProduct from '../../components/AdminProduct/FormEditProduct';
import {
  AdminContainer,
  ContainerInfoAdmin,
} from '../Admin/AdminDashboard/AdminDashboardStyles';
import { AdminMenu } from '../../components/AdminMenu/AdminMenu';
import { ModalTitleStyled } from '../../components/AdminBrand/ModalFormBrands/ModalFormStyles';

export async function fetchProduct(id) {
  const response = await fetch(
    `https://jsx-store-api.onrender.com/product/${id}`
  );
  return response.json();
}

export async function updateProduct(updatedProduct) {
  const response = await fetch(
    `https://jsx-store-api.onrender.com/product/update/${updatedProduct.id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    }
  );
  return response.json();
}

export const EditProduct = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    isLoading,
    isError,
    data: product,
    error,
  } = useQuery({
    queryKey: ['products', id],
    queryFn: () => fetchProduct(id),
  });
  const updateProductMutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      navigate('/admin/products');
    },
  });

  if (isLoading) return 'loading...';
  if (isError) return `Error: ${error.message}`;

  const handleSubmit = (updatedProduct) => {
    updateProductMutation.mutate({ id, ...updatedProduct });
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
          <FormEditProduct onSubmit={handleSubmit} initialValue={product} />
        </ContainerInfoAdmin>
      </AdminContainer>
    </div>
  );
};
