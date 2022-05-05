import { useTheme } from 'hooks';
import { StyleSheet } from 'react-native';

interface IStyleProps {
  container: {};
  containerCard: {};
  iconStyle: {};
  linkStyle: {};
}

const HeaderAccountStyle = (): IStyleProps => {
  const theme = useTheme();
  return StyleSheet.create({
    container: { overflow: 'hidden', paddingBottom: 16 },
    containerCard: {
      flexDirection: 'row',
      padding: 16,
      alignItems: 'center',
      backgroundColor: theme.colors.header.background
    },
    iconStyle: { marginRight: 16 },
    linkStyle: { marginTop: 8 }
  });
};

export default HeaderAccountStyle;
