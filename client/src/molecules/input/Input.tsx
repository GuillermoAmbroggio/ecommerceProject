import { useTheme } from 'hooks';
import React, { useState } from 'react';
import {
  ColorValue,
  StyleProp,
  TextInputProps,
  View,
  ViewStyle
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import InputStyle from './input.styles';
import { Text } from 'atoms';
interface IInputProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  containerInputStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  placeholderColor?: ColorValue;
  rightIcon?: JSX.Element;
  leftIcon?: JSX.Element;
  label?: string;
  message?: string;
  messageType?: 'error' | 'succes';
  disabled?: boolean;
}

const Input: React.FC<IInputProps> = ({
  containerStyle,
  containerInputStyle,
  placeholderColor,
  inputStyle,
  rightIcon,
  leftIcon,
  label,
  message,
  disabled,
  messageType = 'error',
  ...rest
}) => {
  const theme = useTheme();
  const [isFocus, setIsFocus] = useState(false);
  const handleFocus = (): void => setIsFocus(true);
  const handleBlur = (): void => setIsFocus(false);
  const styles = InputStyle(isFocus, disabled);
  return (
    <View style={[styles.absoluteContainer, containerStyle]}>
      {label ? (
        <Text variant="bodySmallBold" style={styles.textLabel}>
          {label}
        </Text>
      ) : null}
      <View style={[styles.container, containerInputStyle]}>
        {leftIcon ?? null}
        <TextInput
          style={[styles.containerInput, inputStyle]}
          placeholderTextColor={placeholderColor ?? theme.colors.gray.gray30}
          onFocus={() => handleFocus()}
          onBlur={() => handleBlur()}
          editable={!disabled}
          {...rest}
        />
        {rightIcon ?? null}
      </View>
      {message ? (
        <Text
          variant="bodySmall"
          color={messageType === 'error' ? 'danger' : 'succes'}
        >
          {message}
        </Text>
      ) : null}
    </View>
  );
};

export default Input;
