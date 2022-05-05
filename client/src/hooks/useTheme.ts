import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import useClientStore from './useClientStore';
import { darkThemeColors, ITheme, lightThemeColors } from 'theme/theme';

const useTheme: () => ITheme = () => {
  const { theme } = useClientStore();
  const LightTheme = {
    ...DefaultTheme,
    dark: false,
    colors: { ...DefaultTheme.colors, ...lightThemeColors.colors }
  };
  const DarkThemes = {
    dark: true,
    colors: { ...DarkTheme.colors, ...darkThemeColors.colors }
  };
  if (theme === 'light') {
    return LightTheme;
  } else {
    return DarkThemes;
  }
};

export default useTheme;
