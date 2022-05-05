import { useScreenSize } from 'hooks';
import { StyleSheet } from 'react-native';

interface IStyleProps {
  containerContent: {};
}

const PaymentStyle = (): IStyleProps => {
  const isBig = useScreenSize() === 'big';
  return StyleSheet.create({
    containerContent: { paddingTop: isBig ? 60 : 16, paddingHorizontal: 16 }
  });
};

export default PaymentStyle;
