import React from 'react';
import { HeaderUser } from '../../components/Header/HeaderUser';
import {
  BtnSubmit,
  Container,
  ContainerFormLogin,
  ContainerLogin,
  InputFormLogin,
  LabelInputForm,
  TitleLogin,
} from '../Login/LoginStyles';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../App';

export const ForgotPassword = () => {
  return (
    <>
      <HeaderUser />
      <ContainerLogin>
        <TitleLogin>Reestablecer contraseña</TitleLogin>
        <ContainerFormLogin>
          <Container>
            <LabelInputForm>ingrese una contraseña nueva</LabelInputForm>
            <InputFormLogin />
          </Container>
          <Container>
            <LabelInputForm>repita la nueva contraseña</LabelInputForm>
            <InputFormLogin />
          </Container>
          <Link to="/">
            {' '}
            <BtnSubmit onClick={scrollToTop}>
              {' '}
              ingresar con la nueva contraseña{' '}
            </BtnSubmit>
          </Link>
        </ContainerFormLogin>
      </ContainerLogin>
    </>
  );
};
