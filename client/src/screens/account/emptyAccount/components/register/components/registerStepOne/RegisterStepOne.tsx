import { Input } from 'molecules';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'atoms';
import RegisterStyle from '../../register.styles';
import {
  ErrorsRegister,
  InputsValuesRegister,
  SetInputValuesRegister
} from '../../register.types';
interface IRegisterStepOneProps {
  values: InputsValuesRegister;
  setFieldValue: SetInputValuesRegister;
  errors: ErrorsRegister;
}

const RegisterStepOne: React.FC<IRegisterStepOneProps> = ({
  values,
  setFieldValue,
  errors
}) => {
  const styles = RegisterStyle();

  return (
    <View>
      <Text variant="bodyTitle" style={[styles.textTitle]}>
        Crea tu cuenta
      </Text>
      <Input
        label="Nombre*"
        placeholder="Ej: Juan"
        containerStyle={styles.containerInput}
        value={values.name}
        onChangeText={async (data: string) => await setFieldValue('name', data)}
        message={errors.name}
      />
      <Input
        label="Apellido*"
        placeholder="Ej: Perez"
        containerStyle={styles.containerInput}
        value={values.lastname}
        onChangeText={async (data: string) =>
          await setFieldValue('lastname', data)
        }
        message={errors.lastname}
      />

      <Input
        label="Correo electrónico*"
        placeholder="Ej: ejemplo@gmail.com"
        containerStyle={styles.containerInput}
        value={values.email}
        autoCapitalize="none"
        onChangeText={async (data: string) =>
          await setFieldValue('email', data)
        }
        message={errors.email}
      />
      <Input
        label="Fecha de nacimiento"
        placeholder="Ej: DD/MM/AAAA"
        containerStyle={styles.containerInput}
        value={values.date}
        onChangeText={async (data: string) => await setFieldValue('date', data)}
      />
      <Input
        label="Teléfono"
        placeholder="Ej: DD/MM/AAAA"
        containerStyle={styles.containerInput}
        value={values.date}
        onChangeText={async (data: string) =>
          await setFieldValue('phone', data)
        }
      />
    </View>
  );
};

export default RegisterStepOne;
