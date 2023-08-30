import React from 'react';
import { useDeleteBrand } from '../../hooks/brands/useDeleteBrands';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export const DeleteButtonBrand = ({ id = null }) => {
  const { mutate } = useDeleteBrand();

  const handleDelete = () => {
    const auth = window.confirm(
      `Está seguro de eliminar la marca con id ${id} de tu lista?`
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
