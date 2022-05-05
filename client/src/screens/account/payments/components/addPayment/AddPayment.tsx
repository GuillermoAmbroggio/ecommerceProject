import { Button, Text } from 'atoms';
import { useFormik } from 'formik';
import { useScreenSize } from 'hooks';
import { Input, Picker, Toast } from 'molecules';
import { useAddPayment } from 'particules/serverStore/mutations';
import { useIdentifications } from 'particules/serverStore/queries';
import { getTypeCard } from 'particules/serverStore/request';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { Layout } from 'utils';
import { IAddPayment } from 'utils/types/PaymentTypes';
import AddPaymentsStyle from './addPayment.styles';
import validationsAddPayment from './validationsAddPayment';

interface IAddPayments {
  closeAddPayment: () => void;
}

const AddPayments: React.FC<IAddPayments> = ({ closeAddPayment }) => {
  const [validations, setValidations] = useState(false);
  const [toast, setToast] = useState<{
    open: boolean;
    textToast?: string;
  }>({ open: false });
  const isBig = useScreenSize() === 'big';
  const mpIdentifications = useIdentifications();
  const addPayment = useAddPayment();
  const { Row } = Layout;

  const styles = AddPaymentsStyle();
  const { values, setFieldValue, handleSubmit, errors } = useFormik({
    initialValues: {
      card_number: '4509953566233704',
      type_identification: '',
      number_identification: '38048077',
      name: 'guille',
      month_date: '11',
      year_date: '2025',
      cvv: '123'
    },
    onSubmit: () => {
      const dataPost: IAddPayment = {
        card_number: values.card_number,
        cardholder: {
          name: values.name,
          identification: {
            type: values.type_identification,
            number: values.number_identification
          }
        },
        expiration_month: Number(values.month_date),
        expiration_year: Number(values.year_date),
        security_code: values.cvv
      };
      addPayment.mutate(dataPost);
    },
    validationSchema: validationsAddPayment,
    validateOnChange: validations
  });

  const typeCard = getTypeCard(values.card_number);

  const handleCloseToast: () => void = () => {
    setToast({ open: false });
  };

  /**
   * Maneja la devolucion de api
   */
  useEffect(() => {
    if (addPayment.isSuccess) {
      closeAddPayment();
    }
    if (addPayment.error) {
      setToast({
        open: true,
        textToast: 'No se pudo agregar la tarjeta'
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addPayment.error, addPayment.isSuccess]);

  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: isBig ? 0 : 1 }}
    >
      <View
        style={[styles.container, { justifyContent: 'space-between', flex: 1 }]}
      >
        <View>
          <View>
            {typeCard.data ? (
              <View style={{ alignItems: 'center' }}>
                <Image
                  source={{
                    uri: typeCard.data.results[0].thumbnail
                  }}
                  style={{ width: 128, height: 96, resizeMode: 'contain' }}
                />
                <Text variant="bodyBold">{typeCard.data.results[0].name}</Text>
              </View>
            ) : null}
          </View>
          <Input
            label="Número de la tarjeta"
            placeholder="**** **** **** ****"
            containerStyle={styles.mgBottom16}
            value={values.card_number}
            autoCapitalize="none"
            keyboardType="number-pad"
            onChangeText={async (data: string) =>
              await setFieldValue('card_number', data)
            }
            message={errors.card_number}
          />
          <Input
            label="Nombre del propietario"
            placeholder="Mi nombre..."
            containerStyle={styles.mgBottom16}
            value={values.name}
            onChangeText={async (data: string) =>
              await setFieldValue('name', data)
            }
            message={errors.name}
          />
          <Row style={[styles.mgBottom16, { zIndex: 1 }]}>
            <Picker
              label="Identificación"
              cancelOption="Cancelar"
              options={mpIdentifications?.data?.map((e) => {
                return { label: e.name, key: e.id };
              })}
              placeHolder="Tipo"
              onChangeValue={async (value) =>
                await setFieldValue('type_identification', value.key)
              }
              message={errors.type_identification}
              containerStyle={styles.identificationTypeStyle}
            />
            <Input
              label="Número de identificación"
              containerStyle={[{ flex: 1 }]}
              value={values.number_identification}
              autoCapitalize="none"
              keyboardType="number-pad"
              onChangeText={async (data: string) =>
                await setFieldValue('number_identification', data)
              }
              message={errors.number_identification}
            />
          </Row>
          <Row style={styles.mgBottom16}>
            <Input
              label="Mes de expiración"
              placeholder="MM"
              containerStyle={[styles.expirationInput, { marginRight: 16 }]}
              autoCapitalize="none"
              keyboardType="number-pad"
              value={values.month_date}
              onChangeText={async (data: string) =>
                await setFieldValue('month_date', data)
              }
              message={errors.month_date}
            />
            <Input
              label="Año de expiración"
              placeholder="AAAA"
              containerStyle={styles.expirationInput}
              autoCapitalize="none"
              keyboardType="number-pad"
              value={values.year_date}
              onChangeText={async (data: string) =>
                await setFieldValue('year_date', data)
              }
              message={errors.year_date}
            />
          </Row>

          <Input
            label="Cvv"
            placeholder="***"
            containerStyle={styles.mgBottom16}
            value={values.cvv}
            autoCapitalize="none"
            keyboardType="number-pad"
            onChangeText={async (data: string) =>
              await setFieldValue('cvv', data)
            }
            message={errors.cvv}
          />
        </View>
        <Button
          isLoading={addPayment.isLoading}
          title="Agregar tarjeta"
          containerStyle={styles.buttonStyle}
          onPress={() => {
            setValidations(true);
            handleSubmit();
          }}
        />
      </View>
      {/* --------TOAST-------- */}
      <Toast
        open={toast.open}
        onClose={handleCloseToast}
        variant="error"
        textToast={toast.textToast}
      />
    </ScrollView>
  );
};

export default AddPayments;
