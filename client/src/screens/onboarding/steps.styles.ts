import { StyleSheet } from 'react-native';
import { CssType } from 'utils/types/types';

const stepsStyle = (): CssType => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center'
    },
    image: {
      resizeMode: 'contain',
      width: '100%',
      height: '50%'
    },
    firstText: {
      textAlign: 'center',
      marginTop: 16,
      marginBottom: 8
    },
    secondText: {
      textAlign: 'center'
    },
    tabs: {
      paddingTop: 26,
      justifyContent: 'center'
    }
  });
};

export default stepsStyle;
