import { useTheme } from 'hooks';
import { Dimensions, StyleSheet } from 'react-native';

interface IStyleProps {
  containerPress: {
    zIndex: number;
    position: any;
    top: number;
    left: number;
    bottom: number;
    right: number;
  };
  containerOptions: {
    position: 'absolute' | 'relative';
    display: 'flex' | 'none';
    top: number;
    left: number;
    right: number;
    padding: number;
    borderColor: string;
    borderWidth: number;
    borderRadius: number;
    backgroundColor: string;
    maxHeight: number;
  };
  styleOptions: {
    marginBottom: number;
  };
  container: {
    position: 'relative';
  };
  textLabel: {
    marginBottom: number;
  };
}

const PickerStyle = (showOptions: boolean, label?: string): IStyleProps => {
  const height = Dimensions.get('window').height;
  const theme = useTheme();

  return StyleSheet.create({
    container: { position: 'relative', zIndex: 1 },
    containerPress: {
      zIndex: 1,
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },
    containerOptions: {
      position: showOptions ? 'absolute' : 'relative',
      display: showOptions ? 'flex' : 'none',
      top: label ? 66 : 46,
      left: 0,
      right: 0,
      padding: 16,
      borderColor: theme.colors.primary,
      borderWidth: showOptions ? 1 : 0,
      borderRadius: 8,
      backgroundColor: theme.colors.common.white,
      maxHeight: height * 0.5
    },
    styleOptions: { marginBottom: 8 },
    textLabel: {
      marginBottom: 4
    }
  });
};

export default PickerStyle;
