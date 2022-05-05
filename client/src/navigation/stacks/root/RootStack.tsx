import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GoBack from 'navigation/headers/goBack/GoBack';
import HeaderGoBack from 'navigation/headers/headerGoBack/HeaderGoBack';
import React from 'react';
import { ColorSchemeName } from 'react-native';
import {
  Address,
  Login,
  Orders,
  Payments,
  Profile,
  Register
} from 'screens/account';
import OrderDetail from '../../../screens/account/orderDetail/OrderDetail';
import NotFoundScreen from 'screens/notFoundScreen/NotFoundScreen';
import BottomTabNavigator from './bottomTabNavigator/BottomTabNavigator';
import { RootLinkingConfig } from './rootLinkingConfig';
import { RootParamList } from './rootParamList';

const Stack = createStackNavigator<RootParamList>();

interface IRootStackProps {
  colorScheme: ColorSchemeName;
}

const RootStack = ({ colorScheme }: IRootStackProps): JSX.Element => {
  return (
    <NavigationContainer
      linking={RootLinkingConfig}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator
        screenOptions={{
          headerMode: 'screen',
          headerShown: false,
          gestureEnabled: true,
          cardOverlayEnabled: true
        }}
      >
        <Stack.Screen name="Root" component={BottomTabNavigator} />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={({ navigation }) => ({
            header: () => (
              <HeaderGoBack navigation={navigation} title="MI PERFIL" />
            ),
            headerShown: true,
            title: 'Mi perfil - Agroinc Argentina'
          })}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={({ navigation }) => ({
            header: () => <GoBack navigation={navigation} />,
            headerShown: true,
            title: 'Inicia sesión - Agroinc Argentina'
          })}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={() => ({
            title: 'Registro - Agroinc Argentina'
          })}
        />
        <Stack.Screen
          name="Orders"
          component={Orders}
          options={({ navigation }) => ({
            title: 'Mis compras - Agroinc Argentina',
            header: () => (
              <HeaderGoBack title="MIS COMPRAS" navigation={navigation} />
            ),
            headerShown: true
          })}
        />
        <Stack.Screen
          name="OrderDetail"
          component={OrderDetail}
          options={({ navigation }) => ({
            title: 'Detalle de la compra - Agroinc Argentina',
            header: () => (
              <HeaderGoBack
                title="Detalle de la compra"
                navigation={navigation}
              />
            ),
            headerShown: true
          })}
        />
        <Stack.Screen
          name="Address"
          component={Address}
          options={({ navigation }) => ({
            title: 'Domicilios - Agroinc Argentina',
            header: () => (
              <HeaderGoBack title="Domicilios" navigation={navigation} />
            ),
            headerShown: true
          })}
        />
        <Stack.Screen
          name="Payments"
          component={Payments}
          options={({ navigation }) => ({
            title: 'Tarjetas - Agroinc Argentina',
            header: () => (
              <HeaderGoBack title="Tarjetas" navigation={navigation} />
            ),
            headerShown: true
          })}
        />
        <Stack.Screen
          name="NotFound"
          component={NotFoundScreen}
          options={{ title: 'Oops!' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
