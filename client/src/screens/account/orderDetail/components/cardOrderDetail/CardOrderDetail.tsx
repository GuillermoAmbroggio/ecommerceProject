import { Card, Text } from 'atoms';
import { useDate, useTextDelivery } from 'hooks';
import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import StatusOrder from 'screens/account/myAccount/components/ordersList/components/statusOrder/StatusOrder';
import { priceFormat } from 'utils/format/Format';
import { IOrderDetail } from 'utils/types/OrderTypes';
import CardOrderDetailStyle from './cardOrderDetail.styles';

interface ICardOrderDetailProps {
  dataOrder: IOrderDetail;
  style?: StyleProp<ViewStyle>;
}

const CardOrderDetail: React.FC<ICardOrderDetailProps> = ({
  dataOrder,
  style
}) => {
  const { dayNumber, dayString, month } = useDate(
    dataOrder.shipping?.estimatedDelivery ?? dataOrder.dateFinishOrder
  );
  const textDelivery = useTextDelivery(dataOrder.status);
  const styles = CardOrderDetailStyle();
  return (
    <Card containerStyle={[styles.container, style]}>
      <View style={styles.containerHeader}>
        <View style={styles.titleHeader}>
          <Text variant="bodyBold">Compra #{dataOrder.id}</Text>

          <StatusOrder status={dataOrder.status} />
        </View>

        {dataOrder.status === 'incoming' || dataOrder.status === 'completed' ? (
          <Text variant="bodySmall">
            {dataOrder.status === 'incoming'
              ? `${textDelivery} ${dayString} `
              : null}
            {`${dayNumber} de ${month}`}
          </Text>
        ) : null}
      </View>
      <Card.Divider />
      <View style={styles.pd16}>
        <View style={styles.containerTextContent}>
          <Text>
            {dataOrder.totalProducts > 1
              ? `Productos (${dataOrder.totalProducts})`
              : 'Producto'}
          </Text>
          <Text>{priceFormat(dataOrder.subTotal)}</Text>
        </View>
        {dataOrder.shipping?.price ? (
          <View style={styles.deliveryText}>
            <Text>Envío</Text>
            <Text>{priceFormat(dataOrder.shipping.price)}</Text>
          </View>
        ) : null}
      </View>
      <Card.Divider />
      <View style={styles.containerFooter}>
        <Text variant="bodyBold">Total</Text>
        <Text variant="bodyBold">{priceFormat(dataOrder.total)}</Text>
      </View>
    </Card>
  );
};

export default CardOrderDetail;
