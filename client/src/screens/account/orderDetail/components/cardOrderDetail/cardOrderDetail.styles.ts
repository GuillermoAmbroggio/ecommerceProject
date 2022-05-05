import { StyleSheet } from 'react-native';

interface IStyleProps {
  container: {};
  containerHeader: {};
  titleHeader: {};
  containerTextContent: {};
  deliveryText: {};
  containerFooter: {};
  pd16: {};
}

const CardOrderDetailStyle = (): IStyleProps => {
  return StyleSheet.create({
    container: { borderRadius: 4 },
    containerHeader: { paddingVertical: 8, paddingHorizontal: 16 },
    titleHeader: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center'
    },
    containerTextContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8
    },
    deliveryText: { flexDirection: 'row', justifyContent: 'space-between' },
    containerFooter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 8,
      paddingHorizontal: 16
    },
    pd16: { padding: 16 }
  });
};

export default CardOrderDetailStyle;
