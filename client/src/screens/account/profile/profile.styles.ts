import { useTheme } from 'hooks';
import { StyleSheet } from 'react-native';

interface IStyleProps {
  container: {};
  containerInput: {};
  buttonStyle: {};
  mgBottom: {};
  pdVertical: {};
  changePass: {};
}

const ProfileStyle = (): IStyleProps => {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      flex: 1,
      alignItems: 'center',
      paddingBottom: 24,
      paddingTop: 16
    },
    containerInput: {
      marginBottom: 16
    },
    buttonStyle: {
      alignSelf: 'stretch',
      alignItems: 'center'
    },
    mgBottom: { marginBottom: 16 },
    pdVertical: { paddingVertical: 16 },
    changePass: {
      color: theme.colors.primary,
      marginVertical: 16
    }
  });
};

export default ProfileStyle;
