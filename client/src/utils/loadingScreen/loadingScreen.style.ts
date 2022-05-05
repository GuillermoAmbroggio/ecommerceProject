import { useTheme } from 'hooks';
import { StyleSheet } from 'react-native';
import { CssType } from 'utils/types/types';

const LoadingScreenStyle = (): CssType => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      paddingHorizontal: 16
    }
  });
};

export default LoadingScreenStyle;
