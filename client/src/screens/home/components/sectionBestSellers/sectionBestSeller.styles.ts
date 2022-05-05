import { StyleSheet } from 'react-native';

interface IStyleProps {
  container: {};
}

const SectionBestSellersStyle = (): IStyleProps => {
  return StyleSheet.create({
    container: {
      marginHorizontal: 16,
      marginTop: 24,
      borderRadius: 10
    }
  });
};

export default SectionBestSellersStyle;
