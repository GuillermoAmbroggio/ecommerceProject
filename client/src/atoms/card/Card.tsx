import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import cardStyle from './card.styles';

interface ICardProps {
  containerStyle?: StyleProp<ViewStyle>;
}
interface ICardDivider {
  style?: StyleProp<ViewStyle>;
}

interface CardSubComponents {
  Divider: React.FC<ICardDivider>;
}

const Card: React.FC<ICardProps> & CardSubComponents = ({
  containerStyle,
  children
}) => {
  const styles = cardStyle();
  return <View style={[styles.container, containerStyle]}>{children}</View>;
};

const CardDivider: React.FC<ICardDivider> = ({ children, style }) => {
  const styles = cardStyle();

  return <View style={[styles.dividerStyle, style]} />;
};

Card.Divider = CardDivider;
export default Card;
