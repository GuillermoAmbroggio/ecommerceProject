import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { Icon, Text } from 'atoms';
import { IShipping, IStore } from 'utils/types/ShippingTypes';
import { useAddressName, useTheme } from 'hooks';
import OrderDetailStyle from '../../orderDetail.styles';
import SectionCard from 'organisms/sectionCard/SectionCard';
interface ICardPaymentDetailProps {
  shipping?: IShipping;
  store?: IStore;
  style?: StyleProp<ViewStyle>;
}

const CardDeliveryDetail: React.FC<ICardPaymentDetailProps> = ({
  shipping,
  store,
  style
}) => {
  const theme = useTheme();
  const styles = OrderDetailStyle();
  const addressName = useAddressName(shipping, store);

  let addressLocation: string = '';
  if (shipping) {
    addressLocation = `${shipping.address.state}, ${shipping.address.city}`;
  }
  if (store) {
    addressLocation = `${store.state}, ${store.city}`;
  }
  return (
    <SectionCard
      title={shipping ? 'Detalles del envío' : 'Retiro en tienda'}
      titleVariants="bodyBold"
      borderRadius={4}
      containerStyle={[style]}
      contentContainerStyle={styles.contentGeneral}
    >
      <View style={styles.containerIcon}>
        <Icon
          name={shipping ? 'truck-moving' : 'store'}
          color={theme.colors.primary}
        />
      </View>
      <View>
        <Text>{addressName} </Text>
        <Text variant="bodySmall">{addressLocation}</Text>
        {store ? <Text variant="bodySmall">{store.atentionTime}</Text> : null}
      </View>
    </SectionCard>
  );
};

export default CardDeliveryDetail;
