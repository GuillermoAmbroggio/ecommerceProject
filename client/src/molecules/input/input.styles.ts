import { useScreenSize, useTheme } from 'hooks';
import { StyleSheet } from 'react-native';
import { CssType } from 'utils/types/types';

const InputStyle = (isFocus: boolean, disabled?: boolean): CssType => {
  const screen = useScreenSize();
  const theme = useTheme();
  const inputBorder = screen === 'big' ? { outlineWidth: 0 } : {};

  return StyleSheet.create({
    absoluteContainer: {
      width: '100%',
      minHeight: 44,
      opacity: disabled ? 0.3 : 1
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
      borderRadius: 4,
      paddingHorizontal: 16,
      borderColor: isFocus ? theme.colors.primary : theme.colors.texts.tertiary,
      borderWidth: isFocus ? 2 : 1,
      width: '100%',
      minHeight: 44
    },
    containerInput: {
      ...inputBorder,
      height: 44,
      // outlineWidth: 0, no reconoce android
      fontFamily: 'montserrat-regular',
      fontSize: 16,
      lineHeight: 17,
      width: '100%'
    },
    textLabel: {
      marginBottom: 4
    }
  });
};

export default InputStyle;
