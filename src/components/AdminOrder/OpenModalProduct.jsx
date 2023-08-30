import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export const OpenModalUser = ({ handleOpen, productId }) => {
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
            Product {productId}
          </button>
        </div>
      </div>
    </div>
  );
};
