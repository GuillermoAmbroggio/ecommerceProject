import { StyleSheet } from 'react-native';
import { CssType } from 'utils/types/types';

const styleText = (): CssType => {
  const montserrat = 'montserrat-regular';
  const montserratBold = 'montserrat-bold';
  const ptsansBold = 'ptsans-bold';
  return StyleSheet.create({
    titleBig: {
      fontFamily: ptsansBold,
      fontSize: 40,
      lineHeight: 52
    },
    bodyTitle: {
      fontFamily: montserratBold,
      fontSize: 24,
      lineHeight: 24
    },
    bodyBold: {
      fontFamily: montserratBold,
      fontSize: 16,
      lineHeight: 17
    },
    bodyText: {
      fontFamily: montserrat,
      fontSize: 16,
      lineHeight: 17
    },
    bodySmall: {
      fontFamily: montserrat,
      fontSize: 14,
      lineHeight: 20
    },
    bodySmallBold: {
      fontFamily: montserratBold,
      fontSize: 14,
      lineHeight: 14
    }
  });
};

export default styleText;
