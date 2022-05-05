import React from 'react';
import { Card, Text } from 'atoms';
import categoryCardStyle from './categoryCards.styles';
import {
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
  View,
  ImageBackground
} from 'react-native';
interface ICategoryCardsProps {
  nameCategory: string;
  containerStyle?: StyleProp<ViewStyle>;
  image: ImageSourcePropType;
}

const CategoryCards: React.FC<ICategoryCardsProps> = ({
  nameCategory,
  containerStyle,
  image
}) => {
  const styles = categoryCardStyle();
  return (
    <Card containerStyle={[styles.container, containerStyle]}>
      <ImageBackground
        source={image}
        style={styles.imageBackground}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.separator} />
        <View style={[styles.buttomStyle]}>
          <Text
            variant="bodySmallBold"
            color="white"
            style={[styles.textStyle]}
          >
            {nameCategory}
          </Text>
        </View>
      </ImageBackground>
    </Card>
  );
};

export default CategoryCards;
