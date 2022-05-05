import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'atoms';
import { useTheme } from 'hooks';
import React from 'react';
import Account from 'screens/account/Account';
import CartStack from '../cart/CartStack';
import HomeStack from '../home/HomeStack';
import { BottomTabParamList } from './bottomTabParamList';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.texts.tertiary,
        tabBarLabelStyle: { fontSize: 10 },
        tabBarInactiveBackgroundColor: theme.colors.background,
        tabBarIconStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          width: 30,
          height: 30
        },
        tabBarHideOnKeyboard: true,
        headerShown: false
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color }) => {
            return <Icon name="home" color={color} size={24} />;
          }
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          title: 'Mi cuenta - Agroinc Argentina',
          tabBarLabel: 'Mi cuenta',
          tabBarIcon: ({ color }) => {
            return <Icon name="user-circle" color={color} size={24} />;
          }
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStack}
        options={{
          tabBarLabel: 'Mi carrito',
          tabBarIcon: ({ color }) => {
            return <Icon name="shopping-cart" color={color} size={24} />;
          }
        }}
      />
      <Tab.Screen
        name="Help"
        component={CartStack}
        options={{
          tabBarLabel: 'Ayuda',
          tabBarIcon: ({ color }) => {
            return <Icon name="comments" color={color} size={24} />;
          }
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
