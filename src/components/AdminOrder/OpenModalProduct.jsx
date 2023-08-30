import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { GiConverseShoe } from 'react-icons/gi';

export const OpenModalProduct = ({ handleOpen, productId }) => {
  return (
    <div className="row mt-1">
      <div className="col-md-4 ">
        <div className="d-grid mx-auto">
          <button
            onClick={handleOpen}
            className="btn btn-dark"
            style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
          >
            <GiConverseShoe /> id{productId}
          </button>
        </div>
      </div>
    </div>
  );
};
