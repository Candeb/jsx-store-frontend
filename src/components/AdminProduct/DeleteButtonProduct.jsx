import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useDeleteProduct } from '../../hooks/products/useDeleteProduct';

export const DeleteButtonProduct = ({ id = null }) => {
  const { mutate } = useDeleteProduct();

  const handleDelete = () => {
    const auth = window.confirm(
      `Está seguro de eliminar el producto con id ${id} de tu lista?`
    );
    if (id && auth) {
      mutate(id);
    }
  };

  return (
    <button className="btn btn-danger" onClick={handleDelete}>
      <FontAwesomeIcon icon={faTrashAlt} />
    </button>
  );
};
