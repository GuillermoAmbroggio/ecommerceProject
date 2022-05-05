import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { TextProps } from 'react-native';
import { useTheme } from 'hooks';

interface IIconProps extends TextProps {
  name: keyof typeof FontAwesome5.glyphMap;
  color?: string;
  size?: number;
}

const Icon: React.FC<IIconProps> = ({ name, color, size = 20, ...rest }) => {
  const theme = useTheme();
  const colorIcon = color ?? theme.colors.texts.primary;
  return <FontAwesome5 name={name} size={size} color={colorIcon} {...rest} />;
};

export default Icon;
