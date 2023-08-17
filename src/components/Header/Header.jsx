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
} from 'react-icons/io5';
import ModalCart from './Cart/ModalCart';
import * as cartActions from '../../redux/cart/cart-actions';
import { CartIcon } from './Cart/CartIcon';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../App';

export const Header = () => {
  const [click, setClick] = useState(false);

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
              src="https://github.com/Candeb/JSX-STORE/blob/main/src/assets/logo.png?raw=true"
              alt="Logo"
            />
          </LogoContainer>
        </Link>

        <NavBar click={click}>
          <Link to="/">
            <NavBarLinks onClick={() => handlerMenu()}>Home</NavBarLinks>
          </Link>
          <a href="#sneakers">
            <NavBarLinks onClick={() => handlerMenu()}>Sneakers</NavBarLinks>
          </a>
          <a href="#suscribe">
            <NavBarLinks onClick={() => handlerMenu()}>Suscribite</NavBarLinks>
          </a>
        </NavBar>

        <Menu>
          <CartIcon />

          <ModalCart />

          <Link to="/login">
            <MenuIcon onClick={scrollToTop}>
              <IoPersonOutline />
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
