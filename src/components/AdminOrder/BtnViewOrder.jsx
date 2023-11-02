import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import CardOrderDetail from '../../pages/User/UserOrders/CardOrderDetail';
import { BtnOrderView } from '../../pages/Admin/AdminDashboard/AdminDashboardStyles';
import TotalOrder from '../User/TotalOrder';

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
        <>
          <div>
            <CardOrderDetail order={order} />
          </div>
          <TotalOrder
            productIds={order.products.map((product) => product.productId)}
          />
        </>
      )}
    </div>
  );
};

export default BtnViewOrder;
