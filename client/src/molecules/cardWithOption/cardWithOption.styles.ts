import { StyleSheet } from 'react-native';

interface IStyleProps {
  containerCard: {};
  containerOptions: {};
  containerIconMenu: {};
}

const CardWithOptionStyle = (showOptions: boolean): IStyleProps => {
  return StyleSheet.create({
    containerCard: {
      padding: 16,
      position: 'relative',
      borderRadius: 4,
      marginBottom: 16
    },
    containerOptions: {
      position: showOptions ? 'absolute' : 'relative',
      paddingVertical: 8,
      paddingLeft: 8,
      paddingRight: 16,
      right: 48,
      top: 16,
      elevation: 2,
      borderRadius: 4,
      display: showOptions ? 'flex' : 'none',
      zIndex: 1
    },
    containerIconMenu: {
      alignSelf: 'flex-start',
      position: 'absolute',
      right: 16,
      top: 16,
      width: 32,
      alignItems: 'flex-end',
      zIndex: 1
    }
  });
};

export default CardWithOptionStyle;
