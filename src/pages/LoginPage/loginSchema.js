import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email('Email invalido').required('Completa este campo'),
  password: yup.string().required('Completa este campo'),
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
    const { accessToken, id, role } = data;
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('userId', id);
    localStorage.setItem('userRole', role);

    return data;
  } else {
    // Manejar errores de inicio de sesión
    return false;
  }
};
