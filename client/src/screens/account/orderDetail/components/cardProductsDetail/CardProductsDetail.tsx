import { Card, Text } from 'atoms';
import SectionCard from 'organisms/sectionCard/SectionCard';
import React from 'react';
import { View, Image, StyleProp, ViewStyle } from 'react-native';
import { priceFormat } from 'utils/format/Format';
import { IProductOrder } from 'utils/types/ProductTypes';
import OrderDetailStyle from '../../orderDetail.styles';

interface ICardProductsDetailProps {
  products: IProductOrder[];
  style?: StyleProp<ViewStyle>;
}

const CardProductsDetail: React.FC<ICardProductsDetailProps> = ({
  products,
  style
}) => {
  const styles = OrderDetailStyle();

  return (
    <SectionCard
      title={'Detalles del paquete'}
      titleVariants="bodyBold"
      borderRadius={4}
      containerStyle={style}
      contentContainerStyle={{}}
    >
      {products.map((e, i) => {
        const image = e.image
          ? { uri: e.image }
          : require('assets/home/notImage.jpg');

        return (
          <View key={i}>
            <View style={styles.contentGeneral}>
              <View style={styles.containerIcon}>
                <Image source={image} style={styles.paymentImage} />
              </View>
              <View>
                <Text>{e.title}</Text>
                <Text variant="bodySmall">
                  {priceFormat(e.price)} |{' '}
                  {`${e.quantity} ${e.quantity > 1 ? 'Unidades' : 'Unidad'}`}
                </Text>
              </View>
            </View>
            {products.length - 1 !== i ? (
              <Card.Divider style={styles.dividerProducts} />
            ) : null}
          </View>
        );
      })}
    </SectionCard>
  );
};

export default CardProductsDetail;
