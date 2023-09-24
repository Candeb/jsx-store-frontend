import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const ProtectedRoutes = ({ children }) => {
  const accessToken = localStorage.getItem('accessToken');
  const userData = useSelector((state) => state.user); // Asegúrate de ajustar esto según tu estructura de estado.

  if (accessToken && userData) {
    // El usuario está autenticado, permite el acceso a la ruta.
    return children;
  } else {
    // El usuario no está autenticado, redirige a la página de inicio de sesión.
    return <Navigate to="/login" />;
  }
};
