import React, { useState } from 'react';
import {
  AdminNavBar,
  ContainerAdminProfile,
  ImgLogoMenuAdmin,
  MenuIconAdmin,
  IconsMenu,
  AdminNavLinkMobile,
  ContainerMenu,
} from '../../pages/Admin/AdminDashboard/AdminDashboardStyles';
import { scrollToTop } from '../../App';
import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { AiFillHome, AiOutlineUser } from 'react-icons/ai';
import { GiConverseShoe } from 'react-icons/gi';
import { FiLogOut } from 'react-icons/fi';
import { MobileIcon } from '../Header/HeaderStyles';
import { TitleUser } from '../../pages/User/UserProfile/UserProfileStyles';
import { useAuth } from '../../context/authContext';
import { UserNavLink } from './UserNavLink';
import { ContainerUserNavBar } from './UserMenuStyles';

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
            <AdminNavLinkMobile to="/user">
              <AiOutlineUser />
            </AdminNavLinkMobile>
            <AdminNavLinkMobile to="/user/orders">
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
      <ContainerUserNavBar>
        <ContainerAdminProfile>
          <TitleUser>Hola, {name}!</TitleUser>
        </ContainerAdminProfile>
        <AdminNavBar>
          <UserNavLink to="/user" onClick={() => handlerMenu()}>
            Mis datos
          </UserNavLink>
          <UserNavLink to="/user/orders" onClick={() => handlerMenu()}>
            Mis compras
          </UserNavLink>

          <button onClick={() => logout()}>
            Cerrar sesión <FiLogOut />
          </button>
        </AdminNavBar>

        <ImgLogoMenuAdmin
          src="https://github.com/Candeb/jsx-store-frontend/blob/main/src/assets/logofavicon.png?raw=true"
          alt="Logo"
        />
      </ContainerUserNavBar>{' '}
    </>
  );
};
