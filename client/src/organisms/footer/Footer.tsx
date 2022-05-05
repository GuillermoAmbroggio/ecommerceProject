import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import FooterStyle from './footer.styles';

interface IFooterProps {
  containerStyle?: StyleProp<ViewStyle>;
}

const Footer: React.FC<IFooterProps> = ({ containerStyle, children }) => {
  const styles = FooterStyle();
  return (
    <View style={[styles.containerFooter, containerStyle]}>{children}</View>
  );
};

export default Footer;
