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
  const [errorMsg, setErrorMsg] = useState(false); //hacemos un estado de manejo de true o false para mostrar un mensaje de error en color rojo.
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.user.user); //se accede al estado del user , para verificar si se logeo. y si se logeo se redirecciona al home
  const navigate = useNavigate();

  setTimeout(() => {
    const userId = localStorage.getItem('userId');
    if (userLogin && userId) {
      navigate(`/user/${userId}`);
    }
  }, 1000);

  const [signin, setSignin] = useState(false);

  return (
    <>
      <HeaderUser />
      <ContainerLogin>
        {' '}
        <Link to="/admin/login"> Admin</Link>
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
            } else if (loginUser) {
              const { name, role, accessToken } = loginUser;
              setSignin(true);
              // Almacenar el usuario en el estado global o local
              dispatch(userActions.userLogin(name, role, accessToken));

              // Reiniciar el formulario
              setSubmitting(false);

              // Realizar alguna acción adicional, como redireccionar a la página de inicio, etc.
              // console.log('datadd', response);
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
      </ContainerLogin>
    </>
  );
};

export default Login;
