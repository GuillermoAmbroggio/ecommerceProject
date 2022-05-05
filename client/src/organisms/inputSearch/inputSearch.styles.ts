import { StyleSheet } from 'react-native';
import { CssType } from 'utils/types/types';

const InputSearchStyle = (): CssType => {
  return StyleSheet.create({
    containerStyle: { marginRight: 16, flex: 1 },
    inputContainer: { marginRight: 16, borderRadius: 16 },
    inputIcon: {
      marginRight: 16
    }
  });
};

export default InputSearchStyle;
