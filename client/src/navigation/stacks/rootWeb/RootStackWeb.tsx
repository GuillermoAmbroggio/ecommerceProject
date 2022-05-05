import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavBar from '../../../organisms/navBar/NavBar';
import React from 'react';
import { ColorSchemeName } from 'react-native';
import Account from 'screens/account/Account';
import Home from 'screens/home/Home';
import NotFoundScreen from 'screens/notFoundScreen/NotFoundScreen';
import { RootLinkingConfig } from './rootLinkingConfigWeb';
import { RootParamListWeb } from './rootParamListWeb';
import { Store } from 'screens/store';
import {
  Address,
  EmptyAccount,
  Invoicing,
  OrderDetail,
  Orders,
  Payments
} from 'screens/account';
import { useClientStore } from 'hooks';

const Stack = createStackNavigator<RootParamListWeb>();

interface IRootStackProps {
  colorScheme: ColorSchemeName;
}

const RootStackWeb = ({ colorScheme }: IRootStackProps): JSX.Element => {
  const { authentication } = useClientStore();
  const isAuth = !!authentication.user;
  return (
    <NavigationContainer
      linking={RootLinkingConfig}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          header: () => <NavBar navigation={navigation} />,
          headerShown: true
        })}
      >
        {/* -----------Screen principales----------- */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'AgroInc Argentina' }}
        />
        <Stack.Screen
          name="Account"
          component={Account}
          options={{ title: 'Mi cuenta - AgroInc Argentina' }}
        />
        <Stack.Screen
          name="Store"
          component={Store}
          options={{ title: 'Tienda - AgroInc Argentina' }}
        />
        <Stack.Screen
          name="NotFound"
          component={NotFoundScreen}
          options={{ title: 'Oops!' }}
        />

        {/* -----------My account----------- */}
        <Stack.Screen
          name="Orders"
          component={isAuth ? Orders : EmptyAccount}
          options={{ title: 'Mis compras - AgroInc Argentina' }}
        />
        <Stack.Screen
          name="OrderDetail"
          component={isAuth ? OrderDetail : EmptyAccount}
          options={{ title: 'Detalle de compra - AgroInc Argentina' }}
        />
        <Stack.Screen
          name="Address"
          component={isAuth ? Address : EmptyAccount}
          options={{ title: 'Mis direcciones - AgroInc Argentina' }}
        />
        <Stack.Screen
          name="Payments"
          component={isAuth ? Payments : EmptyAccount}
          options={{ title: 'Mis tarjetas - AgroInc Argentina' }}
        />
        <Stack.Screen
          name="Invoicing"
          component={isAuth ? Invoicing : EmptyAccount}
          options={{ title: 'Facturación - AgroInc Argentina' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackWeb;
