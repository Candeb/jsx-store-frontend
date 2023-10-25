import React, { useState } from 'react';
import {
  Container,
  LogoContainer,
  Menu,
  MenuIcon,
  MobileIcon,
  NavBar,
  NavBarLinks,
  Wrapper,
} from './HeaderStyles';
import {
  IoPersonOutline,
  IoMenuOutline,
  IoCloseOutline,
  IoPerson,
} from 'react-icons/io5';
import ModalCart from './Cart/ModalCart';
import * as cartActions from '../../redux/cart/cart-actions';
import { CartIcon } from './Cart/CartIcon';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { scrollToTop } from '../../App';
import { NavLinkItem } from '../NavLinkItem/NavLinkItem';
import { useSelector } from 'react-redux';
import NameUser from '../User/NameUser';

export const Header = () => {
  const [click, setClick] = useState(false);
  const userId = localStorage.getItem('userId');
  const userRole = localStorage.getItem('userRole'); // Obtener el rol del usuario desde localStorage

  const user = useSelector((state) => state.user.user);

  const handlerMenu = () => {
    setClick(!click);
    scrollToTop();
  };

  return (
    <Container name="home" id="home">
      <Wrapper>
        <Link to="/">
          <LogoContainer onClick={scrollToTop}>
            <img
              src="https://github.com/Candeb/jsx-store-frontend/blob/main/src/assets/logo.png?raw=true"
              alt="Logo"
            />
          </LogoContainer>
        </Link>

        <NavBar click={click}>
          <NavLinkItem to="/" onClick={() => handlerMenu()}>
            {' '}
            Home{' '}
          </NavLinkItem>

          <NavLinkItem to="/sneakers" onClick={() => handlerMenu()}>
            Sneakers
          </NavLinkItem>

          <NavBarLinks onClick={() => handlerMenu()}>Suscribite</NavBarLinks>
        </NavBar>

        <Menu>
          <CartIcon />

          <ModalCart />

          <Link
            to={
              userRole === 'ADMIN'
                ? '/admin/dashboard'
                : userId
                ? `/user/${userId}`
                : '/login'
            }
          >
            <MenuIcon onClick={scrollToTop}>
              {user ? <NameUser userId={userId} /> : <IoPersonOutline />}
            </MenuIcon>
          </Link>

          <MobileIcon onClick={() => handlerMenu()}>
            {click ? <IoCloseOutline /> : <IoMenuOutline />}
          </MobileIcon>
        </Menu>
      </Wrapper>
    </Container>
  );
};
