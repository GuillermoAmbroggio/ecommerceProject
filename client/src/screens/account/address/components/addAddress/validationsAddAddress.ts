import * as Yup from 'yup';

export const validationsAddAddress = Yup.object().shape({
  street: Yup.string().required('Nombre de calle requerido'),
  street_number: Yup.string().required(
    'Número requerido o selecciona "sin número"'
  ),

  zip_code: Yup.string().required('Código postal requerido'),
  city: Yup.string().required('Ciudad requerida'),
  state: Yup.string().required('Provincia requerida'),
  phone: Yup.string().min(8, 'Debe tener 8 caracteres como mínimo')
});

export default validationsAddAddress;
