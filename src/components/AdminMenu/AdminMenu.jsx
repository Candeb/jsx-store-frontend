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
import { AdminNavLinkItem } from './AdminNavLinkItem';
import { scrollToTop } from '../../App';
import { IoCloseOutline } from 'react-icons/io5';
import {
  BsFillArrowRightCircleFill,
  BsFillClipboard2CheckFill,
} from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { AiFillHome } from 'react-icons/ai';
import { GiConverseShoe } from 'react-icons/gi';
import { BiBadgeCheck } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { MobileIcon } from '../Header/HeaderStyles';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

export const AdminMenu = () => {
  const { logout } = useAuth();
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
            <AdminNavLinkMobile to="/admin/dashboard">
              <AiFillHome />
            </AdminNavLinkMobile>
            <AdminNavLinkMobile to="/admin/users">
              <FiUsers />
            </AdminNavLinkMobile>
            <AdminNavLinkMobile to="/admin/products">
              <GiConverseShoe />
            </AdminNavLinkMobile>
            <AdminNavLinkMobile to="/admin/brands">
              <BiBadgeCheck />
            </AdminNavLinkMobile>
            <AdminNavLinkMobile to="/admin/orders">
              <BsFillClipboard2CheckFill />
            </AdminNavLinkMobile>
            <button onClick={() => logout()}>
              <FiLogOut />
            </button>
          </IconsMenu>
          <Link to="/">
            <ImgLogoMenuAdmin
              style={{ height: '30px' }}
              src="https://github.com/Candeb/jsx-store-frontend/blob/main/src/assets/logofavicon.png?raw=true"
              alt="Logo"
            />
          </Link>
        </MenuIconAdmin>
      </ContainerMenu>
      <ContainerAdminNavBar>
        <ContainerAdminProfile>
          <ImgAdmin src="https://github.com/Candeb/jsx-store-frontend/blob/main/src/assets/iconadmin.png?raw=true" />
          <TitleAdmin>Hola, Admin!</TitleAdmin>
        </ContainerAdminProfile>
        <AdminNavBar>
          <AdminNavLinkItem to="/admin/dashboard" onClick={() => handlerMenu()}>
            Dashboard
          </AdminNavLinkItem>
          <AdminNavLinkItem to="/admin/users" onClick={() => handlerMenu()}>
            Usuarios
          </AdminNavLinkItem>
          <AdminNavLinkItem to="/admin/products" onClick={() => handlerMenu()}>
            Productos
          </AdminNavLinkItem>
          <AdminNavLinkItem to="/admin/brands" onClick={() => handlerMenu()}>
            Marcas
          </AdminNavLinkItem>
          <AdminNavLinkItem to="/admin/orders" onClick={() => handlerMenu()}>
            Ordenes
          </AdminNavLinkItem>
          <button onClick={() => logout()}>
            Cerrar sesión <FiLogOut />
          </button>
        </AdminNavBar>

        <Link to="/">
          <ImgLogoMenuAdmin
            src="https://github.com/Candeb/jsx-store-frontend/blob/main/src/assets/logofavicon.png?raw=true"
            alt="Logo"
          />
        </Link>
      </ContainerAdminNavBar>{' '}
    </>
  );
};
