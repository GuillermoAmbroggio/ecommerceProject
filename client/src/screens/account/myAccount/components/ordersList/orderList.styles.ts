import { StyleSheet } from 'react-native';

interface IStyleProps {
  container: {};
  containerItems: {};
  textStyle: {};
  dividerStyle: {};
}

const OrderListStyle = (): IStyleProps => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    containerItems: { flexDirection: 'row', marginRight: 8 },
    textStyle: {
      marginHorizontal: 16,
      width: 100,
      textAlignVertical: 'center',
      alignSelf: 'center'
    },
    dividerStyle: {
      marginVertical: 8
    }
  });
};

export default OrderListStyle;
