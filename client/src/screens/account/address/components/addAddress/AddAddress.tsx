import { Button, CheckBox, Text } from 'atoms';
import { useFormik } from 'formik';
import { Input } from 'molecules';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { UseMutationResult } from 'react-query';
import { Layout } from 'utils';
import { IAddress, IGetAddress } from 'utils/types/AddressTypes';
import AddAddressStyle from './addAddress.styles';
import validationsAddAddress from './validationsAddAddress';

interface IAddAddressProps {
  addAddresss: UseMutationResult<IGetAddress, unknown, IAddress, unknown>;
}

const AddAddress: React.FC<IAddAddressProps> = ({ addAddresss }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [validations, setValidations] = useState(false);
  const styles = AddAddressStyle();
  const { Row } = Layout;

  const { values, setFieldValue, handleSubmit, errors } = useFormik({
    initialValues: {
      street: 'av st james',
      street_number: '30',
      apartment: '7B',
      zip_code: '5000',
      name: '',
      aditional_info: 'Puerta azul',
      city: 'bs as',
      state: 'bs as',
      phone: ''
    },
    onSubmit: () => {
      addAddresss.mutate({
        ...values,
        street_number:
          values.street_number === 'SN' ? undefined : values.street_number
      });
    },
    validationSchema: validationsAddAddress,
    validateOnChange: validations
  });

  return (
    <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Input
          label="Código postal"
          placeholder="Ej: 1648"
          containerStyle={styles.mgBottom16}
          value={values.zip_code}
          autoCapitalize="none"
          keyboardType="number-pad"
          onChangeText={async (data: string) =>
            await setFieldValue('zip_code', data)
          }
          message={errors.zip_code}
        />
        <Input
          label="Provincia"
          placeholder="Ej: Buenos Aires"
          containerStyle={styles.mgBottom16}
          value={values.state}
          onChangeText={async (data: string) =>
            await setFieldValue('state', data)
          }
          message={errors.state}
        />
        <Input
          label="Localidad"
          placeholder="Ej: Tigre"
          containerStyle={styles.mgBottom16}
          value={values.city}
          onChangeText={async (data: string) =>
            await setFieldValue('city', data)
          }
          message={errors.city}
        />
        <Input
          label="Calle"
          placeholder="Ej: Av. Dardo Rocha"
          containerStyle={styles.mgBottom16}
          value={values.street}
          onChangeText={async (data: string) =>
            await setFieldValue('street', data)
          }
          message={errors.street}
        />
        <View style={styles.containerStreetNumber}>
          <Input
            label="Número"
            placeholder="Ej: 816"
            containerStyle={styles.inputStreetNumber}
            disabled={toggleCheckBox}
            value={values.street_number}
            keyboardType="number-pad"
            onChangeText={async (data: string) =>
              await setFieldValue('street_number', data)
            }
            message={errors.street_number}
          />
          <View style={styles.containerCheckbox}>
            <Text variant="bodySmallBold">Sin número</Text>
            <CheckBox
              value={toggleCheckBox}
              onValueChange={(newValue) => {
                if (newValue) {
                  void setFieldValue('street_number', 'SN');
                }
                setToggleCheckBox(newValue);
              }}
            />
          </View>
        </View>

        <Row style={styles.mgBottom16}>
          <Input
            label="Piso/Departamento"
            placeholder="Ej: 1A"
            containerStyle={styles.inputAparment}
            value={values.apartment}
            onChangeText={async (data: string) =>
              await setFieldValue('apartment', data)
            }
          />
          <Input
            label="Nombre/Alias"
            placeholder="Ej: Casa Principal"
            containerStyle={styles.inputName}
            value={values.name}
            onChangeText={async (data: string) =>
              await setFieldValue('name', data)
            }
          />
        </Row>
        <Input
          label="Información adicional"
          placeholder="Ej: Casa de color roja"
          containerStyle={styles.mgBottom16}
          value={values.aditional_info}
          onChangeText={async (data: string) =>
            await setFieldValue('aditional_info', data)
          }
        />
        <Input
          label="Teléfono de contacto"
          placeholder="Ej: 2546526597"
          value={values.phone}
          keyboardType="number-pad"
          onChangeText={async (data: string) =>
            await setFieldValue('phone', data)
          }
          message={errors.phone}
        />
        <Button
          isLoading={addAddresss.isLoading}
          title="Agregar domicilio"
          containerStyle={styles.buttonStyle}
          onPress={() => {
            setValidations(true);
            handleSubmit();
          }}
        />
      </View>
    </ScrollView>
  );
};

export default AddAddress;
