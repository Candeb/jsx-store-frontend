import React from 'react';
import { Container, LogoContainer, MobileIcon, Wrapper } from './HeaderStyles';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const HeaderUser = () => {
  const user = useSelector((state) => state.user.user); //accedemos a la informacion del usuario logeado.
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
      </Wrapper>
    </Container>
  );
};
