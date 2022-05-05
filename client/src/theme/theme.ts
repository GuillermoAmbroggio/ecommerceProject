import colors from './colors';

export interface ITheme {
  dark: boolean;
  colors: {
    card: string;
    text: string;
    border: string;
    notification: string;

    common: {
      black: string;
      white: string;
    };
    header: {
      background: string;
    };
    primary: string;
    secondary: string;
    tertiary: string;
    background: string;
    texts: {
      primary: string;
      secundary: string;
      tertiary: string;
      white: string;
      danger: string;
      succes: string;
      darkGreen: string;
    };
    backgrounds: {
      categoryCards: string;
    };
    gray: {
      gray10: string;
      gray30: string;
      gray50: string;
    };
    green: {
      green30: string;
    };
    red: { red30: string };
    blue: { blue30: string };
    orange: { orange30: string; orange50: string };
    success: string;
    danger: string;
    info: string;
  };
}

export const lightThemeColors: ITheme = {
  dark: false,
  colors: {
    border: 'rgb(216, 216, 216)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    notification: 'rgb(255, 59, 48)',
    common: {
      black: colors.common.black,
      white: colors.common.white
    },
    header: { background: '#badbc1' },
    primary: colors.green.green100,
    secondary: colors.gray.gray30,
    tertiary: colors.green.green10,
    background: '#FDFEFF',
    texts: {
      primary: colors.gray.gray100,
      secundary: colors.common.black,
      tertiary: colors.gray.gray50,
      white: colors.common.white,
      succes: colors.green.green60,
      danger: colors.red.red50,
      darkGreen: colors.green.green100
    },
    backgrounds: {
      categoryCards: colors.green.green60
    },
    gray: {
      gray10: colors.gray.gray10,
      gray30: colors.gray.gray30,
      gray50: colors.gray.gray50
    },
    green: {
      green30: colors.green.green30
    },
    red: { red30: colors.red.red30 },
    blue: { blue30: colors.blue.blue30 },
    orange: {
      orange30: colors.orange.orange30,
      orange50: colors.orange.orange50
    },
    info: colors.blue.blue50,
    success: colors.green.green60,
    danger: colors.red.red50
  }
};

export const darkThemeColors: ITheme = {
  dark: false,
  colors: { ...lightThemeColors.colors }
};
