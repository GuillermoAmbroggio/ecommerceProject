import * as Yup from 'yup';

export const ValidationsPassword = Yup.object().shape({
  password: Yup.string().required('Contraseña requerida'),
  newPassword: Yup.string().required(
    'Confirmacion de nueva contraseña requerida'
  )
});

export default ValidationsPassword;
