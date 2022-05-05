import { useTheme } from 'hooks';
import { StyleSheet } from 'react-native';

interface IStyleProps {
  containerIcons: {};
  lineStyle: {};
  firstColumn: {
    marginRight: number;
  };
  containerRow: { alignItems: 'center' };
  textStyle: { marginLeft: 8 };
}

const FooterComponentStyle = (): IStyleProps => {
  const theme = useTheme();
  return StyleSheet.create({
    containerIcons: {
      borderWidth: 3,
      borderColor: theme.colors.primary,
      padding: 4,
      borderRadius: 4
    },
    lineStyle: {
      marginBottom: 8
    },
    firstColumn: {
      marginRight: 32
    },
    containerRow: { alignItems: 'center' },
    textStyle: { marginLeft: 8 }
  });
};

export default FooterComponentStyle;
