import { FormikErrors } from 'formik';

export type InputsValuesRegister = {
  name: string;
  lastname: string;
  email: string;
  date: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

export type SetInputValuesRegister = (
  field: string,
  value: any,
  shouldValidate?: boolean | undefined
) => Promise<void> | Promise<FormikErrors<InputsValuesRegister>>;

export type ErrorsRegister = FormikErrors<InputsValuesRegister>;
