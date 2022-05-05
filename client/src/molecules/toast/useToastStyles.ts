import { useTheme } from 'hooks';
import { VariantsToast } from './toast.types';

type UseToastStyles = (variant?: VariantsToast) =>
  | {
      icon: string;
      color: string;
      backgroundColor: string;
    }
  | undefined;

const useToastStyles: UseToastStyles = (variant) => {
  const theme = useTheme();
  const variantStyle = {
    success: {
      icon: 'check-circle',
      color: theme.colors.success,
      backgroundColor: theme.colors.common.white
    },
    error: {
      icon: 'exclamation-triangle',
      color: theme.colors.danger,
      backgroundColor: theme.colors.red.red30
    },
    info: {
      icon: 'exclamation-circle',
      color: theme.colors.info,
      backgroundColor: theme.colors.blue.blue30
    },
    orange: {
      icon: 'tag',
      color: theme.colors.orange.orange50,
      backgroundColor: theme.colors.orange.orange30
    }
  };

  return variant ? variantStyle[variant] : undefined;
};

export default useToastStyles;
