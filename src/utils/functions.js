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

    keys.forEach((key) => {
      if (!form[key].trim()) {
        rej('Hay campos incompletos....');
      }
    });

    res(form);
  });
};
