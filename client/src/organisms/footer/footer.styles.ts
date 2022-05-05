import { useScreenSize, useTheme } from 'hooks';
import { StyleSheet } from 'react-native';

interface IStyleProps {
  containerFooter: {};
}

const FooterStyle = (): IStyleProps => {
  const theme = useTheme();
  const isBig = useScreenSize() === 'big';
  return StyleSheet.create({
    containerFooter: {
      paddingBottom: 16,
      paddingTop: 16,
      paddingHorizontal: 16,
      borderTopWidth: isBig ? 0 : 1,
      borderTopColor: theme.colors.secondary
    }
  });
};

export default FooterStyle;
