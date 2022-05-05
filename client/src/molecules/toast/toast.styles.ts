import { StyleSheet } from 'react-native';

interface IStyleProps {
  containerGlobal: {};
  containerToast: {};
  containerTexts: {};
  contentToast: {};
}

const ToastStyle = (): IStyleProps => {
  return StyleSheet.create({
    containerGlobal: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    containerToast: {
      position: 'absolute',
      padding: 16,
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'flex-start'
    },
    containerTexts: {
      marginLeft: 8,
      justifyContent: 'space-between',
      flexDirection: 'row',
      flex: 1
    },
    contentToast: {
      flexDirection: 'row',
      alignItems: 'center'
    }
  });
};

export default ToastStyle;
