import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type AccountParamList = {
  Account: undefined;
  Profile: undefined;
  Login: undefined;
  Register: undefined;
  Orders: undefined;
  OrderDetail: { orderId: number };
  Address: undefined;
  Payments: undefined;
  Invoicing: undefined;
};

export type AccountNavProps<T extends keyof AccountParamList> = {
  navigation: StackNavigationProp<AccountParamList, T>;
  route: RouteProp<AccountParamList, T>;
};
