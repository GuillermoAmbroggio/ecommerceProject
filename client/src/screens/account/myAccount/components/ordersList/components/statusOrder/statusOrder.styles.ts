import { useTheme } from 'hooks';
import { StyleSheet } from 'react-native';
import { IStatusOrders } from 'utils/types/OrderTypes';

interface IStyleProps {
  container: {};
  textStyle: {};
}

const StatusOrderStyle = (status: IStatusOrders): IStyleProps => {
  const theme = useTheme();
  const colorBackground = {
    process: theme.colors.secondary,
    completed: theme.colors.success,
    canceled: theme.colors.danger,
    incoming: theme.colors.tertiary,
    ready: theme.colors.success
  };
  return StyleSheet.create({
    container: {
      backgroundColor: colorBackground[status],
      paddingVertical: 4,
      opacity: 0.5,
      minWidth: 110,
      borderRadius: 4,
      paddingHorizontal: 8
    },
    textStyle: { textAlign: 'center' }
  });
};

export default StatusOrderStyle;
