import * as Yup from 'yup';

export const validationsAddPayment = Yup.object().shape({
  type_identification: Yup.string().required(
    'Tipo de identificación requerido'
  ),
  number_identification: Yup.string().required(
    'Número de identificación requerido'
  ),
  card_number: Yup.string().required('Número de tarjeta requerido'),
  name: Yup.string().required('Nombre del propietario requerido'),
  month_date: Yup.string()
    .required('Mes de expiración requerido')
    .min(2, 'El mes tiene que ser de 2 digitos')
    .max(2, 'El mes tiene que ser de 2 digitos'),
  year_date: Yup.string()
    .required('Año de expiración requerido')
    .min(4, 'El año tiene que ser de 4 digitos')
    .max(4, 'El mes tiene que ser de 4 digitos'),

  cvv: Yup.string().required('CVV es requerido')
});

export default validationsAddPayment;
