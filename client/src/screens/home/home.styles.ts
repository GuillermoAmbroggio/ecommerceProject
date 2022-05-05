import { useScreenSize } from 'hooks';
import { StyleSheet } from 'react-native';

interface IHomeStyle {
  containerCarousel: {};
  container: {};
  containerCategories: {};
  containerSearchWeb: {};
  inputSearchWeb: {};
  inputContainerSearchWeb: { alignItems: 'center' };
  containerSectionWeb: { marginTop: 80; paddingHorizontal: 60 };
}

const HomeStyle = (): IHomeStyle => {
  const screen = useScreenSize();
  const bigScreen = screen === 'big';
  return StyleSheet.create({
    container: { paddingBottom: bigScreen ? 0 : 24 },
    containerCategories: { marginBottom: 24, marginTop: bigScreen ? 0 : 24 },
    containerCarousel: {
      paddingHorizontal: bigScreen ? 60 : 16,
      height: bigScreen ? 500 : 150,
      marginTop: bigScreen ? 24 : undefined
    },
    containerSearchWeb: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 48
    },
    inputSearchWeb: { width: '50%', marginTop: 16 },
    inputContainerSearchWeb: { alignItems: 'center' },
    containerSectionWeb: { marginTop: 80, paddingHorizontal: 60 }
  });
};

export default HomeStyle;
