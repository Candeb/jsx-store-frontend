import React, { useEffect, useState } from 'react';
import * as userActions from '../../redux/user/user-actions';
import { Formik } from 'formik';
import { login, loginSchema } from './loginSchema';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { HeaderUser } from '../../components/Header/HeaderUser';
import {
  ContainerLogin,
  ContainerSubtitleLogin,
  LoginForm,
  LoginInputs,
  TitleLogin,
  SubtitleLogin,
  Container,
  LabelInputForm,
  ForgotPassword,
  BtnSubmit,
} from './LoginStyles';
import { useAuth } from '../../context/authContext';
import { scrollToTop } from '../../App';

const Login = () => {
  const [errorMsg, setErrorMsg] = useState(false);
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    // Obtener la ruta anterior desde localStorage
    const previousPath = localStorage.getItem('previousPath');

    // Limpiar la ruta anterior de localStorage después de usarla si es necesario
    if (previousPath) {
      localStorage.removeItem('previousPath');
    }
  }, [userLogin, navigate]);

  const [signin, setSignin] = useState(false);

  return (
    <>
      <HeaderUser />
      <ContainerLogin>
        {' '}
        <TitleLogin>Ingresa a JSX STORE</TitleLogin>
        <ContainerSubtitleLogin>
          <p>Aún no tienes cuenta?</p>

          <Link to="/register">
            <SubtitleLogin> CREAR </SubtitleLogin>
          </Link>
        </ContainerSubtitleLogin>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          login={loginSchema}
          onSubmit={async (values, { setSubmitting }) => {
            const { email, password } = values;

            // Realiza el inicio de sesión
            const loginUser = await login(email, password);

            if (
              loginUser &&
              loginUser.message === 'contraseña y/o usuario incorrecto.'
            ) {
              // Manejar error de inicio de sesión
              setErrorMsg(true);
              // En el componente de inicio de sesión después del inicio de sesión exitoso
            } else if (loginUser) {
              const { name, role, accessToken } = loginUser;
              setSignin(true);
              // Almacenar el usuario en el estado global o local
              dispatch(userActions.userLogin(name, role, accessToken));

              // Reiniciar el formulario
              setSubmitting(false);

              // Verificar si hay una ruta anterior en localStorage
              const previousPath = localStorage.getItem('previousPath');

              // Redirigir al usuario a la ruta anterior si existe, de lo contrario, a la página de inicio
              if (previousPath) {
                navigate(previousPath);
              } else {
                navigate('/');
              }
            }
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <LoginForm>
              <Container>
                <LabelInputForm htmlFor="email">Email:</LabelInputForm>
                <LoginInputs type="email" name="email" autoFocus required />
              </Container>

              <Container>
                <LabelInputForm htmlFor="password">contraseña:</LabelInputForm>
                <LoginInputs type="password" name="password" required />
              </Container>

              <BtnSubmit type="submit" disabled={isSubmitting}>
                Enviar
              </BtnSubmit>
              {signin ? (
                <p className="text-success">
                  Iniciaste sesión correctamente! Ingresando...
                </p>
              ) : (
                <p className="text-danger">No has iniciado sesión</p>
              )}
            </LoginForm>
          )}
        </Formik>
        <Link to="/forgotpassword">
          <ForgotPassword onClick={scrollToTop}>
            Olvidé mi contraseña
          </ForgotPassword>
        </Link>
        <div
          style={{ display: 'flex', justifyContent: 'start', width: '100%' }}
        >
          <Link
            to="/admin/login"
            style={{ color: '#797979', fontSize: '13px' }}
          >
            {' '}
            Admin
          </Link>
        </div>
      </ContainerLogin>
    </>
  );
};

export default Login;
