import { useTheme } from 'hooks';
import React from 'react';
import { Pressable } from 'react-native';
import Icon from '../icon/Icon';

interface ICheckBoxProps {
  size?: number;
  value?: boolean;
  onValueChange?: (newValue: boolean) => void;
}

const CheckBox: React.FC<ICheckBoxProps> = ({
  size,
  value = false,
  onValueChange
}) => {
  const theme = useTheme();
  return (
    <Pressable
      onPress={() => (onValueChange ? onValueChange(!value) : null)}
      style={{
        width: size ?? 20,
        height: size ?? 20,
        borderWidth: 1,
        borderColor: value ? theme.colors.success : theme.colors.texts.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        backgroundColor: value ? theme.colors.success : undefined
      }}
    >
      {value ? (
        <Icon
          name="check-square"
          size={size ?? 20}
          color={theme.colors.common.white}
        />
      ) : null}
    </Pressable>
  );
};

export default CheckBox;
