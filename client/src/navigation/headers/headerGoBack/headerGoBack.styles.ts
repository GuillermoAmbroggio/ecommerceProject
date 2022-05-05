import { useTheme } from 'hooks';
import { StyleSheet } from 'react-native';

interface IStyleProps {
  containerCard: {};
  containerText: {};
}

const HeaderGoBackStyle = (): IStyleProps => {
  const theme = useTheme();

  return StyleSheet.create({
    containerCard: {
      flexDirection: 'row',
      paddingTop: 4,
      paddingHorizontal: 24,
      paddingBottom: 8,
      alignItems: 'center',
      backgroundColor: theme.colors.header.background,
      marginHorizontal: -5
    },
    containerText: {
      position: 'absolute',
      left: 50,
      right: 50,
      top: 16,
      bottom: 16,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });
};

export default HeaderGoBackStyle;
