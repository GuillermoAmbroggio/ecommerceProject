import { StyleSheet } from 'react-native';

interface IStyleProps {
  containerList: {};
  textList: {};
  containerSection: {};
  textTitle: {};
  imageOne: {};
  imageTwo: {};
}

const FirstOrderRowStyle = (): IStyleProps => {
  return StyleSheet.create({
    containerSection: {
      flex: 0.5
    },
    textTitle: { marginTop: 14, marginBottom: 32 },
    containerList: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 14
    },
    textList: { marginLeft: 8 },
    imageOne: { width: '100%', height: 375, resizeMode: 'contain' },
    imageTwo: { width: '100%', height: 165, resizeMode: 'contain' }
  });
};

export default FirstOrderRowStyle;
