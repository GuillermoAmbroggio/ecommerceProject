import { useTheme } from 'hooks';
import { StyleSheet } from 'react-native';

interface IStyleProps {
  containerPressed: {};
  text: {};
}

const GoBackStyle = (): IStyleProps => {
  const theme = useTheme();
  return StyleSheet.create({
    containerPressed: {
      paddingTop: 8,
      paddingBottom: 8,
      flexDirection: 'row',
      paddingHorizontal: 24,
      marginHorizontal: -5,
      alignItems: 'center',
      backgroundColor: theme.colors.header.background,
      shadowColor: '#000',
      shadowOffset: {
        height: 2,
        width: 0
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 8
    },
    text: { marginLeft: 8 }
  });
};

export default GoBackStyle;
