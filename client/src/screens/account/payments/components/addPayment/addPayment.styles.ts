import { StyleSheet } from 'react-native';

interface IStyleProps {
  container: {};
  mgBottom16: {};
  buttonStyle: {};
  identificationTypeStyle: {
    width: 200;
  };
  expirationInput: {
    width: '50%';
  };
}

const AddPaymentsStyle = (): IStyleProps => {
  return StyleSheet.create({
    container: { paddingHorizontal: 16, paddingVertical: 16 },
    mgBottom16: { marginBottom: 16 },
    buttonStyle: {
      alignSelf: 'stretch',
      alignItems: 'center',
      marginTop: 24,
      zIndex: -1
    },
    identificationTypeStyle: {
      width: 200,
      position: 'relative',
      marginRight: 16
    },
    expirationInput: {
      width: '50%'
    }
  });
};

export default AddPaymentsStyle;
