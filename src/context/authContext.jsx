import { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '../App';

export const loginRequest = async (user) =>
  axios.post(`https://jsx-store-api.onrender.com/auth/login`, user);

export const refreshTokenRequest = async () =>
  axios.post(`https://jsx-store-api.onrender.com/auth/refresh`);

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within a AuthProvider');
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  // clear errors after 5 seconds
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  //   const signup = async (user) => {
  //     try {
  //       const res = await registerRequest(user);
  //       if (res.status === 200) {
  //         setUser(res.data);
  //         setIsAuthenticated(true);
  //       }
  //     } catch (error) {
  //       console.log(error.response.data);
  //       setErrors(error.response.data.message);
  //     }
  //   };

  const login = async (user) => {
    try {
      const res = await loginRequest(user);
      setUser(res.data);
      setIsAuthenticated(true);
      localStorage.setItem(
        'data',
        JSON.stringify({
          user: res.data,
        })
      );
      scrollToTop();

      navigate(`/user`);
    } catch (error) {
      console.log(error);
      // setErrors(error.response.data.message);
    }
  };

  const logout = () => {
    const auth = window.confirm(`¿Está seguro de que desea cerrar sesión?`);
    if (auth) {
      Cookies.remove('token');
      setUser(null);
      setIsAuthenticated(false);
      localStorage.removeItem('data');
      navigate('/login');
    }
  };

  useEffect(() => {
    const checkLogin = async () => {
      const cookies = Cookies.get();
      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      try {
        const res = await refreshTokenRequest(cookies.token);
        console.log(res);
        if (!res.data) return setIsAuthenticated(false);
        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        setIsAuthenticated(false);
        setLoading(false);
      }
    };
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        // signup,
        login,
        logout,
        isAuthenticated,
        errors,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
