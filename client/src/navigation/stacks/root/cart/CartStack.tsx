import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import TabTwoScreen from 'screens/home/TabTwoScreen';
import { CartParamList } from './cartParamList';

const CartNavigator = createStackNavigator<CartParamList>();

const CartStack = (): JSX.Element => {
  const { Navigator, Screen } = CartNavigator;

  return (
    <Navigator>
      <Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab TWO Title' }}
      />
    </Navigator>
  );
};

export default CartStack;
