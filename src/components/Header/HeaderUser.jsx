import React, { useState } from 'react';
import { Container, LogoContainer, MobileIcon, Wrapper } from './HeaderStyles';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export const HeaderUser = () => {
  const [click, setClick] = useState(false);

  const handlerMenu = () => {
    setClick(!click);
  };

  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <LogoContainer>
            <img
              src="https://github.com/Candeb/jsx-store-frontend/blob/main/src/assets/logo.png?raw=true"
              alt="Logo"
            />
          </LogoContainer>
        </Link>

        <MobileIcon onClick={() => handlerMenu()}>
          {click ? <IoCloseOutline /> : <IoMenuOutline />}
        </MobileIcon>
      </Wrapper>
    </Container>
  );
};
