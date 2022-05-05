// import { StackNavigationProp } from '@react-navigation/stack';
import { Button, Icon, Link, Text } from 'atoms';
import { useFormik } from 'formik';
import { useClientStore, useScreenSize } from 'hooks';
import { Input } from 'molecules';
import LogoItem from 'molecules/logoItem/LogoItem';
// import { AccountParamList } from 'navigation/stacks/root/account/accountParamList';
import { useLogin } from 'particules/serverStore/mutations';
import { useLoginWeb } from 'particules/serverStore/mutations/auth/useLogin';
import React, { useEffect, useState } from 'react';
import { Platform, ScrollView, View } from 'react-native';
import { Layout } from 'utils';
import Register from '../register/Register';
import LoginStyle from './login.styles';
import validationsLogin from './validationsLogin';

interface ILoginProps {
  navigation: any;
}

const Login: React.FC<ILoginProps> = ({ navigation }) => {
  const { Content, Column } = Layout;
  const screen = useScreenSize();
  const styles = LoginStyle();
  const { mutate, isLoading, isSuccess, isError, error } = useLogin();
  const webLogin = useLoginWeb();

  const { dispatch } = useClientStore();
  const [visiblyPass, setVisiblyPass] = useState(false);
  const { values, setFieldValue, handleSubmit, errors } = useFormik({
    initialValues: {
      email: 'guille@gmail.com',
      password: 'Asd12345'
    },
    onSubmit: () => {
      if (Platform.OS === 'web') {
        webLogin.mutate(values);
      } else {
        mutate(values);
      }
    },
    validationSchema: validationsLogin,
    validateOnChange: true
  });

  /**
   * Si presiona crear cuenta, porque no tiene cuenta:
   *
   * -web: abre el modal.
   *
   * -app: navega al screen registro.
   */
  const handlePressRegister = () => {
    if (screen === 'small') {
      navigation.navigate('Register');
    } else {
      dispatch({
        type: 'ALERT',
        payload: {
          config: { permanent: true, variant: undefined },
          open: true,
          content: (
            <View style={{ width: 600 }}>
              <Register navigation={navigation} />
            </View>
          )
        }
      });
    }
  };

  /**
   * Cuando el usuario inicia sesion exitosamente
   */
  useEffect(() => {
    if (isSuccess || webLogin.isSuccess) {
      if (screen === 'small') {
        navigation.setOptions({ header: () => null });
      }
      dispatch({
        type: 'ALERT',
        payload: {
          open: true,
          config: {
            type: 'success',
            textMesagge: '¡Sesión iniciada con éxito!'
          }
        }
      });
      if (screen === 'small') {
        navigation.navigate('Account');
      }
    }
  }, [isSuccess, dispatch, navigation, webLogin.isSuccess, screen]);

  /**
   * Maneja los errores devuelto por el api
   */
  useEffect(() => {
    if (
      (isError && error && error.response.data) ||
      (webLogin.isError && webLogin.error)
    ) {
      dispatch({
        type: 'TOAST',
        payload: {
          open: true,
          config: {
            variant: 'error',
            textToast:
              error?.response?.data ||
              webLogin?.error?.response?.data ||
              'Ocurrio un error vuelve a intentar mas tarde'
          }
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, error, webLogin.isError, webLogin.error]);

  return (
    <>
      <ScrollView
        contentContainerStyle={styles.container}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <Content ph={16} style={styles.contentStyle}>
          <Column>
            <LogoItem containerStyle={styles.marginLogo} />
            <Text variant="bodyTitle" style={styles.textTitle}>
              Iniciar sesión
            </Text>
            <Input
              label="Correo electrónico"
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
              label="Contraseña"
              placeholder="Contraseña"
              containerStyle={styles.containerInput}
              value={values.password}
              autoCapitalize="none"
              onChangeText={async (data: string) =>
                await setFieldValue('password', data)
              }
              message={errors.password}
              secureTextEntry={!visiblyPass}
              rightIcon={
                <Icon
                  name={visiblyPass ? 'eye' : 'eye-slash'}
                  onPress={() => {
                    setVisiblyPass(!visiblyPass);
                  }}
                />
              }
            />
            <Link
              text="¿Olvidaste tu contraseña?"
              variant="bodySmallBold"
              style={styles.linkPosition}
              color="darkGreen"
            />
          </Column>
          <Column style={styles.mgBottom}>
            <Button
              title="Iniciar sesión"
              containerStyle={[styles.buttonStyle]}
              type="primary"
              onPress={() => handleSubmit()}
              isLoading={isLoading}
            />
            <Text style={styles.linkPosition}>
              ¿No tienes cuenta?{'  '}
              <Text
                variant="bodyBold"
                style={styles.textLink}
                onPress={() => handlePressRegister()}
                color="darkGreen"
              >
                Crea una cuenta
              </Text>
            </Text>
          </Column>
        </Content>
      </ScrollView>
    </>
  );
};

export default Login;
