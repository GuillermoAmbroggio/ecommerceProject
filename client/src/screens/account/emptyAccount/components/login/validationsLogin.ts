import * as Yup from 'yup';

export const validationsLogin = Yup.object().shape({
  password: Yup.string().required('Contraseña requerida'),
  email: Yup.string()
    .required('Correo electrónico requerido')
    .email('Formato de correo electrónico inválido')
});

export default validationsLogin;
