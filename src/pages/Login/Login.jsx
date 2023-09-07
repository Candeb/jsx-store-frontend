import React, { useState } from 'react';
import {
  Container,
  ContainerFormLogin,
  ContainerLogin,
  LabelInputForm,
  BtnSubmit,
  ForgotPassword,
  TitleLogin,
  ContainerSubtitleLogin,
  SubtitleLogin,
} from './LoginStyles';
import { HeaderUser } from '../../components/Header/HeaderUser';
HeaderUser;
import { scrollToTop } from '../../App';
import { useAuth } from '../../context/authContext';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../schemas/auth';
import { InputForm } from './InputForm';

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const { login, errors: loginErrors, isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  const [signin, setSignin] = useState(false);

  const onSubmit = (data) => {
    login(data);
    setSignin(true);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/user');
    }
  }, [isAuthenticated]);

  return (
    <>
      <HeaderUser />{' '}
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
        <ContainerFormLogin onSubmit={handleSubmit(onSubmit)}>
          <Container>
            <LabelInputForm htmlFor="email">Email:</LabelInputForm>
            <InputForm
              type="email"
              name="email"
              autoFocus
              required
              {...register('email', { required: true })}
            />
            <p>{errors.email?.message}</p>
          </Container>
          <Container>
            <LabelInputForm htmlFor="password">contraseña:</LabelInputForm>
            <InputForm
              type="password"
              name="password"
              required
              {...register('password', { required: true, minLength: 6 })}
            />
            <p>{errors.password?.message}</p>
          </Container>
          {loginErrors.map((error, i) => (
            <p>
              {' '}
              {error} key={i}{' '}
            </p>
          ))}

          <BtnSubmit type="submit"> iniciar sesión </BtnSubmit>

          {signin ? (
            <p className="text-success">Iniciaste sesión correctamente!</p>
          ) : (
            <p className="text-danger">No has iniciado sesión</p>
          )}
          <Link to="/forgotpassword">
            <ForgotPassword onClick={scrollToTop}>
              Olvidé mi contraseña
            </ForgotPassword>
          </Link>
        </ContainerFormLogin>
      </ContainerLogin>
    </>
  );
}
