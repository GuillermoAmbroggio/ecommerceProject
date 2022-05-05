import { StyleSheet } from 'react-native';

interface IStyleProps {
  imageStyle: {};
  containerSection: {};
  containerButtons: {};
  imageButtonStore: {};
}

const DownloadAppRowStyle = (): IStyleProps => {
  return StyleSheet.create({
    imageStyle: { width: '100%', height: 577, resizeMode: 'contain' },
    containerSection: {
      paddingLeft: 80,
      paddingTop: 60
    },
    containerButtons: { marginTop: 32 },
    imageButtonStore: { width: 217, height: 62, resizeMode: 'stretch' }
  });
};

export default DownloadAppRowStyle;
