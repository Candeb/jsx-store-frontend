import React, { useState } from 'react';
import OrderListAdmin from '../../pages/Admin/AdminOrders/OrderListAdmin';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';

const BtnViewOrder = ({ ordenes }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleToggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      <button onClick={handleToggleModal}>
        {modalOpen ? (
          <span>
            Cerrar orden <IoIosArrowDown />
          </span>
        ) : (
          <span>
            Ver orden <IoIosArrowForward />
          </span>
        )}
      </button>

      {modalOpen && (
        <div>
          <OrderListAdmin ordenes={ordenes} />
        </div>
      )}
    </div>
  );
};

export default BtnViewOrder;
