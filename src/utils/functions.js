import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export function show_alerta(mensaje, icono) {
  const MySwal = withReactContent(Swal);
  MySwal.fire({
    title: mensaje,
    icon: icono,
  });
}

export const handlerSubmit = (form) => {
  return new Promise((res, rej) => {
    const keys = Object.keys(form);

    for (let key of keys) {
      const value = form[key];

      // Verificar si el valor es una cadena de texto y no está vacío
      if (typeof value === 'string' && !value.trim()) {
        rej('Hay campos incompletos....');
        return;
      }
    }

    res(form);
  });
};
