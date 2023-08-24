import React from 'react';
import { Container, LogoContainer, MobileIcon, Wrapper } from './HeaderStyles';
import { Link } from 'react-router-dom';

export const HeaderUser = () => {
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
