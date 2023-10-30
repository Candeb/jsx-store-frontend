import * as yup from 'yup';

const passwordRegx = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$';
export const registerSchema = yup.object().shape({
  name: yup.string().required('Es obligatorio ingresar tu nombre'),
  lastname: yup.string().required('Es obligatorio ingresar tu apellido'),
  email: yup
    .string()
    .email('El email no es válido')
    .required('Es obligatorio ingresar tu email'),
  password: yup
    .string()
    .matches(
      passwordRegx,
      'La contraseña debe contener mínimo 8 caracteres: al menos una letra mayúscula, una letra minúscula y un número'
    ),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Las contraseñas no coinciden')
    .required('Repita la contraseña'),
});

export const registerUserFetch = async (data) => {
  const response = await fetch(
    'https://jsx-store-api.onrender.com/auth/register',
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'content-type': 'application/json' },
    }
  );
  if (response.status === 400) {
    return false;
  } else if (response.status === 200) {
    return true;
  }

  console.log(response.status);
};
