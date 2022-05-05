import { useTheme } from 'hooks';
import { StyleSheet } from 'react-native';

interface IStyleProps {
  container: {};
}

const FooterWebStyle = (): IStyleProps => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.header.background,
      padding: 60,
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    }
  });
};

export default FooterWebStyle;
