import { useTheme } from 'hooks';
import React from 'react';
import { StyleProp, Text as RNText, TextProps, TextStyle } from 'react-native';
import styleText from './text.style';

export type TextVariants =
  | 'titleBig'
  | 'bodyTitle'
  | 'bodyBold'
  | 'bodyText'
  | 'bodySmall'
  | 'bodySmallBold';

type TextColors =
  | 'primary'
  | 'secundary'
  | 'tertiary'
  | 'white'
  | 'succes'
  | 'danger'
  | 'darkGreen';

export interface ITextProps extends TextProps {
  style?: StyleProp<TextStyle>;
  variant?: TextVariants;
  color?: TextColors;
}

const Text: React.FC<ITextProps> = ({
  children,
  style,
  color = 'primary',
  variant = 'bodyText',
  ...rest
}) => {
  const styles = styleText();
  const theme = useTheme();
  return (
    <RNText
      style={[styles[variant], { color: theme.colors.texts[color] }, style]}
      {...rest}
    >
      {children}
    </RNText>
  );
};

export default Text;
