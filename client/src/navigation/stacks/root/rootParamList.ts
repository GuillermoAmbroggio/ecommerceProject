import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootParamList = {
  Root: undefined;
  Profile: undefined;
  Login: undefined;
  Register: undefined;
  Orders: undefined;
  OrderDetail: { orderId: number };
  Address: undefined;
  Payments: undefined;
  Invoicing: undefined;
  NotFound: undefined;
};

export type RootNavProps<T extends keyof RootParamList> = {
  navigation: StackNavigationProp<RootParamList, T>;
  route: RouteProp<RootParamList, T>;
};
