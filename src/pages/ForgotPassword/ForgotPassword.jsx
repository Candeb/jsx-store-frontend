import React from 'react';
import { HeaderUser } from '../../components/Header/HeaderUser';
import {
  BtnSubmit,
  Container,
  ContainerLogin,
  InputFormLogin,
  LabelInputForm,
  TitleLogin,
} from '../LoginPage/LoginStyles';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../App';

export const ForgotPassword = () => {
  return (
    <>
      <HeaderUser />
      <ContainerLogin>
        <TitleLogin>Reestablecer contraseña</TitleLogin>
        <div>
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
        </div>
      </ContainerLogin>
    </>
  );
};
