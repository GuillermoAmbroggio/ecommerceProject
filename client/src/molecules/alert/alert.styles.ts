import { Platform, StyleSheet } from 'react-native';

interface IStyleProps {
  containerToast: {};
  containerGlobalToast: {};
  contentToast: {};
  textToast: {};
}

const AlertStyle = (): IStyleProps => {
  return StyleSheet.create({
    containerToast: {
      borderWidth: 1,
      borderColor: 'green',
      borderRadius: 12,
      position: 'relative',
      left: undefined,
      right: undefined,
      bottom: undefined,
      top: undefined,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      width: Platform.OS !== 'web' ? '100%' : undefined
    },
    containerGlobalToast: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 16,
      backgroundColor: 'rgba(52, 52, 52, 0.8)'
    },
    contentToast: { justifyContent: 'center', alignItems: 'center' },
    textToast: { textAlign: 'center', marginTop: 16 }
  });
};

export default AlertStyle;
