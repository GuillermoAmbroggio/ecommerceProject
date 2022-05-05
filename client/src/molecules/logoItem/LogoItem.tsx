import React from 'react';
import { View, Image, ViewStyle, StyleProp } from 'react-native';
import { Text } from 'atoms';
import LogoItemStyle from './logoItem.styles';

interface ILogoItemProps {
  containerStyle?: StyleProp<ViewStyle>;
}

const LogoItem: React.FC<ILogoItemProps> = ({ containerStyle }) => {
  const styles = LogoItemStyle();
  return (
    <View style={[styles.containerLogo, containerStyle]}>
      <Image source={require('assets/icon.png')} style={styles.imageLogo} />
      <Text variant="bodyTitle">AGROINC</Text>
    </View>
  );
};

export default LogoItem;
