import { useTheme } from 'hooks';
import { Platform, StyleSheet } from 'react-native';
import { CssType } from 'utils/types/types';

export type ButtonType = 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'default' | 'big' | 'small';

type containerSize = {
  paddingVertical: number;
  paddingHorizontal: number;
  cursor?: string;
};

type containerType = {
  borderRadius: number;
  backgroundColor: string;
  borderColor?: string;
  borderWidth?: number;
};

const ButtonStyle = (type: ButtonType, size: ButtonSize): CssType => {
  const theme = useTheme();

  const containerSize: containerSize = {
    paddingVertical: 16,
    paddingHorizontal: 26,
    cursor: 'pointer'
  };
  const containerType: containerType = {
    borderRadius: 14,
    backgroundColor: theme.colors.primary
  };
  const textType = { color: theme.colors.common.white };
  if (type === 'secondary') {
    textType.color = theme.colors.primary;
    containerType.backgroundColor = 'transparent';
    containerType.borderWidth = 1;
  }
  if (type === 'tertiary') {
    textType.color = theme.colors.primary;
    containerType.backgroundColor = 'transparent';
  }
  if (Platform.OS !== 'web') {
    delete containerSize.cursor;
  }
  return StyleSheet.create({
    container: {
      ...containerSize,
      ...containerType,
      alignSelf: 'flex-start'
    },
    containerDisabled: {
      ...containerSize,
      alignSelf: 'flex-start',
      borderRadius: 14,
      backgroundColor: theme.colors.secondary
    },
    text: {
      ...textType
    }
  });
};

export default ButtonStyle;
