import { useTheme } from 'hooks';
import { StyleSheet } from 'react-native';

interface ICard {
  container: {};
  dividerStyle: {};
}

const CardStyle = (): ICard => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      elevation: 9
    },
    dividerStyle: {
      borderBottomColor: theme.colors.gray.gray10,
      borderBottomWidth: 1
    }
  });
};

export default CardStyle;
