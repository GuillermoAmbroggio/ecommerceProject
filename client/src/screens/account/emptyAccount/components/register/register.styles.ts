import { StyleSheet } from 'react-native';

interface IStyleProps {
  container: {};
  textTitle: {};
  containerInput: {};
  linkPosition: {};
  buttonStyle: {};
  mgBottom: {};
  textLink: {};
  marginLogo: {};
  textBodyTitle: {};
  containerList: {};
  textList: {};
  containerToast: {};
  containerGlobalToast: {};
  contentToast: {};
  textToast: {};
}

const RegisterStyle = (): IStyleProps => {
  return StyleSheet.create({
    container: { flexGrow: 1 },
    textTitle: { marginBottom: 16, marginTop: 24 },
    containerInput: {
      marginBottom: 16
    },
    linkPosition: { textAlign: 'center', marginTop: 8 },
    marginLogo: { marginTop: 8 },
    buttonStyle: {
      alignSelf: 'stretch',
      alignItems: 'center',
      marginBottom: 8,
      marginTop: 16
    },
    mgBottom: { marginBottom: 36 },
    textLink: { textDecorationLine: 'underline' },
    textBodyTitle: { marginBottom: 8, marginTop: 24 },
    containerList: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 4
    },
    textList: { marginLeft: 8 },

    containerToast: {
      borderWidth: 1,
      borderColor: 'green',
      borderRadius: 12,
      position: 'relative',
      left: undefined,
      right: undefined,
      bottom: undefined,
      width: '100%'
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

export default RegisterStyle;
