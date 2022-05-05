import { Button, Icon, Text } from 'atoms';
import { Input, Toast } from 'molecules';
import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useFormik } from 'formik';
import ValidationsPassword from './validationsPass';
import { useClientStore, useTheme } from 'hooks';
import { usePasswordValidation } from 'hooks/usePasswordValidation';
import ChangePassStyle from './changePass.styles';
import { useEditPassword } from 'particules/serverStore/mutations';

interface IChangePass {
  handleCloseModal: () => void;
}

const ChangePass: React.FC<IChangePass> = ({ handleCloseModal }) => {
  const theme = useTheme();
  const styles = ChangePassStyle();
  const [validateOnChange, setValidateOnChange] = useState('');
  const [openToast, setOpenToast] = useState(false);
  const { mutate, isSuccess, isLoading, isError, error } = useEditPassword();
  const { dispatch } = useClientStore();
  const [visiblyPass, setVisiblyPass] = useState({
    password: false,
    newPassword: false,
    confirmNewPassword: false
  });
  const { values, setFieldValue, handleSubmit, errors } = useFormik({
    initialValues: {
      password: 'asdas',
      newPassword: 'Asd123456',
      confirmNewPassword: 'Asd123456'
    },
    onSubmit: () => {
      mutate(values);
    },
    validationSchema: ValidationsPassword,
    validateOnChange: validateOnChange.length >= 8
  });
  const { textNewErrors, newValidations } = usePasswordValidation(
    values.newPassword,
    values.confirmNewPassword
  );

  const handleCloseToast: () => void = () => {
    setOpenToast(false);
  };

  useEffect(() => {
    if (isSuccess) {
      if (!textNewErrors.length) {
        handleCloseModal();
        dispatch({
          type: 'TOAST',
          payload: {
            open: true,
            config: {
              variant: 'success',
              textToast: 'Contraseña actualizada con éxito'
            }
          }
        });
      }
    }
  }, [isSuccess, textNewErrors, dispatch, handleCloseModal]);

  useEffect(() => {
    if (isError && error && error.response.data) {
      setOpenToast(true);
      /*       dispatch({
        type: 'TOAST',
        payload: {
          open: true,
          config: {
            variant: 'error',
            textToast: error.response.data
          }
        }
      }); */
    }
  }, [isError, dispatch, error]);

  return (
    <>
      <ScrollView bounces={false}>
        <View style={styles.container}>
          <Input
            label="Contraseña actual"
            placeholder="Ingrese su contraseña actual"
            onChangeText={async (data: string) =>
              await setFieldValue('password', data)
            }
            autoCapitalize="none"
            message={errors.password}
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
            label="Nueva contraseña"
            placeholder="Ingrese su nueva contraseña"
            onChangeText={async (data: string) => {
              await setFieldValue('newPassword', data);
              setValidateOnChange(data);
            }}
            autoCapitalize="none"
            message={textNewErrors.length ? textNewErrors : errors.newPassword}
            containerStyle={styles.containerInput}
            secureTextEntry={!visiblyPass.newPassword}
            value={values.newPassword}
            rightIcon={
              <Icon
                name={visiblyPass.newPassword ? 'eye' : 'eye-slash'}
                onPress={() => {
                  setVisiblyPass({
                    ...visiblyPass,
                    newPassword: !visiblyPass.newPassword
                  });
                }}
              />
            }
          />
          <Input
            label="Confirmar nueva contraseña"
            placeholder="Vuelva a ingresar su nueva contraseña"
            onChangeText={async (data: string) =>
              await setFieldValue('confirmNewPassword', data)
            }
            autoCapitalize="none"
            message={errors.confirmNewPassword}
            secureTextEntry={!visiblyPass.confirmNewPassword}
            value={values.confirmNewPassword}
            rightIcon={
              <Icon
                name={visiblyPass.confirmNewPassword ? 'eye' : 'eye-slash'}
                onPress={() => {
                  setVisiblyPass({
                    ...visiblyPass,
                    confirmNewPassword: !visiblyPass.confirmNewPassword
                  });
                }}
              />
            }
          />
          <Text variant="bodyBold" style={styles.textBodyTitle}>
            La nueva contraseña debe tener:
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
          {!textNewErrors.length && values.newPassword.length >= 8 ? (
            <Button
              title="Guardar cambios"
              isLoading={isLoading}
              containerStyle={[styles.buttonStyle]}
              onPress={() => {
                if (!textNewErrors.length) {
                  handleSubmit();
                }
              }}
            />
          ) : null}
        </View>
      </ScrollView>
      <Toast
        open={openToast}
        onClose={handleCloseToast}
        variant="error"
        textToast={
          error ? error.response.data : 'Ocurrio un error, vuelve a intentarlo'
        }
      />
    </>
  );
};

export default ChangePass;
