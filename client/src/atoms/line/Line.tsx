/* eslint-disable react-native/no-inline-styles */
import { useTheme } from 'hooks';
import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

interface ILineProps {
  style?: StyleProp<ViewStyle>;
  color?: string;
  sizeWidth?: number;
}

const Line: React.FC<ILineProps> = ({ style, color, sizeWidth }) => {
  const theme = useTheme();
  return (
    <View
      style={[
        {
          borderBottomWidth: sizeWidth ?? 1,
          width: '100%',
          borderColor: color ?? theme.colors.primary
        },
        style
      ]}
    />
  );
};

export default Line;
