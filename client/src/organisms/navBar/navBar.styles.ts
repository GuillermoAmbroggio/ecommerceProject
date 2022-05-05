import { useScreenSize, useTheme } from 'hooks';
import { StyleSheet } from 'react-native';
import { CssType } from 'utils/types/types';

const NavBarStyle = (): CssType => {
  const screen = useScreenSize();
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.header.background,
      paddingHorizontal: screen === 'big' ? 60 : 16,
      paddingVertical: 16,
      flexDirection: screen === 'big' ? 'row' : 'column',
      alignItems: 'center'
    },
    containerLogo: {
      alignItems: 'center',
      marginRight: 16,
      marginBottom: screen === 'big' ? 0 : 8,
      flexDirection: 'row'
    },
    imageLogo: {
      width: 50,
      height: 50,
      marginRight: 8
    },
    inputContainer: { marginRight: 16 },
    inputIcon: {
      marginRight: 16
    },
    containerRight: {
      alignItems: 'center',
      flex: screen === 'big' ? 1 : undefined
    },
    topMenu: {
      flex: 1,
      justifyContent: 'center'
    },
    textsTopMenu: {
      marginRight: 24
    }
  });
};

export default NavBarStyle;
