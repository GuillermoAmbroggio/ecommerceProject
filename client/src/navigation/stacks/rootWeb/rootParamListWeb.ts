import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootParamListWeb = {
  Home: undefined;
  Account: undefined;
  Company: undefined;
  Store: { defaultSearch: string } | undefined;
  Contact: undefined;
  NotFound: undefined;
  Orders: undefined;
  OrderDetail: { orderId: number };
  Address: undefined;
  Payments: undefined;
  Invoicing: undefined;
};

export type RootNavPropsWeb<T extends keyof RootParamListWeb> = {
  navigation: StackNavigationProp<RootParamListWeb, T>;
  route: RouteProp<RootParamListWeb, T>;
};
