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
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../App';
import { NavLinkItem } from '../NavLinkItem/NavLinkItem';
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../../redux/user/user-actions';
import NameUser from '../User/NameUser';

export const Header = () => {
  const [click, setClick] = useState(false);

  const userId = localStorage.getItem('userId');

  const user = useSelector((state) => state.user.user); //accedemos a la informacion del usuario logeado.
  // const dispatch = useDispatch();

  const handlerMenu = () => {
    setClick(!click);
    scrollToTop();
  };

  // const menuHidden = useSelector((state) => state.user.hiddenMenu);

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
        {/* onClick={() => dispatch(userActions.hiddenMenu())} */}
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

          <Link to={user ? `/user/${userId}` : '/login'}>
            <MenuIcon onClick={scrollToTop}>
              {userId ? <NameUser userId={userId} /> : <IoPersonOutline />}
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
