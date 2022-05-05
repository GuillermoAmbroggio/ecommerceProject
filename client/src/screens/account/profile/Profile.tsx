import { Button, Icon, Link } from 'atoms';
import { Input, Modal, Toast } from 'molecules';
import React, { useEffect, useMemo, useState } from 'react';
import { ScrollView, View } from 'react-native';
import ProfileStyle from './profile.styles';
import { useFormik } from 'formik';
import ValidationsProfile from './validationsProfile';
import ChangePass from './components/changePass/ChangePass';
import { useClientStore } from 'hooks';
import { useEditUser } from 'particules/serverStore/mutations';

const Profile: React.FC = () => {
  const styles = ProfileStyle();
  const [openToast, setOpenToast] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isChange, setIsChange] = useState(false);
  const { authentication, dispatch } = useClientStore();
  const { mutate, isLoading, isSuccess } = useEditUser();
  /*   const originValues = {
    name: authentication.user?.name ?? '',
    lastname: authentication.user?.lastname ?? '',
    email: authentication.user?.email ?? '',
    date: authentication.user?.birthdate ?? ''
  }; */

  const originValues = useMemo(() => {
    return {
      name: authentication.user?.name ?? '',
      lastname: authentication.user?.lastname ?? '',
      email: authentication.user?.email ?? '',
      date: authentication.user?.birthdate ?? ''
    };
  }, [authentication]);

  const { values, setFieldValue, handleSubmit, errors } = useFormik({
    initialValues: originValues,
    onSubmit: () => {
      mutate(values);
    },
    validationSchema: ValidationsProfile,
    validateOnChange: true
  });

  useEffect(() => {
    if (
      values.name !== originValues.name ||
      values.lastname !== originValues.lastname ||
      values.email !== originValues.email ||
      values.date !== originValues.date
    ) {
      setIsChange(true);
    } else {
      setIsChange(false);
    }
  }, [values, originValues]);

  useEffect(() => {
    if (isSuccess) {
      dispatch({
        type: 'TOAST',
        payload: {
          open: true,
          config: {
            variant: 'success',
            textToast: 'Datos actualizados con éxito'
          }
        }
      });
    }
  }, [isSuccess, dispatch]);

  const handleClose: () => void = () => {
    setOpenToast(false);
  };
  const handleCloseModal: () => void = () => {
    setModalVisible(false);
  };
  return (
    <>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Icon name="user-circle" size={100} />
          <Link
            text="Cambiar contraseña"
            onPress={() => setModalVisible(true)}
            variant="bodyBold"
            style={styles.changePass}
          />
          <Input
            label="Nombre"
            placeholder="Ej: Juan"
            containerStyle={styles.containerInput}
            value={values.name}
            onChangeText={async (data: string) =>
              await setFieldValue('name', data)
            }
            message={errors.name}
          />
          <Input
            label="Apellido"
            placeholder="Ej: Perez"
            containerStyle={styles.containerInput}
            value={values.lastname}
            onChangeText={async (data: string) =>
              await setFieldValue('lastname', data)
            }
            message={errors.lastname}
          />

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
            label="Fecha de nacimiento"
            placeholder="Ej: DD/MM/AAAA"
            containerStyle={styles.containerInput}
            value={values.date}
            onChangeText={async (data: string) =>
              await setFieldValue('date', data)
            }
          />

          {isChange ? (
            <Button
              title="Guardar cambios"
              onPress={() => handleSubmit()}
              containerStyle={[styles.buttonStyle, styles.pdVertical]}
              isLoading={isLoading}
            />
          ) : null}
        </View>
      </ScrollView>
      <Toast
        open={openToast}
        onClose={handleClose}
        variant="success"
        textToast="Datos actualizados con éxito"
      />
      <Modal
        open={modalVisible}
        onClose={handleCloseModal}
        textHeader="Cambiar contraseña"
      >
        <ChangePass handleCloseModal={handleCloseModal} />
      </Modal>
    </>
  );
};

export default Profile;
