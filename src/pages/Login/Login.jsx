import React from 'react';
import {
  Container,
  ContainerFormLogin,
  ContainerLogin,
  LabelInputForm,
  InputFormLogin,
  BtnSubmit,
  ForgotPassword,
  TitleLogin,
  ContainerSubtitleLogin,
  SubtitleLogin,
} from './LoginStyles';
import { HeaderUser } from '../../components/Header/HeaderUser';
HeaderUser;
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../App';

export const Login = () => {
  return (
    <>
      <HeaderUser />{' '}
      <ContainerLogin>
        <TitleLogin>Ingresa a JSX STORE</TitleLogin>
        <ContainerSubtitleLogin>
          <p>Aún no tienes cuenta?</p>

          <Link to="/register">
            <SubtitleLogin> CREAR </SubtitleLogin>
          </Link>
        </ContainerSubtitleLogin>
        <ContainerFormLogin>
          <Container>
            <LabelInputForm> usuario </LabelInputForm>
            <InputFormLogin type="email" />
          </Container>
          <Container>
            <LabelInputForm> contraseña </LabelInputForm>
            <InputFormLogin type="password" />
          </Container>
          <Link to="/">
            <BtnSubmit onClick={scrollToTop}> iniciar sesión </BtnSubmit>
          </Link>
          <Link to="/forgotpassword">
            <ForgotPassword onClick={scrollToTop}>
              Olvidé mi contraseña
            </ForgotPassword>
          </Link>
        </ContainerFormLogin>
      </ContainerLogin>
    </>
  );
};
