import { Button, Text } from 'atoms';
import { useFormik } from 'formik';
import { useClientStore, useScreenSize } from 'hooks';
import { usePasswordValidation } from 'hooks/usePasswordValidation';
import { LogoItem } from 'molecules';
import GoBack from 'navigation/headers/goBack/GoBack';
import { useRegister } from 'particules/serverStore/mutations';
import { useRegisterWeb } from 'particules/serverStore/mutations/auth/useRegister';
import React, { useEffect, useState } from 'react';
import { Platform, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Layout } from 'utils';
import Login from '../login/Login';
import RegisterStepOne from './components/registerStepOne/RegisterStepOne';
import RegisterStepTwo from './components/registerStepTwo/RegisterStepTwo';
import RegisterStyle from './register.styles';
import validationsRegister from './validationsRegister';

interface IRegisterProps {
  navigation: any;
}

const Register: React.FC<IRegisterProps> = ({ navigation }) => {
  const { dispatch } = useClientStore();
  const { Content } = Layout;
  const styles = RegisterStyle();
  const [step, setStep] = useState<'one' | 'two'>('one');
  const [validateOnChange, setValidateOnChange] = useState(false);
  const { mutate, error, isLoading, isSuccess, isError } = useRegister();
  const webRegister = useRegisterWeb();
  const screen = useScreenSize();

  const { values, setFieldValue, handleSubmit, errors } = useFormik({
    initialValues: {
      name: 'guille',
      lastname: 'ambroggio',
      email: 'guille@gmail.com',
      date: '',
      phone: '',
      password: 'Asd12345',
      confirmPassword: 'Asd12345'
    },
    onSubmit: () => {
      setStep('two');
    },
    validationSchema: validationsRegister,
    validateOnChange: validateOnChange
  });

  const { textNewErrors, newValidations } = usePasswordValidation(
    values.password,
    values.confirmPassword
  );

  /**
   * Si presiona iniciar sesion, porque ya tiene cuenta:
   *
   * -web: abre el modal.
   *
   * -app: navega al screen iniciar sesion.
   */
  const handlePressLogin = () => {
    if (screen === 'small') {
      navigation.navigate('Login');
    } else {
      dispatch({
        type: 'ALERT',
        payload: {
          config: { permanent: true, variant: undefined },
          open: true,
          content: <Login navigation={navigation} />
        }
      });
    }
  };

  /**
   * Cuando el usuario crea cuenta exitosamente
   */
  useEffect(() => {
    if (isSuccess || webRegister.isSuccess) {
      if (!textNewErrors.length) {
        dispatch({
          type: 'ALERT',
          payload: {
            open: true,
            config: {
              type: 'success',
              textMesagge: '¡Cuenta creada con éxito!'
            }
          }
        });
        if (screen === 'small') {
          navigation.navigate('Account');
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, webRegister.isSuccess]);

  /**
   * Maneja los errores devuelto por el api
   */
  useEffect(() => {
    if (
      (isError && error && error.response?.data?.email) ||
      (webRegister.isError &&
        webRegister.error &&
        webRegister.error.response?.data?.email)
    ) {
      setStep('one');
      dispatch({
        type: 'TOAST',
        payload: {
          open: true,
          config: {
            variant: 'error',
            textToast:
              error?.response?.data?.email[0] ||
              webRegister?.error?.response?.data?.email[0]
          }
        }
      });
    } else if (error || webRegister.error) {
      dispatch({
        type: 'ALERT',
        payload: {
          open: false
        }
      });
      dispatch({
        type: 'TOAST',
        payload: {
          open: true,
          config: {
            variant: 'error',
            textToast: 'Ocurrio un error, porfavor vuelve a intentar'
          }
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, error, webRegister.isError, webRegister.error]);

  return (
    <>
      {screen === 'small' ? (
        <GoBack
          onPress={() => {
            if (step === 'one') {
              navigation.goBack();
            } else {
              setStep('one');
            }
          }}
        />
      ) : null}
      <ScrollView
        contentContainerStyle={styles.container}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <Content ph={16} style={{ justifyContent: 'space-between' }}>
          <View>
            <LogoItem containerStyle={styles.marginLogo} />
            {step === 'one' ? (
              <RegisterStepOne
                values={values}
                setFieldValue={setFieldValue}
                errors={errors}
              />
            ) : (
              <RegisterStepTwo
                values={values}
                setFieldValue={setFieldValue}
                textNewErrors={textNewErrors}
                newValidations={newValidations}
              />
            )}
          </View>
          <View style={styles.mgBottom}>
            <Button
              title={step === 'one' ? 'Siguiente' : 'Crear cuenta'}
              containerStyle={[styles.buttonStyle]}
              type="primary"
              disabled={step === 'two' && !values.password}
              isLoading={isLoading}
              onPress={() => {
                if (step === 'one') {
                  setValidateOnChange(true);
                  handleSubmit();
                } else {
                  if (Platform.OS === 'web') {
                    webRegister.mutate(values);
                  } else {
                    mutate(values);
                  }
                }
              }}
            />
            <Text style={styles.linkPosition}>
              ¿Ya tienes cuenta?{'  '}
              <Text
                variant="bodyBold"
                style={styles.textLink}
                onPress={() => {
                  handlePressLogin();
                }}
                color="darkGreen"
              >
                Inicia sesión
              </Text>
            </Text>
          </View>
        </Content>
      </ScrollView>
    </>
  );
};

export default Register;
