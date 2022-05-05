import { StackNavigationProp } from '@react-navigation/stack';
import { Card, Icon, Text } from 'atoms';
import { AccountParamList } from 'navigation/stacks/root/account/accountParamList';
import SectionCard from 'organisms/sectionCard/SectionCard';
import React from 'react';
import { Pressable, View } from 'react-native';
import { IStatusOrders } from 'utils/types/OrderTypes';
import StatusOrder from './components/statusOrder/StatusOrder';
import OrderListStyle from './orderList.styles';

export type DataOrders = Array<{ id: number; status: IStatusOrders }>;

interface IOrderListProps {
  navigation: StackNavigationProp<AccountParamList, 'Account'>;
}

const OrderList: React.FC<IOrderListProps> = ({ navigation }) => {
  const styles = OrderListStyle();
  const dataOrders: DataOrders = [
    { id: 1, status: 'process' },
    { id: 2, status: 'canceled' },
    { id: 3, status: 'completed' },
    { id: 4, status: 'incoming' }
  ];
  return (
    <SectionCard
      title="Mis compras"
      footer={'Ver mas'}
      borderRadius={10}
      footerOnPress={() => navigation.navigate('Orders')}
    >
      {dataOrders.map((e, i) => {
        return (
          <View key={i}>
            <Pressable
              style={({ pressed }) => [
                styles.container,
                { opacity: pressed ? 0.6 : 1 }
              ]}
              onPress={() =>
                navigation.navigate('OrderDetail', { orderId: e.id })
              }
            >
              <View style={styles.containerItems}>
                <Icon name="print" />
                <Text style={styles.textStyle} variant="bodySmallBold">
                  Compra #{e.id}
                </Text>
                <StatusOrder status={e.status} />
              </View>
              <Icon name="chevron-right" size={16} />
            </Pressable>
            {i !== dataOrders.length - 1 ? (
              <Card.Divider style={styles.dividerStyle} />
            ) : null}
          </View>
        );
      })}
    </SectionCard>
  );
};

export default OrderList;
