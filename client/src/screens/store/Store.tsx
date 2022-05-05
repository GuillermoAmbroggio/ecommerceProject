import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Text } from 'atoms';
import { RootParamListWeb } from 'navigation/stacks/rootWeb/rootParamListWeb';
import React from 'react';
import { View } from 'react-native';

interface IStoreProps {
  navigation: StackNavigationProp<RootParamListWeb, 'Store'>;
  route: RouteProp<RootParamListWeb, 'Store'>;
}

const Store: React.FC<IStoreProps> = ({ navigation, route }) => {
  console.log('STORE 14', route);
  return (
    <View>
      <Text>STORE</Text>
    </View>
  );
};

export default Store;
