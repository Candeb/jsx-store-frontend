import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/authContext';

// receives component and any other props represented by ...rest
export const ProtectedRoutes = ({ children }) => {
  // const { isAuthenticated, loading, user } = useAuth();

  // if (loading) return <h1>Loading...</h1>;

  // const existData = localStorage.getItem('data');
  // if (existData || user !== null) {
  //   return children;
  // } else {
  //   <Navigate to="/login" replace />;
  // }

  // return <Outlet />;
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <h1>Loading...</h1>;
  if (!isAuthenticated && !loading) return <Navigate to="/login" replace />;
  return <Outlet />;
};
