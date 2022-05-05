import { StyleSheet } from 'react-native';

interface IStyleProps {
  containerLogo: {};
  imageLogo: {};
}

const LogoItemStyle = (): IStyleProps => {
  return StyleSheet.create({
    containerLogo: {
      alignItems: 'center',
      marginRight: 16,
      justifyContent: 'center',
      flexDirection: 'row'
    },
    imageLogo: {
      width: 50,
      height: 50,
      marginRight: 8
    }
  });
};

export default LogoItemStyle;
