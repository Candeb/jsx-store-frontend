import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import CardOrderDetail from '../../pages/User/UserOrders/CardOrderDetail';
import { BtnOrderView } from '../../pages/Admin/AdminDashboard/AdminDashboardStyles';

const BtnViewOrder = ({ order }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleToggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      <BtnOrderView onClick={handleToggleModal}>
        {modalOpen ? (
          <>
            Ocultar productos <IoIosArrowDown />
          </>
        ) : (
          <>
            Ver productos <IoIosArrowForward />
          </>
        )}
      </BtnOrderView>

      {modalOpen && (
        <div>
          <CardOrderDetail
            productId={order.products.map((product) => product.productId)}
          />
        </div>
      )}
    </div>
  );
};

export default BtnViewOrder;
