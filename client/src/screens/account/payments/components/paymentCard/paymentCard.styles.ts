import { useScreenSize, useTheme } from 'hooks';
import { StyleSheet } from 'react-native';

interface IStyleProps {
  container: {};
  contentGeneral: { flexDirection: 'row'; alignItems: 'center' };
  containerIcon: {
    width: 50;
    height: 50;
    borderRadius: 50;
    borderWidth: 1;
    borderColor: string;
    overflow: 'hidden';
    marginRight: 16;
    justifyContent: 'center';
    alignItems: 'center';
  };
  paymentImage: {
    width: '100%';
    height: '100%';
    resizeMode: 'contain';
  };
  alertContainer: { padding: number };
  textAlert: { marginTop: 16; marginBottom: number };
  buttonsAlert: { justifyContent: 'space-between' };
}

const PaymentCardStyle = (): IStyleProps => {
  const theme = useTheme();
  const isBig = useScreenSize() === 'big';

  return StyleSheet.create({
    container: { paddingTop: 16, paddingBottom: 24 },
    contentGeneral: { flexDirection: 'row', alignItems: 'center' },
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
    alertContainer: { padding: isBig ? 32 : 16 },
    textAlert: { marginTop: 16, marginBottom: isBig ? 32 : 16 },
    buttonsAlert: { justifyContent: 'space-between' }
  });
};

export default PaymentCardStyle;
