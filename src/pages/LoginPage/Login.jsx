import React, { useEffect, useState } from 'react';
import * as userActions from '../../redux/user/user-actions';
import { Formik } from 'formik';
import { loginSchema, login } from './loginSchema';
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
import { scrollToTop } from '../../App';
import { Loader } from '../../components/Loader/Loader';

const Login = () => {
  const [errorMsg, setErrorMsg] = useState(false);
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    const previousPath = localStorage.getItem('previousPath');

    if (previousPath) {
      localStorage.removeItem('previousPath');
    }
  }, [userLogin, navigate]);

  const [signin, setSignin] = useState(false);

  return (
    <>
      <HeaderUser />
      <ContainerLogin>
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
          validationSchema={loginSchema}
          onSubmit={async (values, { setSubmitting }) => {
            const { email, password } = values;

            const loginUser = await login(email, password);

            if (
              loginUser &&
              loginUser.message === 'contraseña y/o usuario incorrecto.'
            ) {
              setErrorMsg(true);
            } else if (loginUser) {
              const { name, role, accessToken } = loginUser;
              setSignin(true);
              dispatch(userActions.userLogin(name, role, accessToken));
              setSubmitting(false);

              setTimeout(async () => {
                setSignin(true);
                dispatch(userActions.userLogin(name, role, accessToken));
                setSubmitting(false);

                if (role === 'USER') {
                  const previousPath = localStorage.getItem('previousPath');
                  if (previousPath) {
                    navigate(previousPath);
                    scrollToTop();
                  } else {
                    navigate('/');
                    scrollToTop();
                  }
                } else if (role === 'ADMIN') {
                  navigate('/admin/dashboard');
                  scrollToTop();
                }
              }, 500);
            } else {
              setErrorMsg(
                'La contraseña y/o el usuario es incorrecto. Intenta nuevamente.'
              );
            }
          }}
        >
          {({ isSubmitting }) => (
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
                <div className="text-success">
                  Iniciaste sesión correctamente! Ingresando...
                  <Loader />
                </div>
              ) : errorMsg ? (
                <div className="text-danger">{errorMsg}</div>
              ) : (
                <div className="text-danger">No has iniciado sesión</div>
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
        ></div>
      </ContainerLogin>
    </>
  );
};

export default Login;
