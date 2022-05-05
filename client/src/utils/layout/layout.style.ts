import { useTheme } from 'hooks';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CssType } from 'utils/types/types';

const LayoutStyle = (): CssType => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      flex: 1,
      paddingBottom: insets.bottom
      // marginTop: insets.top
    },
    row: {
      flexDirection: 'row'
    },
    content: {
      backgroundColor: theme.colors.background,
      flex: 1,
      paddingBottom: insets.bottom
    }
  });
};

export default LayoutStyle;
