import React, { useState } from 'react';
import { Formik } from 'formik';
import { registerSchema, registerUserFetch } from './registerUtils';
import { useNavigate } from 'react-router-dom';
import { HeaderUser } from '../../components/Header/HeaderUser';
import {
  ErrorMsg,
  FormContainer,
  RegisterInputs,
  ContainerRegister,
  ContainerImgRegister,
} from './RegisterStyles';
import {
  TitleLogin,
  LabelInputForm,
  Container,
  BtnSubmit,
} from '../LoginPage/LoginStyles';

const Register = () => {
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();

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

        <Formik
          initialValues={{
            name: '',
            lastname: '',
            email: '',
            password: '',
            repeatPassword: '',
          }}
          validationSchema={registerSchema}
          onSubmit={async (values, { resetForm }) => {
            const { name, lastname, email, password } = values;
            const createUser = { name, lastname, email, password };
            //una vez tenido los valores, se le manda la peticion con metodo "POST" para registrar el usuario en la base de datos.
            const saveUser = await registerUserFetch(createUser);
            if (saveUser === false) {
              //si el usuario existe se lo envia a la pagina de login
              setMensaje('Este usuario ya existe');
              setTimeout(() => {
                resetForm();
                navigate('/login');
              }, '3000');
            } else {
              //si el usuario se registra exitosamente se lo envia a la pagina de login
              setMensaje('Usuario creado exitosamente');
              setTimeout(() => {
                resetForm();
                setMensaje('');
                navigate('/login');
              }, '3000');
            }
          }}
        >
          {({ errors, touched }) => (
            <FormContainer>
              <Container>
                <LabelInputForm>nombre</LabelInputForm>
                <RegisterInputs name="name" autoFocus />
              </Container>

              {errors.name && touched.name ? (
                <ErrorMsg>{errors.name}</ErrorMsg>
              ) : null}

              <Container>
                <LabelInputForm>apellido</LabelInputForm>
                <RegisterInputs name="lastname" />
              </Container>

              {errors.lastname && touched.lastname ? (
                <ErrorMsg>{errors.lastname}</ErrorMsg>
              ) : null}

              <Container>
                <LabelInputForm>email</LabelInputForm>
                <RegisterInputs name="email" />
              </Container>

              {errors.email && touched.email ? (
                <ErrorMsg>{errors.email}</ErrorMsg>
              ) : null}

              <Container>
                <LabelInputForm>crea una contraseña</LabelInputForm>
                <RegisterInputs type="password" name="password" />
              </Container>

              {errors.password && touched.password ? (
                <ErrorMsg>{errors.password}</ErrorMsg>
              ) : null}

              <Container>
                <LabelInputForm>repita la contraseña</LabelInputForm>
                <RegisterInputs type="password" name="repeatPassword" />
              </Container>
              {errors.repeatPassword && touched.repeatPassword ? (
                <ErrorMsg>{errors.repeatPassword}</ErrorMsg>
              ) : null}
              {<div>{mensaje}</div>}

              <BtnSubmit type="submit">Enviar</BtnSubmit>
            </FormContainer>
          )}
        </Formik>
      </ContainerRegister>
    </>
  );
};

export default Register;
