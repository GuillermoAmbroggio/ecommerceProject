import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import StatusOrderStyle from './statusOrder.styles';
import { Text } from 'atoms';
import { IStatusOrders } from 'utils/types/OrderTypes';

interface IStatusOrderProps {
  status: IStatusOrders;
  containerStyle?: StyleProp<ViewStyle>;
}

const StatusOrder: React.FC<IStatusOrderProps> = ({
  status,
  containerStyle
}) => {
  const styles = StatusOrderStyle(status);
  const text = {
    process: 'En proceso',
    completed: 'Entregada',
    canceled: 'Cancelada',
    incoming: 'En camino',
    ready: 'Lista para retirar'
  };
  return (
    <View style={[styles.container, containerStyle]}>
      <Text variant="bodySmallBold" style={styles.textStyle}>
        {text[status]}
      </Text>
    </View>
  );
};

export default StatusOrder;
