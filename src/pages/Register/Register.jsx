import React, { useState } from 'react';
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
import axios from 'axios';

export const Register = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register, setRegister] = useState(false);
  // onClick={scrollToTop}

  const handleSubmit = (e) => {
    e.preventDefault();

    // set configurations
    const configuration = {
      method: 'post',
      url: 'https://jsx-store-api.onrender.com/auth/register',
      data: {
        name,
        lastname,
        email,
        password,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        setRegister(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };
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
        <ContainerFormRegister onSubmit={(e) => handleSubmit(e)}>
          <Container>
            <LabelInputForm>nombre</LabelInputForm>
            <InputFormLogin
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Container>
          <Container>
            <LabelInputForm>apellido</LabelInputForm>
            <InputFormLogin
              type="text"
              name="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </Container>
          <Container>
            <LabelInputForm>email</LabelInputForm>
            <InputFormLogin
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Container>

          <Container>
            <LabelInputForm>crea una contraseña</LabelInputForm>
            <InputFormLogin
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Container>

          <BtnSubmit onClick={(e) => handleSubmit(e)} type="submit">
            {' '}
            REGISTRARME{' '}
          </BtnSubmit>

          {register ? (
            <p className="text-success">
              Te registraste exitosamente! Ahora inicia sesión{' '}
              <Link to="/login"> aquí </Link>{' '}
            </p>
          ) : (
            <p className="text-danger">No estás registrado</p>
          )}
        </ContainerFormRegister>
      </ContainerRegister>
    </>
  );
};
