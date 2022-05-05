import { useScreenSize, useTheme } from 'hooks';
import { StyleSheet } from 'react-native';

interface IStyleProps {
  containerModal: {};
  containerGlobal: {};
  containerClose: {};
  containerHeader: {};
  contentModal: {};
}

const ModalStyle = (heightAutoContent: boolean): IStyleProps => {
  const theme = useTheme();
  const isBig = useScreenSize() === 'big';
  return StyleSheet.create({
    containerGlobal: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    containerClose: { flex: 1, width: '100%' },
    containerModal: {
      width: isBig ? '60%' : '100%',
      backgroundColor: 'white',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderColor: theme.colors.border,
      borderTopWidth: 1,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      height: !heightAutoContent ? '95%' : undefined
    },
    containerHeader: {
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      minHeight: 40,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 8
    },
    contentModal: { flex: 1 }
  });
};

export default ModalStyle;
