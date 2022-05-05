import { ITextProps } from 'atoms/text/Text';
import React from 'react';
import Text from '../text/Text';
import {
  GestureResponderEvent,
  Pressable,
  StyleProp,
  TextStyle,
  ViewStyle
} from 'react-native';

interface ILinkProps extends ITextProps {
  text: string;
  presseableStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  underline?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}

const Link: React.FC<ILinkProps> = ({
  text,
  textStyle,
  presseableStyle,
  underline = true,
  onPress,
  ...rest
}) => {
  return (
    <Pressable
      style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }, presseableStyle]}
      onPress={onPress}
    >
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={[
          { textDecorationLine: underline ? 'underline' : 'none' },
          textStyle
        ]}
        {...rest}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default Link;
