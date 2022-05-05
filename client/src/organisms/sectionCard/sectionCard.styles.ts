import { useScreenSize } from 'hooks';
import { StyleSheet } from 'react-native';

interface IStyleProps {
  containerTitle: {};
  containerBody: {};
}

const SectionCardStyle = (): IStyleProps => {
  const isBig = useScreenSize() === 'big';
  return StyleSheet.create({
    containerTitle: { paddingHorizontal: 16, paddingVertical: isBig ? 16 : 8 },
    containerBody: { padding: 16 }
  });
};

export default SectionCardStyle;
