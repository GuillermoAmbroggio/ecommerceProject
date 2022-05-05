import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from 'screens/home/Home';
import { HomeParamList } from './homeParamList';

const HomeNavigator = createStackNavigator<HomeParamList>();

const HomeStack = (): JSX.Element => {
  const { Navigator, Screen } = HomeNavigator;
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{ title: 'AgroInc Argentina' }}
      />
    </Navigator>
  );
};

export default HomeStack;
