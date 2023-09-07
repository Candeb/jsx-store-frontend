import React, { useState } from 'react';
import {
  AdminNavBar,
  ContainerAdminNavBar,
  ContainerAdminProfile,
  ImgAdmin,
  ImgLogoMenuAdmin,
  TitleAdmin,
  MenuIconAdmin,
  IconsMenu,
  AdminNavLinkMobile,
  ContainerMenu,
} from '../../pages/Admin/AdminDashboard/AdminDashboardStyles';
import { AdminNavLinkItem } from '../AdminMenu/AdminNavLinkItem';
import { scrollToTop } from '../../App';
import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5';
import {
  BsFillArrowRightCircleFill,
  BsFillClipboard2CheckFill,
} from 'react-icons/bs';
import { AiFillHome, AiOutlineUser } from 'react-icons/ai';
import { GiConverseShoe } from 'react-icons/gi';
import { FiLogOut } from 'react-icons/fi';
import { MobileIcon } from '../Header/HeaderStyles';
import { TitleUser } from '../../pages/User/AuthUserStyles';
import { useAuth } from '../../context/authContext';

export const UserMenu = ({ name, lastname }) => {
  const { isAuthenticated, logout, user } = useAuth();
  const [click, setClick] = useState(false);

  const handlerMenu = () => {
    setClick(!click);
    scrollToTop();
  };

  return (
    <>
      <ContainerMenu>
        <MobileIcon
          style={{ padding: '10px', color: 'black', zIndex: '999' }}
          onClick={() => handlerMenu()}
        >
          {click ? <IoCloseOutline /> : <BsFillArrowRightCircleFill />}
        </MobileIcon>
        <MenuIconAdmin click={click}>
          <IconsMenu>
            <AdminNavLinkMobile to="#">
              <AiFillHome />
            </AdminNavLinkMobile>
            <AdminNavLinkMobile to="#">
              <AiOutlineUser />
            </AdminNavLinkMobile>
            <AdminNavLinkMobile to="#">
              <GiConverseShoe />
            </AdminNavLinkMobile>

            <button onClick={() => logout()}>
              <FiLogOut />
            </button>
          </IconsMenu>
          <ImgLogoMenuAdmin
            style={{ height: '30px' }}
            src="https://github.com/Candeb/jsx-store-frontend/blob/main/src/assets/logofavicon.png?raw=true"
            alt="Logo"
          />
        </MenuIconAdmin>
      </ContainerMenu>
      <ContainerAdminNavBar>
        <ContainerAdminProfile>
          <TitleUser>Hola, {name}!</TitleUser>
        </ContainerAdminProfile>
        <AdminNavBar>
          <AdminNavLinkItem to="/user/dashboard" onClick={() => handlerMenu()}>
            Dashboard
          </AdminNavLinkItem>
          <AdminNavLinkItem to="/user/profile" onClick={() => handlerMenu()}>
            Mis datos
          </AdminNavLinkItem>
          <AdminNavLinkItem to="/user/orders" onClick={() => handlerMenu()}>
            Mis compras
          </AdminNavLinkItem>

          <button onClick={() => logout()}>
            Cerrar sesión <FiLogOut />
          </button>
        </AdminNavBar>

        <ImgLogoMenuAdmin
          src="https://github.com/Candeb/jsx-store-frontend/blob/main/src/assets/logofavicon.png?raw=true"
          alt="Logo"
        />
      </ContainerAdminNavBar>{' '}
    </>
  );
};
