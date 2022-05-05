import { StyleSheet } from 'react-native';

interface IStyleProps {
  container: {};
  containerFirst: {};
  containerIcon: {};
  textStyle: {};
}

const AccountItemStyle = (): IStyleProps => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    containerFirst: { flexDirection: 'row' },
    containerIcon: {
      marginRight: 16,
      minWidth: 25,
      alignItems: 'center'
    },
    textStyle: { textAlignVertical: 'center', alignSelf: 'center' }
  });
};

export default AccountItemStyle;
