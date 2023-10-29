import React, { useState } from 'react';
import {
  Container,
  LogoContainer,
  Menu,
  MenuIcon,
  MobileIcon,
  NavBar,
  Wrapper,
  NavBarLinks,
} from './HeaderStyles';
import {
  IoPersonOutline,
  IoMenuOutline,
  IoCloseOutline,
} from 'react-icons/io5';
import ModalCart from './Cart/ModalCart';
import { CartIcon } from './Cart/CartIcon';
import { Link, useNavigate } from 'react-router-dom';
import { scrollToTop } from '../../App';
import { NavLinkItem } from '../NavLinkItem/NavLinkItem';
import { useSelector } from 'react-redux';
import NameUser from '../User/NameUser';

export const Header = () => {
  const [click, setClick] = useState(false);
  const userId = localStorage.getItem('userId');
  const userRole = localStorage.getItem('userRole');
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user);

  const handlerMenu = () => {
    setClick(!click);
    scrollToTop();
  };

  const redirectToHomePageAndScrollToSuscribe = () => {
    navigate('/');
    setTimeout(() => {
      const suscribeSection = document.getElementById('suscribe');
      if (suscribeSection) {
        suscribeSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
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
            <span onClick={scrollToTop}> Home </span>
          </NavLinkItem>

          <NavLinkItem to="/sneakers" onClick={() => handlerMenu()}>
            <span onClick={scrollToTop}> Sneakers </span>
          </NavLinkItem>

          <NavBarLinks
            onClick={() => {
              handlerMenu();
              redirectToHomePageAndScrollToSuscribe();
            }}
          >
            Suscribite
          </NavBarLinks>
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
            onClick={scrollToTop}
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
