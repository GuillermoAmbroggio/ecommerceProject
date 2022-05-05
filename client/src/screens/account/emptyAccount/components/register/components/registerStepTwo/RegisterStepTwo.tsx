import { Icon, Text } from 'atoms';
import { useTheme } from 'hooks';
import { Input } from 'molecules';
import React, { useState } from 'react';
import { View } from 'react-native';
import RegisterStyle from '../../register.styles';
import {
  InputsValuesRegister,
  SetInputValuesRegister
} from '../../register.types';

interface IRegisterStepTwoProps {
  values: InputsValuesRegister;
  setFieldValue: SetInputValuesRegister;
  textNewErrors: string;
  newValidations: Array<{
    id: number;
    text: string;
    checked: boolean;
  }>;
}

const RegisterStepTwo: React.FC<IRegisterStepTwoProps> = ({
  values,
  setFieldValue,
  textNewErrors,
  newValidations
}) => {
  const styles = RegisterStyle();
  const theme = useTheme();
  const [visiblyPass, setVisiblyPass] = useState({
    password: false,
    confirmPassword: false
  });

  return (
    <View>
      <Text variant="bodyTitle" style={[styles.textTitle]}>
        Crea tu contraseña
      </Text>
      <Input
        label="Contraseña*"
        placeholder="Ingrese su contraseña"
        onChangeText={async (data: string) => {
          await setFieldValue('password', data);
        }}
        autoCapitalize="none"
        message={textNewErrors}
        containerStyle={styles.containerInput}
        secureTextEntry={!visiblyPass.password}
        value={values.password}
        rightIcon={
          <Icon
            name={visiblyPass.password ? 'eye' : 'eye-slash'}
            onPress={() => {
              setVisiblyPass({
                ...visiblyPass,
                password: !visiblyPass.password
              });
            }}
          />
        }
      />
      <Input
        label="Confirmar contraseña"
        placeholder="Vuelva a ingresar su contraseña"
        onChangeText={async (data: string) =>
          await setFieldValue('confirmPassword', data)
        }
        autoCapitalize="none"
        secureTextEntry={!visiblyPass.confirmPassword}
        value={values.confirmPassword}
        rightIcon={
          <Icon
            name={visiblyPass.confirmPassword ? 'eye' : 'eye-slash'}
            onPress={() => {
              setVisiblyPass({
                ...visiblyPass,
                confirmPassword: !visiblyPass.confirmPassword
              });
            }}
          />
        }
      />
      <Text variant="bodyBold" style={styles.textBodyTitle}>
        La contraseña debe tener:
      </Text>
      {newValidations.map((e, i) => {
        return (
          <View key={i} style={styles.containerList}>
            <Icon
              name="check-circle"
              color={e.checked ? theme.colors.success : undefined}
            />
            <Text style={styles.textList}>{e.text}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default RegisterStepTwo;
