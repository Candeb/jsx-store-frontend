import React from 'react';
import { UserNavLinkItem } from '../../pages/User/UserProfile/UserProfileStyles';

export const UserNavLink = ({ to, children }) => {
  return (
    <UserNavLinkItem
      className={({ isActive }) => (isActive ? 'active' : '')}
      to={to}
    >
      {children}
    </UserNavLinkItem>
  );
};
