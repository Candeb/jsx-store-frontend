import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export const OpenModalUser = ({ handleOpen, userId }) => {
  return (
    <div className="row mt-1">
      <div className="col-md-4 ">
        <div className="d-grid mx-auto">
          <button
            onClick={handleOpen}
            className="btn btn-dark"
            style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
          >
            <FontAwesomeIcon icon={faUser} />
            Ver detalles de {userId}
          </button>
        </div>
      </div>
    </div>
  );
};
