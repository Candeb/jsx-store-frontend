import React, { useState } from 'react';
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

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleResetPassword = async () => {
    // Verificar si las contraseñas coinciden
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    // Realizar la solicitud al servidor para restablecer la contraseña
    try {
      const response = await fetch(
        'https://jsx-store-api.onrender.com/auth/forgot-password',
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }), // Agregar el campo de correo electrónico
        }
      );

      if (response.status === 200) {
        setIsSuccess(true);
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      setError('Hubo un error al restablecer la contraseña');
    }
  };

  return (
    <>
      <HeaderUser />
      <ContainerLogin>
        <TitleLogin>Reestablecer contraseña</TitleLogin>
        {isSuccess ? (
          <p>
            Contraseña restablecida con éxito. Puedes iniciar sesión con tu
            nueva contraseña.
          </p>
        ) : (
          <div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Container>
              <LabelInputForm>
                Ingresa tu dirección de correo electrónico
              </LabelInputForm>
              <InputFormLogin
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Container>
            <Container>
              <LabelInputForm>Ingresa una nueva contraseña</LabelInputForm>
              <InputFormLogin
                type="password"
                value={password}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </Container>
            <Container>
              <LabelInputForm>Repite la nueva contraseña</LabelInputForm>
              <InputFormLogin
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Container>
            <BtnSubmit onClick={handleResetPassword}>
              Restablecer contraseña
            </BtnSubmit>
          </div>
        )}
        <Link to="/login">
          <BtnSubmit onClick={scrollToTop}>
            Volver al inicio de sesión
          </BtnSubmit>
        </Link>
      </ContainerLogin>
    </>
  );
};

export default ForgotPassword;
