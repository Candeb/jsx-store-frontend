import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

export const OpenModal = ({ handleOpen }) => {
  return (
    <div className="row mt-1">
      <div className="col-md-4 ">
        <div className="d-grid mx-auto">
          <button
            onClick={handleOpen}
            className="btn btn-dark"
            style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
          >
            <FontAwesomeIcon icon={faCirclePlus} />
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
};
