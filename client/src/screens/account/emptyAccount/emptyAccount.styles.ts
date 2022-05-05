import { useScreenSize } from 'hooks';
import { Platform, StyleSheet } from 'react-native';

interface IStyleProps {
  container: {};
  textTitle: {};
  containerItems: {};
  itemsText: {};
  buttonStyle: {};
  mgBottom: {};
  imageWeb: {};
}

const EmptyAccountStyle = (): IStyleProps => {
  const screen = useScreenSize();
  const isBig = screen === 'big';
  const imageWeb: { [key: string]: string } = {};
  if (Platform.OS === 'web') {
    imageWeb.width = '100%';
    imageWeb.height = '100%';
    imageWeb.resizeMode = 'contain';
  }
  return StyleSheet.create({
    container: {
      paddingTop: isBig ? 60 : 16,
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    textTitle: {
      textAlign: 'center',
      marginBottom: 16,
      marginTop: isBig ? 48 : 16
    },
    containerItems: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
      width: isBig ? 600 : undefined,
      alignSelf: isBig ? 'center' : 'flex-start'
    },
    itemsText: {
      flexWrap: 'wrap',
      flex: 1,
      marginLeft: 8
    },
    buttonStyle: {
      alignSelf: 'stretch',
      alignItems: 'center'
    },
    mgBottom: { marginBottom: 16 },
    imageWeb
  });
};

export default EmptyAccountStyle;
