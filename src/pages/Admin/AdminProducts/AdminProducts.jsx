import React from 'react';
import {
  AdminContainer,
  ContainerInfoAdmin,
  TitleRoute,
  DivTriang,
  ContainerTitleRoute,
} from '../AdminDashboard.jsx/AdminDashboardStyles';
import { AdminMenu } from '../AdminMenu/AdminMenu';
import { fetchProducts } from '../../Sneakers/Products/Products';
import { Loader } from '../../../components/Loader/Loader';
import { useQuery } from 'react-query';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit,
  faTrashAlt,
  faCirclePlus,
} from '@fortawesome/free-solid-svg-icons';

export const AdminProducts = () => {
  const { isLoading, data, error, isError } = useQuery(
    'products',
    fetchProducts,
    {
      staleTime: 2000,
      cacheTime: 5000,
    }
  );

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <AdminContainer>
      <AdminMenu />

      <ContainerInfoAdmin>
        <ContainerTitleRoute>
          <TitleRoute> Productos </TitleRoute>
          <DivTriang></DivTriang>
        </ContainerTitleRoute>
        <div className="row mt-1">
          <div className="col-md-4 ">
            <div className="d-grid mx-auto">
              <button
                onClick={() => openModal(1)}
                className="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#modalProducts"
              >
                <FontAwesomeIcon
                  icon={faCirclePlus}
                  style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
                />
                Añadir
              </button>
            </div>
          </div>
        </div>
        {isLoading && <Loader />}
        {isError && (
          <h2 style={{ color: 'red', textAling: 'center' }}>
            {' '}
            {error.message}{' '}
          </h2>
        )}

        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Description</th>
                <th>Precio</th>
                <th>Imagen</th>
                <th>Marca</th>
                <th>Stock</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {data?.data.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td> ${product.price}</td>
                    <td>
                      {' '}
                      <img
                        src={product.picture}
                        style={{ height: '50px' }}
                      />{' '}
                    </td>
                    <td>
                      {' '}
                      {product.brandsId === 1
                        ? 'Nike'
                        : product.brandsId === 2
                        ? 'Adidas'
                        : 'Balenciaga'}{' '}
                    </td>
                    <td> {product.available ? 'en stock' : 'sin stock'} </td>
                    <td style={{ display: 'flex', gap: '5px' }}>
                      <button
                        className="btn btn-primary"
                        // onClick={() => {
                        //   this.seleccionarEmpresa(empresa);
                        //   this.modalInsertar();
                        // }}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      {'   '}
                      <button
                        className="btn btn-danger"
                        // onClick={() => {
                        //   this.seleccionarEmpresa(empresa);
                        //   this.setState({ modalEliminar: true });
                        // }}
                      >
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>{' '}
        </div>
      </ContainerInfoAdmin>
    </AdminContainer>
  );
};
