import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email('email invalido').required('*completa este campo'),
  password: yup.string().required('*complete este campo'),
});

// Inicio de sesión
export const login = async (email, password) => {
  const response = await fetch(
    'https://jsx-store-api.onrender.com/auth/login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }
  );

  if (response.status === 200) {
    const data = await response.json();
    const accessToken = data.accessToken;
    const id = data.id;

    console.log('data', data);

    // Almacena el token de acceso en localStorage (o donde prefieras)
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('userId', id);

    return true; // Inicio de sesión exitoso
  } else {
    // Manejar errores de inicio de sesión
    return false;
  }
};
