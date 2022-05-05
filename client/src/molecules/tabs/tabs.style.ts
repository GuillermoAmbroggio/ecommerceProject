import { useTheme } from 'hooks';
import { StyleSheet } from 'react-native';
import { CssType } from 'utils/types/types';

const tabsStyle = (): CssType => {
  return StyleSheet.create({
    container: { flexDirection: 'row' }
  });
};

export const TabStyles = (active: boolean, size: number): CssType => {
  const theme = useTheme();

  return StyleSheet.create({
    tab: {
      borderRadius: 50,
      width: size,
      height: size,
      backgroundColor: active ? theme.colors.primary : theme.colors.tertiary,
      marginRight: 8
    }
  });
};

export default tabsStyle;
