import React from 'react';
import { HeaderUser } from '../../components/Header/HeaderUser';
import {
  ContainerFormRegister,
  ContainerRegister,
  ContainerImgRegister,
} from './RegisterStyles';
import {
  BtnSubmit,
  LabelInputForm,
  TitleLogin,
  Container,
  InputFormLogin,
} from '../Login/LoginStyles';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../App';

export const Register = () => {
  return (
    <>
      <HeaderUser />
      <TitleLogin>TE DAMOS LA BIENVENIDA A JSX STORE</TitleLogin>
      <ContainerRegister>
        <ContainerImgRegister>
          <img
            src="https://github.com/Candeb/jsx-store-frontend/blob/main/src/assets/fondo2hero.png?raw=true"
            alt=""
          />
        </ContainerImgRegister>
        <ContainerFormRegister>
          <Container>
            <LabelInputForm>nombre</LabelInputForm>
            <InputFormLogin type="text" />
          </Container>
          <Container>
            <LabelInputForm>correo electronico</LabelInputForm>
            <InputFormLogin type="email" />
          </Container>
          <Container>
            <LabelInputForm>Celular</LabelInputForm>
            <InputFormLogin type="number" />
          </Container>
          <Container>
            <LabelInputForm>crea una contraseña</LabelInputForm>
            <InputFormLogin type="password" />
          </Container>
          <Link to="/">
            <BtnSubmit onClick={scrollToTop}> REGISTRARME </BtnSubmit>
          </Link>
        </ContainerFormRegister>
      </ContainerRegister>
    </>
  );
};
