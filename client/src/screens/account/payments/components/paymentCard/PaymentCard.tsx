import { Button, Text } from 'atoms';
import { useClientStore } from 'hooks';
import { CardWithOption } from 'molecules';
import { OptionMenuCard } from 'molecules/cardWithOption/CardWithOption';
import React from 'react';
import { View, Image } from 'react-native';
import { Layout } from 'utils';
import { ICreditCard } from 'utils/types/PaymentTypes';
import PaymentCardStyle from './paymentCard.styles';

interface IPaymentCardProps {
  payment: ICreditCard;
  onPressConfirmDelete: (card_id: string) => void;
}

const PaymentCard: React.FC<IPaymentCardProps> = ({
  payment,
  onPressConfirmDelete
}) => {
  const { dispatch } = useClientStore();
  const { Row } = Layout;
  const styles = PaymentCardStyle();

  const contentAlertDelete = () => (
    <View style={styles.alertContainer}>
      <Text variant="bodyTitle">Estás por eliminar una tarjeta</Text>
      <Text
        style={styles.textAlert}
      >{`Tarjeta terminada en ${payment.last_four_digits}`}</Text>
      <Row style={styles.buttonsAlert}>
        <Button
          title="Cancelar"
          onPress={() => {
            dispatch({ type: 'ALERT', payload: { open: false } });
          }}
        />
        <Button
          type="tertiary"
          title="Eliminar"
          onPress={() => {
            onPressConfirmDelete(payment.id);
          }}
        />
      </Row>
    </View>
  );

  const menuOptions: OptionMenuCard[] = [
    {
      label: 'Eliminar',
      onPress: () => {
        dispatch({
          type: 'ALERT',
          payload: {
            config: { permanent: true, variant: undefined },
            open: true,
            content: contentAlertDelete()
          }
        });
      }
    }
  ];

  return (
    <CardWithOption optionsMenu={menuOptions}>
      <View style={styles.contentGeneral}>
        <View style={styles.containerIcon}>
          <Image
            source={{
              uri: payment.payment_method.thumbnail
            }}
            style={styles.paymentImage}
          />
        </View>
        <View>
          <Text>Terminada en {' ' + payment.last_four_digits}</Text>
          <Text variant="bodySmall">{payment.issuer.name}</Text>
          <Text variant="bodySmall">{`Vencimiento ${payment.expiration_month}/${payment.expiration_year}`}</Text>
        </View>
      </View>
    </CardWithOption>
  );
};

export default PaymentCard;
