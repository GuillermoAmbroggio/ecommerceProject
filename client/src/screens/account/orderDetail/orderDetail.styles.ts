import { useTheme } from 'hooks';
import { StyleSheet } from 'react-native';

interface IStyleProps {
  container: {};
  mgTop16: {};
  containerIcon: {};
  contentGeneral: {};
  paymentImage: {};
  dividerProducts: {};
}

const OrderDetailStyle = (): IStyleProps => {
  const theme = useTheme();
  return StyleSheet.create({
    container: { paddingTop: 16, paddingBottom: 24 },
    contentGeneral: { flexDirection: 'row', alignItems: 'center' },
    mgTop16: { marginTop: 16 },
    containerIcon: {
      width: 50,
      height: 50,
      borderRadius: 50,
      borderWidth: 1,
      borderColor: theme.colors.secondary,
      overflow: 'hidden',
      marginRight: 16,
      justifyContent: 'center',
      alignItems: 'center'
    },
    paymentImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain'
    },
    dividerProducts: { paddingTop: 8, marginBottom: 8 }
  });
};

export default OrderDetailStyle;
