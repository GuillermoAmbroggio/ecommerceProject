import { useScreenSize, useTheme } from 'hooks';
import { StyleSheet } from 'react-native';

interface IStyleProps {
  containerCard: {};
  containerHeaderCard: {};
  containerTitleHeader: {};
  contentCard: {};
  containerImage: {};
  imageStyle: {};
  containerProduct: {};
  footerCard: {};
}

const OrderCardStyle = (): IStyleProps => {
  const isBig = useScreenSize() === 'big';
  const theme = useTheme();
  return StyleSheet.create({
    containerCard: { borderRadius: 4 },
    containerHeaderCard: { padding: isBig ? 16 : 8 },
    containerTitleHeader: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center'
    },
    contentCard: { flexDirection: 'row', padding: isBig ? 16 : 8 },
    containerImage: {
      width: 60,
      height: 60,
      marginRight: 8,
      borderColor: theme.colors.secondary,
      borderWidth: 1,
      borderRadius: 8
    },
    imageStyle: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      borderRadius: 8
    },
    containerProduct: { flex: 1, marginTop: 4 },
    footerCard: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: isBig ? 16 : 8
    }
  });
};

export default OrderCardStyle;
