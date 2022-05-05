import { StyleSheet } from 'react-native';

interface IStyleProps {
  container: {};
  buttonStyle: {};
  containerInput: {};
  textBodyTitle: {};
  containerList: {};
  textList: {};
}

const ChangePassStyle = (): IStyleProps => {
  return StyleSheet.create({
    container: { paddingHorizontal: 16, flex: 1, paddingTop: 16 },
    buttonStyle: {
      alignSelf: 'stretch',
      alignItems: 'center',
      paddingVertical: 16,
      marginVertical: 24
    },
    containerInput: {
      marginBottom: 16
    },
    textBodyTitle: { marginBottom: 8, marginTop: 24 },
    containerList: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 4
    },
    textList: { marginLeft: 8 }
  });
};

export default ChangePassStyle;
