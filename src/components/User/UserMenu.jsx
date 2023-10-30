import React, { useState } from 'react';
import {
  AdminNavBar,
  ContainerAdminProfile,
  ImgLogoMenuAdmin,
  MenuIconAdmin,
  IconsMenu,
  ContainerMenu,
} from '../../pages/Admin/AdminDashboard/AdminDashboardStyles';
import { scrollToTop } from '../../App';
import { IoCloseOutline } from 'react-icons/io5';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { GiConverseShoe } from 'react-icons/gi';
import { FiLogOut } from 'react-icons/fi';
import { MobileIcon } from '../Header/HeaderStyles';
import {
  TitleUser,
  UserLogout,
} from '../../pages/User/UserProfile/UserProfileStyles';
import { useAuth } from '../../context/authContext';
import { UserNavLink } from './UserNavLink';
import { ContainerUserNavBar, UserNavLinkMobile } from './UserMenuStyles';
import { Link } from 'react-router-dom';

export const UserMenu = ({ name }) => {
  const { logout } = useAuth();
  const [click, setClick] = useState(false);

  const userId = localStorage.getItem('userId'); //obtener el ID del usuario

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
            <UserNavLinkMobile to={`/user/${userId}`}>
              <AiOutlineUser />
            </UserNavLinkMobile>
            <UserNavLinkMobile to="/user/orders">
              <GiConverseShoe />
            </UserNavLinkMobile>

            <UserLogout
              style={{ textAlign: 'center' }}
              onClick={() => logout()}
            >
              <FiLogOut />
            </UserLogout>
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
      <ContainerUserNavBar>
        <ContainerAdminProfile>
          <TitleUser>Hola, {name}!</TitleUser>
        </ContainerAdminProfile>
        <AdminNavBar>
          <UserNavLink to={`/user/${userId}`} onClick={() => handlerMenu()}>
            Mis datos
          </UserNavLink>
          <UserNavLink to="/user/orders" onClick={() => handlerMenu()}>
            Mis compras
          </UserNavLink>

          <UserLogout style={{ color: 'black' }} onClick={() => logout()}>
            Cerrar sesión <FiLogOut style={{ fontSize: '20px' }} />
          </UserLogout>
        </AdminNavBar>
        <Link to="/">
          <ImgLogoMenuAdmin
            src="https://github.com/Candeb/jsx-store-frontend/blob/main/src/assets/logofavicon.png?raw=true"
            alt="Logo"
          />
        </Link>
      </ContainerUserNavBar>{' '}
    </>
  );
};
