import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type BottomTabParamList = {
  HomeStack: undefined;
  Account: undefined;
  Cart: undefined;
  Help: undefined;
};

export type BottomTabNavProps<T extends keyof BottomTabParamList> = {
  navigation: StackNavigationProp<BottomTabParamList, T>;
  route: RouteProp<BottomTabParamList, T>;
};
