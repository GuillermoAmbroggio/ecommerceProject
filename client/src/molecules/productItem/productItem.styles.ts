import { StyleSheet } from 'react-native';

interface IStyleProps {
  container: {};
  containerImage: {};
  imageStyle: {};
  containerTexts: {};
  textDescription: {};
}

const ProductItemStyle = (): IStyleProps => {
  return StyleSheet.create({
    container: { flexDirection: 'row', padding: 8 },
    containerImage: { width: 90, height: 90, marginRight: 8 },
    imageStyle: { width: '100%', height: '100%', resizeMode: 'cover' },
    containerTexts: { flex: 1 },
    textDescription: { marginVertical: 4 }
  });
};

export default ProductItemStyle;
