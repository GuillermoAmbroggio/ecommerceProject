import SectionCard from 'organisms/sectionCard/SectionCard';
import React from 'react';
import { View, Image, StyleProp, ViewStyle } from 'react-native';
import { Text } from 'atoms';
import { IPayment } from 'utils/types/PaymentTypes';
import { usePaymentIcon, usePaymentName } from 'hooks';
import { priceFormat } from 'utils/format/Format';
import OrderDetailStyle from '../../orderDetail.styles';
interface ICardPaymentDetailProps {
  payment: IPayment;
  total: number;
  style?: StyleProp<ViewStyle>;
}

const CardPaymentDetail: React.FC<ICardPaymentDetailProps> = ({
  payment,
  total,
  style
}) => {
  const { source } = usePaymentIcon(payment.option, payment.card?.cardName);
  const styles = OrderDetailStyle();
  const paymentName = usePaymentName(payment);

  return (
    <SectionCard
      title="Detalles del pago"
      titleVariants="bodyBold"
      borderRadius={4}
      containerStyle={[style]}
      contentContainerStyle={styles.contentGeneral}
    >
      <View style={styles.containerIcon}>
        <Image source={source} style={styles.paymentImage} />
      </View>
      <View>
        <Text>
          <Text variant="bodyBold">{priceFormat(total)}</Text>{' '}
          {payment.card?.fess ? (
            <Text variant="bodySmall">
              ({payment.card?.feesAmount}x {priceFormat(payment.card.fess)})
            </Text>
          ) : null}
        </Text>
        <Text variant="bodySmall">{paymentName}</Text>
        <Text
          color={payment.status === 'paid' ? 'succes' : 'danger'}
          variant="bodySmall"
        >
          {payment.status === 'paid' ? 'Pago aprobado' : 'No pagado'}
        </Text>
      </View>
    </SectionCard>
  );
};

export default CardPaymentDetail;
