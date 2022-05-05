import { useTheme } from 'hooks';
import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  StyleProp,
  View,
  ViewStyle
} from 'react-native';
import Text from '../text/Text';
import buttonStyle from './button.style';

interface IButtonProps extends Omit<PressableProps, 'style'> {
  type?: 'primary' | 'secondary' | 'tertiary';
  size?: 'default' | 'big' | 'small';
  containerStyle?: StyleProp<ViewStyle>;
  title: string;
  isLoading?: boolean;
  stretch?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  containerStyle,
  title,
  type = 'primary',
  size = 'default',
  isLoading,
  disabled,
  stretch,
  ...rest
}) => {
  const style = buttonStyle(type, size);
  const theme = useTheme();
  return (
    <>
      {disabled ? (
        <View style={[style.containerDisabled, containerStyle]}>
          {isLoading ? (
            <ActivityIndicator
              color={
                type === 'primary'
                  ? theme.colors.common.white
                  : theme.colors.primary
              }
              size={20}
            />
          ) : (
            <Text style={[style.text]} variant="bodyBold">
              {title}
            </Text>
          )}
        </View>
      ) : (
        <Pressable
          style={({ pressed }) => [
            style.container,
            containerStyle,
            { opacity: pressed ? 0.6 : 1 },
            stretch ? { alignSelf: 'stretch', alignItems: 'center' } : {}
          ]}
          {...rest}
        >
          {isLoading ? (
            <ActivityIndicator
              color={
                type === 'primary'
                  ? theme.colors.common.white
                  : theme.colors.primary
              }
              size={20}
            />
          ) : (
            <Text style={[style.text]} variant="bodyBold">
              {title}
            </Text>
          )}
        </Pressable>
      )}
    </>
  );
};

export default Button;
