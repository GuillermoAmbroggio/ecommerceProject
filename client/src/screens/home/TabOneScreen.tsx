import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'atoms';
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function TabOneScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab </Text>
      <Button
        title="eliminar asyncstorge"
        onPress={() => {
          void AsyncStorage.removeItem('onboarding');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
});
