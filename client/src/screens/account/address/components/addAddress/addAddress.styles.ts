import { StyleSheet } from 'react-native';

interface IStyleProps {
  container: {};
  mgBottom16: {};
  containerStreetNumber: {};
  inputStreetNumber: {};
  containerCheckbox: {};
  buttonStyle: {};
  inputName: { width: '60%' };
  inputAparment: { width: '40%' };
}

const AddAddressStyle = (): IStyleProps => {
  return StyleSheet.create({
    container: { paddingHorizontal: 16, paddingVertical: 16 },
    mgBottom16: { marginBottom: 16 },
    containerStreetNumber: {
      flexDirection: 'row',
      marginBottom: 16
    },
    inputStreetNumber: { width: '60%' },
    inputName: { width: '60%' },
    inputAparment: { width: '40%', marginRight: 16 },
    containerCheckbox: {
      alignItems: 'center',
      flex: 1,
      alignSelf: 'center'
    },
    buttonStyle: {
      alignSelf: 'stretch',
      alignItems: 'center',
      marginTop: 24
    }
  });
};

export default AddAddressStyle;
