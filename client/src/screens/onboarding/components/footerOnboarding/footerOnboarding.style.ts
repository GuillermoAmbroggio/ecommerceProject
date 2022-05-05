import { StyleSheet } from 'react-native';
import { CssType } from 'utils/types/types';

const footerOnboardingStyle = (): CssType => {
  return StyleSheet.create({
    buttons: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingBottom: 34
    }
  });
};

export default footerOnboardingStyle;
