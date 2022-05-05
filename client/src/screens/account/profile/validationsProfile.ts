import * as Yup from 'yup';

export const ValidationsProfile = Yup.object().shape({
  name: Yup.string()
    .required('Nombre requerido')
    .min(3, 'Debe tener 3 caracteres como mínimo'),
  lastname: Yup.string()
    .required('Apellido requerido')
    .min(3, 'Debe tener 3 caracteres como mínimo'),
  email: Yup.string()
    .required('Correo electrónico requerido')
    .email('Formato de correo electrónico inválido')
});

export default ValidationsProfile;
