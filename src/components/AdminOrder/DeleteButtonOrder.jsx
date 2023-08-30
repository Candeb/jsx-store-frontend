import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useDeleteOrder } from '../../hooks/orders/useDeleteOrder';

export const DeleteButtonOrder = ({ id = null }) => {
  const { mutate } = useDeleteOrder();

  const handleDelete = () => {
    const auth = window.confirm(
      `Está seguro de eliminar la orden con id ${id}?`
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
