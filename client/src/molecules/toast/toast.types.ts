import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type VariantsToast = 'success' | 'info' | 'error' | 'orange';

export interface IToastProps {
  variant?: VariantsToast;
  autoHideDuration?: number;
  open: boolean;
  onClose: () => void;
  positionBottom?: number;
  positionLeft?: number;
  positionRight?: number;
  positionTop?: number;
  containerGlobalStyle?: StyleProp<ViewStyle>;
  containerToastStyle?: StyleProp<ViewStyle>;
  permanent?: boolean;
  textToast?: string;
  textStyle?: StyleProp<TextStyle>;
}
