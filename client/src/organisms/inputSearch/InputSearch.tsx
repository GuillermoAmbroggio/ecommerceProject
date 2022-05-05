import { Icon } from 'atoms';
import { useTheme } from 'hooks';
import { Input } from 'molecules';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import inputSearchStyle from './inputSearch.styles';

interface IInputSearch {
  inputContainerStyle?: StyleProp<ViewStyle>;
  globalContainerStyle?: StyleProp<ViewStyle>;
}

const InputSearch: React.FC<IInputSearch> = ({
  inputContainerStyle,
  globalContainerStyle
}) => {
  const styles = inputSearchStyle();
  const theme = useTheme();
  return (
    <Input
      placeholder="¿Qué estás buscando?"
      containerStyle={[styles.containerStyle, globalContainerStyle]}
      containerInputStyle={[styles.inputContainer, inputContainerStyle]}
      leftIcon={
        <Icon
          name="search"
          color={theme.colors.texts.tertiary}
          style={styles.inputIcon}
        />
      }
    />
  );
};

export default InputSearch;
