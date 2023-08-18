import React from 'react';
import { NavLinkStyled } from './NavLinkItemStyles';

export const NavLinkItem = ({ to, children }) => {
  return (
    <NavLinkStyled
      className={({ isActive }) => (isActive ? 'active' : '')}
      to={to}
    >
      {children}
    </NavLinkStyled>
  );
};
