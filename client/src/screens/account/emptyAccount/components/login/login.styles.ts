import { useScreenSize } from 'hooks';
import { StyleSheet } from 'react-native';

interface IStyleProps {
  container: {};
  contentStyle: {};
  marginLogo: {};
  containerInput: {};
  buttonStyle: {};
  mgBottom: {};
  textTitle: {};
  linkPosition: {};
  textLink: {};
}

const LoginStyle = (): IStyleProps => {
  const screen = useScreenSize();
  const isBig = screen === 'big';
  return StyleSheet.create({
    container: { flexGrow: 1 },
    contentStyle: { justifyContent: 'space-between' },
    textTitle: { marginBottom: 16, marginTop: 52 },
    containerInput: {
      marginBottom: 16
    },
    marginLogo: { marginTop: 12 },
    linkPosition: { textAlign: 'center', marginBottom: isBig ? 32 : undefined },
    buttonStyle: {
      alignSelf: 'stretch',
      alignItems: 'center',
      marginBottom: 16
    },
    mgBottom: { marginBottom: 36 },
    textLink: { textDecorationLine: 'underline' }
  });
};

export default LoginStyle;
