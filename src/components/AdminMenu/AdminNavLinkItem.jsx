import React from 'react';
import { AdminNavLink } from '../../pages/Admin/AdminDashboard/AdminDashboardStyles';

export const AdminNavLinkItem = ({ to, children }) => {
  return (
    <AdminNavLink
      className={({ isActive }) => (isActive ? 'active' : '')}
      to={to}
    >
      {children}
    </AdminNavLink>
  );
};
