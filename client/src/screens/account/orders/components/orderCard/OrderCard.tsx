import { StackNavigationProp } from '@react-navigation/stack';
import { Card, Icon, Text } from 'atoms';
import { useDate, useTextDelivery } from 'hooks';
import { AccountParamList } from 'navigation/stacks/root/account/accountParamList';
import React from 'react';
import { Image, Pressable, StyleProp, View, ViewStyle } from 'react-native';
import StatusOrder from 'screens/account/myAccount/components/ordersList/components/statusOrder/StatusOrder';
import { IStatusOrders } from 'utils/types/OrderTypes';
import { IProduct } from 'utils/types/ProductTypes';
import OrderCardStyle from './orderCard.styles';

interface IOrderCardProps {
  id: number;
  status: IStatusOrders;
  arriveDate: Date;
  products: IProduct[];
  containerStyle?: StyleProp<ViewStyle>;
  index: number;
  navigation: StackNavigationProp<AccountParamList, 'Orders'>;
}

const OrderCard: React.FC<IOrderCardProps> = ({
  id,
  products,
  status,
  arriveDate,
  containerStyle,
  index,
  navigation
}) => {
  const styles = OrderCardStyle();
  const textDelivery = useTextDelivery(status);
  const { dayNumber, dayString, month } = useDate(arriveDate);
  return (
    <Card containerStyle={[styles.containerCard, containerStyle]}>
      <View style={styles.containerHeaderCard}>
        <View style={styles.containerTitleHeader}>
          <Text style={{}} variant="bodyBold">
            Compra #{id}
          </Text>

          <StatusOrder status={status} />
        </View>
        {status === 'incoming' || status === 'completed' ? (
          <Text variant="bodySmall">{`${textDelivery} ${dayString} ${dayNumber} de ${month}`}</Text>
        ) : null}
      </View>
      <Card.Divider />
      {products.map((e, i) => {
        const image = e.image
          ? { uri: e.image }
          : require('assets/home/notImage.jpg');

        return (
          <View key={index + 1 + i}>
            <View style={styles.contentCard}>
              <View style={styles.containerImage}>
                <Image source={image} style={styles.imageStyle} />
              </View>
              <View style={styles.containerProduct}>
                <Text variant="bodySmallBold">{e.title}</Text>
                <Text variant="bodySmall">{e.description}</Text>
              </View>
            </View>
            {products.length - 1 !== i ? <Card.Divider /> : null}
          </View>
        );
      })}
      <Card.Divider />
      <Pressable
        onPress={() => navigation.navigate('OrderDetail', { orderId: id })}
        style={({ pressed }) => [
          styles.footerCard,
          {
            opacity: pressed ? 0.5 : 1
          }
        ]}
      >
        <Text variant="bodySmallBold">Detalle de la compra</Text>
        <Icon name="chevron-right" size={16} />
      </Pressable>
    </Card>
  );
};

export default OrderCard;
