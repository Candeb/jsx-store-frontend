import React from 'react';
import { useDeleteUser } from '../../hooks/users/useDeleteUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export const DeleteButtonUser = ({ id = null }) => {
  const { mutate } = useDeleteUser();

  const handleDelete = () => {
    const auth = window.confirm(
      `Está seguro de eliminar el usuario con id ${id} de tu lista?`
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
