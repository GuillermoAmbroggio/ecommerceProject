import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type CartParamList = {
  TabTwoScreen: undefined;
};

export type CartNavProps<T extends keyof CartParamList> = {
  navigation: StackNavigationProp<CartParamList, T>;
  route: RouteProp<CartParamList, T>;
};
