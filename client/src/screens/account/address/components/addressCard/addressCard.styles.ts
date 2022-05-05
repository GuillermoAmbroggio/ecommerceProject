import { useScreenSize } from 'hooks';
import { StyleSheet } from 'react-native';

interface IStyleProps {
  alertContainer: { padding: number };
  textAlert: { marginTop: 16; marginBottom: number };
  buttonsAlert: { justifyContent: 'space-between' };
}

const AddressCardStyle = (): IStyleProps => {
  const isBig = useScreenSize() === 'big';

  return StyleSheet.create({
    alertContainer: { padding: isBig ? 32 : 16 },
    textAlert: { marginTop: 16, marginBottom: isBig ? 32 : 16 },
    buttonsAlert: { justifyContent: 'space-between' }
  });
};

export default AddressCardStyle;
