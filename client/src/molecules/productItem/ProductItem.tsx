import { Text } from 'atoms';
import React from 'react';
import { Image, ImageSourcePropType, View } from 'react-native';
import { priceFormat } from 'utils/format/Format';
import ProductItemStyle from './productItem.styles';

interface IproductItemProps {
  title: string;
  description: string;
  price: number;
  image: ImageSourcePropType;
}

const ProductItem: React.FC<IproductItemProps> = ({
  title,
  description,
  price,
  image
}) => {
  const styles = ProductItemStyle();

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={image} style={styles.imageStyle} />
      </View>
      <View style={styles.containerTexts}>
        <Text>{title}</Text>
        <Text variant="bodySmall" style={styles.textDescription}>
          {description}
        </Text>
        <Text>{priceFormat(price)}</Text>
      </View>
    </View>
  );
};

export default ProductItem;
