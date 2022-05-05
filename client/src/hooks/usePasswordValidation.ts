export const listValidationsPassword = [
  {
    id: 0,
    text: 'Al menos 8 caracteres',
    checked: false
  },
  {
    id: 1,
    text: 'Al menos 1 letra mayúscula',
    checked: false
  },
  {
    id: 2,
    text: 'Al menos 1 letra minúscula',
    checked: false
  },
  {
    id: 3,
    text: 'Al menos 1 numero',
    checked: false
  }
];
export const usePasswordValidation = (
  pass: string,
  newPass: string
): {
  textNewErrors: string;
  newValidations: Array<{
    id: number;
    text: string;
    checked: boolean;
  }>;
} => {
  let newValidations = listValidationsPassword;
  let textNewErrors = '';
  if (pass.length) {
    if (pass.length >= 8) {
      newValidations[0] = { ...newValidations[0], checked: true };
    } else {
      newValidations[0] = {
        ...newValidations[0],
        checked: false
      };
    }
    let isUpperLetter = false;
    let isLowerLetter = false;
    let isNumber = false;
    for (let i = 0; i < pass.length; i++) {
      if (
        !Number(pass.charAt(i)) &&
        pass.charAt(i) === pass.charAt(i).toUpperCase()
      ) {
        isUpperLetter = true;
      }
      if (
        !Number(pass.charAt(i)) &&
        pass.charAt(i) === pass.charAt(i).toLowerCase()
      ) {
        isLowerLetter = true;
      }
      if (Number(pass.charAt(i))) {
        isNumber = true;
      }
    }
    /* Verifico errores en la nueva contraseña */
    if (!isUpperLetter) {
      textNewErrors = 'La contraseña debe tener al menos 1 letra mayúscula';
    } else if (!isLowerLetter) {
      textNewErrors = 'La contraseña debe tener al menos 1 letra minúscula';
    } else if (!isNumber) {
      textNewErrors = 'La contraseña debe tener al menos 1 número';
    } else if (newPass.length && pass !== newPass) {
      textNewErrors = 'La contraseñas no coinciden';
    } else if (pass.length < 8) {
      textNewErrors = 'La contraseña debe tener 8 caracteres como mínimo';
    } else if (!newPass.length) {
      textNewErrors = 'La contraseña debe confirmarse';
    } else {
      textNewErrors = '';
    }

    /* Verifico la lista de requerimientos para la nueva contraseña */
    if (isUpperLetter) {
      newValidations[1] = { ...newValidations[1], checked: true };
    } else {
      newValidations[1] = { ...newValidations[1], checked: false };
    }
    if (isLowerLetter) {
      newValidations[2] = { ...newValidations[2], checked: true };
    } else {
      newValidations[2] = { ...newValidations[2], checked: false };
    }
    if (isNumber) {
      newValidations[3] = { ...newValidations[3], checked: true };
    } else {
      newValidations[3] = { ...newValidations[3], checked: false };
    }
  } else {
    newValidations = listValidationsPassword;
  }

  return { textNewErrors, newValidations };
};
